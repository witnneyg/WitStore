import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOut,
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
import { useEffect, useState } from "react";

export function Header() {
  const [userIsLoggin, setUserIsLoggin] = useState(Boolean);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setUserIsLoggin(!!token);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setUserIsLoggin(false);
  }

  return (
    <Card className="flex justify-between items-center p-[1.875rem]">
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

              <SheetClose asChild>
                {userIsLoggin ? (
                  <Link to="/">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={handleLogout}
                    >
                      <LogOut size={16} />
                      Fazer Logout
                    </Button>
                  </Link>
                ) : (
                  <Link to="/auth/login">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <LogInIcon size={16} />
                      Fazer Login
                    </Button>
                  </Link>
                )}
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

      <div className="text-sm  md:text-base sm:flex items-center gap-6 font-semibold hidden ml-2 md:ml-16">
        <Link to="/">Início</Link>
        <Link to="/catalog" className="border-x-2 border-x-zinc-800 px-4">
          Catálogo
        </Link>
        <Link to="/deals">Ofertas</Link>
        <Link to="/orders" className="border-l-2 border-l-zinc-800 px-4">
          Pedidos
        </Link>
      </div>

      <div className="items-center gap-1 flex">
        <div className="hidden sm:flex">
          {userIsLoggin ? (
            <Link to="/">
              <Button
                size="icon"
                variant="outline"
                className="w-[5rem] items-center gap-1"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Logout
              </Button>
            </Link>
          ) : (
            <Link to="/auth/login">
              <Button
                size="icon"
                variant="outline"
                className="w-[5rem] items-center gap-1"
              >
                <LogInIcon size={16} />
                login
              </Button>
            </Link>
          )}
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
      </div>
    </Card>
  );
}
