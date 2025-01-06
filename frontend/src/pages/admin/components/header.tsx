import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="hidden md:flex flex-col">
        <div className="flex gap-4 p-4 px-7 items-center">
          <Link to="/">
            <h1 className="text-lg font-semibold">
              <span className="text-primary">Wit </span>Store
            </h1>
          </Link>
        </div>
        <div className="flex flex-col gap-4 p-4 md:w-44  lg:w-52">
          <Link to="/admin/dashboard">
            <Button variant="default" className="w-full justify-start gap-2">
              <Package size={16} />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/products">
            <Button variant="default" className="w-full justify-start gap-2">
              <Package size={16} />
              Produtos
            </Button>
          </Link>
          <Link to="/">
            <Button variant="default" className="w-full justify-start gap-2">
              <Package size={16} />
              Outros....
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
