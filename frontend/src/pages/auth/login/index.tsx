import { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { CustomJwtPayload, UserContext } from "@/context/user-context";
import { jwtDecode } from "jwt-decode";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  email: string;
  password: string;
}

export function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useContext(UserContext);

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
      console.log(response);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        const decoded = jwtDecode<CustomJwtPayload>(token);
        setUser(decoded);

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
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Bem vindo de volta!
        </h1>
        <p className="text-base text-muted-foreground">
          Insira suas credenciais para entrar em sua conta
        </p>
      </div>

      <div className="flex flex-col h-[68px] gap-2">
        <Label htmlFor="email" className="text-base">
          Email
        </Label>

        <Input
          type="email"
          placeholder="Digite seu email"
          className="w-96 rounded-xl bg-white border-gray-300"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-600 text-sm pl-1">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col h-[68px] mt-3">
        <div className="flex flex-col relative w-96 rounded-xl text-black gap-2">
          <Label htmlFor="password" className="text-base">
            Password
          </Label>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            className="w-96 rounded-xl bg-white border-gray-300"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 4,
                message: "Senha deve ter ao menos 4 caracteres",
              },
            })}
          />
          <span
            className="absolute right-3 top-[2.6rem] cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-600 text-sm pl-1 mt-1">
            {errors.password.message}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-sm pl-1 mt-1">{errorMessage}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="secondary"
        className="w-96 rounded-xl  text-white p-3 mt-8"
      >
        Login
      </Button>

      <div className="px-8 text-center text-sm text-muted-foreground">
        Não tem uma conta?{" "}
        <Link
          to="/auth/register"
          className="text-gray-800 underline underline-offset-4 hover:text-gray-900"
        >
          Registre-se
        </Link>
      </div>
    </form>
  );
}
