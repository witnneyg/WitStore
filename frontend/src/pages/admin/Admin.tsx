import { Button } from "@/components/ui/button";
import { Package, User } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export function AdminPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <header>
        <div className="flex gap-4 p-4 px-7 items-center">
          <Link to="/">
            <h1 className="text-lg font-semibold">
              <span className="text-primary">Wit </span>Store
            </h1>
          </Link>
        </div>
        <div className="flex flex-col gap-4 p-4 w-60">
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
      </header>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between p-4 mt-1">
          <h4 className="font-semibold text-lg">eCommerce Admin Painel</h4>
          <User />
        </div>

        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
