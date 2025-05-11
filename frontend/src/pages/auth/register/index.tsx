import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { api } from "@/services/api";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        if (error.response.status === 409) {
          setErrorMessage("Este email já está em uso. Por favor, tente outro.");
        } else {
          setErrorMessage("Ocorreu um erro ao tentar registrar o usuário.");
        }
      } else {
        setErrorMessage("Ocorreu um erro desconhecido.");
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 items-center justify-center h-full w-full "
    >
      <h1 className="text-4xl font-bold">Crie uma conta</h1>
      <p className="text-muted-foreground">
        Insira suas informações para criar uma conta
      </p>
      <div className="flex flex-col gap-5 mb-10">
        <div className="flex flex-col h-[68px] gap-3">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-base">
              Name
            </Label>

            <Input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              className="w-96 rounded-xl p-3 bg-white border-gray-300"
              {...register("name", { required: "Nome é obrigatório" })}
            />
          </div>
          {errors.name && (
            <p className="text-red-600 text-sm pl-3 py-1">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="flex flex-col h-[68px] gap-1">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-base">
              Email
            </Label>

            <Input
              type="text"
              id="email"
              placeholder="Digite seu email"
              className="w-96 rounded-xl p-3 bg-white border-gray-300"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-600 text-sm pl-1">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col h-[68px]">
          <div className="flex flex-col relative w-96 rounded-xl text-black  gap-3">
            <Label htmlFor="password" className="text-base">
              Password
            </Label>

            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Digite sua senha"
              className="w-96 rounded-xl p-3 bg-white border-gray-300"
              {...register("password", {
                required: "Senha é obrigatória",
                minLength: {
                  value: 4,
                  message: "Senha deve ter ao menos 4 caracteres",
                },
              })}
            />
            <span
              className="absolute right-3 top-[2.8rem] cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm pl-1 py-1">
              {errors.password.message}
            </p>
          )}
          {errorMessage && (
            <p className="text-red-600 text-sm pl-1 py-1">{errorMessage}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        variant="secondary"
        className="w-96 rounded-xl text-white p-3"
      >
        Cadastre-se
      </Button>
      <div className="text-black">
        Já tem uma conta?{" "}
        <Link
          to="/auth/login"
          className=" text-gray-800 underline underline-offset-4 hover:text-gray-900"
        >
          Logar-se
        </Link>
      </div>
    </form>
  );
}
