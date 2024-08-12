import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
    console.log(showPassword);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateEmail()) {
      setEmailError("Email inválido");
      return;
    } else {
      setEmailError("");
    }

    if (password.length <= 4) {
      setPasswordError("Senha inválida");
      return;
    } else {
      setPasswordError("");
    }

    alert("logado");
  }

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex flex-col gap-8 items-center justify-center h-full w-full bg-[#dfdfdf]"
    >
      <h1 className="text-4xl font-bold text-primary">Login</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email"
          className="w-96 rounded-xl p-3 outline-none text-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && (
          <p className="text-red-600 text-sm pl-3">{emailError}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
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
            O
          </span>
        </div>
        {passwordError && (
          <p className="text-red-600 text-sm pl-3">{passwordError}</p>
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
        <span className="text-primary cursor-pointer">Registre-se</span>
      </div>
    </form>
  );
}
