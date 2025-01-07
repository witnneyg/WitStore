import { Link } from "react-router-dom";

export const NoPermissionPage = () => {
  return (
    <div className="flex items-center flex-col gap-3 justify-center h-screen bg-gray-100 text-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Acesso Negado</h1>
        <p className="mt-4 text-xl ">
          Você não tem permissão para acessar esta página.
        </p>
      </div>
      <Link className="text-lg font-bold" to="/">
        Voltar para a página
      </Link>
    </div>
  );
};
