import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { api } from "@/services/api";
import { error } from "console";

interface FormData {
  email: string;
  password: string;
  name: string;
}

export function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    message: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const nameIsValid = (name: string) => name.length === 0;

  const validatePassword = (password: string) => password.length >= 4;

  const handleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = { name, email, password };

    if (!nameIsValid) {
      setErrors((prev) => ({ ...prev, name: "Nome inválido" }));
      return;
    }

    if (!validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "Email inválido" }));
      return;
    }

    if (!validatePassword(password)) {
      setErrors((prev) => ({
        ...prev,
        password: "Senha deve ter ao menos 4 caracteres",
      }));
      return;
    }

    registerNewUser(formData);
  }

  async function registerNewUser(formData: FormData) {
    try {
      const response = await api.post("/auth/register", formData);
      console.log(response.data);
    } catch (error: any) {
      if (error.response && error.response.status == 409) {
        setErrors((prev) => ({
          ...prev,
          message: "Este email já está em uso. Por favor, tente outro.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          message: "Ocorreu um erro ao tentar registrar o usuário.",
        }));
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 items-center justify-center h-full w-full "
    >
      <h1 className="text-4xl font-bold text-primary">Cadastre-se</h1>
      <div className="flex flex-col h-[68px]">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu nome"
          className="w-96 rounded-xl p-3  outline-none text-black"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <p className="text-red-600 text-sm pl-3 py-1">{errors.name}</p>
        )}
      </div>
      <div className="flex flex-col h-[68px]">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email"
          className="w-96 rounded-xl p-3 outline-none text-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-600 text-sm pl-3 py-1">{errors.email}</p>
        )}
      </div>
      <div className="flex flex-col h-[68px]">
        <div className="flex relative w-96 rounded-xl text-black">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Digite sua senha"
            className="flex w-full rounded-xl p-3 outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-600 text-sm pl-3 py-1">{errors.password}</p>
        )}
        {errors.message && (
          <p className="text-red-600 text-sm pl-3 py-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-96 rounded-xl bg-black text-white p-3 hover:bg-neutral-950"
      >
        Cadastre-se
      </button>
      <div className="text-black">
        Já tem uma conta?{" "}
        <Link to="/auth/login" className="text-primary cursor-pointer">
          Logar-se
        </Link>
      </div>
    </form>
  );
}
