import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { api } from "@/services/api";
import { error } from "console";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
  name: string;
}

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  async function onSubmit(formData: FormData) {
    try {
      const response = await api.post("/auth/register", formData);
      if (response.status === 201) {
        const token = response.data.token;

        localStorage.setItem("token", token);

        navigate("/");
      }

      setErrorMessage("");
    } catch (error: any) {
      if (error.response && error.response.status == 409) {
        setErrorMessage("Este email já está em uso. Por favor, tente outro.");
      } else {
        setErrorMessage("Ocorreu um erro ao tentar registrar o usuário.");
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 items-center justify-center h-full w-full "
    >
      <h1 className="text-4xl font-bold text-primary">Cadastre-se</h1>
      <div className="flex flex-col h-[68px]">
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome"
          className="w-96 rounded-xl p-3  outline-none text-black"
          {...register("name", { required: "Nome é obrigatório" })}
        />
        {errors.name && (
          <p className="text-red-600 text-sm pl-3 py-1">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="flex flex-col h-[68px]">
        <input
          type="text"
          id="email"
          placeholder="Digite seu email"
          className="w-96 rounded-xl p-3 outline-none text-black"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-600 text-sm pl-3 py-1">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col h-[68px]">
        <div className="flex relative w-96 rounded-xl text-black">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Digite sua senha"
            className="flex w-full rounded-xl p-3 outline-none"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 4,
                message: "Senha deve ter ao menos 4 caracteres",
              },
            })}
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-600 text-sm pl-3 py-1">
            {errors.password.message}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-sm pl-3 py-1">{errorMessage}</p>
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
