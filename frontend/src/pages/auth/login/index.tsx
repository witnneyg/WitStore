import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";

interface FormData {
  email: string;
  password: string;
}

export function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const handleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  async function onSubmit(data: FormData) {
    try {
      const response = await api.post("/auth/login", data);

      if (response.status === 201) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        navigate("/");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        if (error.response && error.response.status === 400) {
          setErrorMessage("Email ou senha incorretos.");
        } else {
          setErrorMessage("Ocorreu um erro ao tentar logar o usuário.");
        }
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center justify-center h-full w-full"
    >
      <h1 className="text-4xl font-bold text-primary">Login</h1>

      <div className="flex flex-col h-[68px]">
        <input
          type="email"
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
        <div className="flex flex-col relative w-96 rounded-xl text-black">
          <input
            type={showPassword ? "text" : "password"}
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
        Login
      </button>

      <div className="text-black">
        Não tem uma conta?{" "}
        <Link to="/auth/register" className="text-primary cursor-pointer">
          Registre-se
        </Link>
      </div>
    </form>
  );
}
