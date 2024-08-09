import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PackageSearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import { PercentIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Cart } from "./cart";

export function Header() {
  return (
    <Card className="flex justify-between items-center p-[1.875rem]  ">
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            <div className="flex flex-col gap-3 mt-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <LogInIcon size={16} />
                Fazer Login
              </Button>

              <SheetClose asChild>
                <Link to="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link to="/orders">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PackageSearchIcon size={16} />
                    Meus Pedidos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link to="/deals">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <PercentIcon size={16} />
                    Ofertas
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link to={`/catalog`}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Link to="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Wit </span>Store
        </h1>
      </Link>

      <div className="sm:flex items-center gap-6 font-semibold hidden">
        <Link to="/">Início</Link>
        <Link to="/catalog" className="border-x-2 border-x-zinc-800 px-4">
          Catálogo
        </Link>
        <Link to="/">Ofertas</Link>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
}
