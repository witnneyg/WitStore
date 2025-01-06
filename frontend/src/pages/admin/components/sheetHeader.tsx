import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Package, User } from "lucide-react";
import { Link } from "react-router-dom";

export function SheetHeaderDashboard() {
  return (
    <div className="flex justify-between p-4 mt-1 items-center gap-6">
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              eCommerce Menu
            </SheetHeader>

            <div className="flex flex-col gap-3 mt-4 w-64">
              <SheetClose asChild>
                <Link to="/admin/dashboard">
                  <Button
                    variant="default"
                    className="w-full justify-start gap-2"
                  >
                    <Package size={16} />
                    Dashboard
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link to="/admin/products">
                  <Button
                    variant="default"
                    className="w-full justify-start gap-2"
                  >
                    <Package size={16} />
                    Produtos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link to="/">
                  <Button
                    variant="default"
                    className="w-full justify-start gap-2"
                  >
                    <Package size={16} />
                    Outros....
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex justify-between w-full">
        <h4 className="font-semibold text-lg">eCommerce Admin Painel</h4>
        <User />
      </div>
    </div>
  );
}
