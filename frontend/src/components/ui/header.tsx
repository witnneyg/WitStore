import {
  HomeIcon,
  ListOrderedIcon,
  Lock,
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
import { useContext } from "react";
import { UserContext } from "@/context/user-context";

export function Header() {
  const { user, setUser } = useContext(UserContext);

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
  }

  return (
    <Card className="flex justify-between items-center p-[1.875rem]">
      <div className="md:hidden">
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
                <Link to="/catalog">
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
                <Link to="/admin">
                  {user?.role == "admin" && (
                    <Link to="/admin">
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-2"
                      >
                        <Lock size={16} />
                        Admin
                      </Button>
                    </Link>
                  )}
                </Link>
              </SheetClose>

              <SheetClose asChild>
                {user ? (
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

      <div className="hidden text-sm  md:text-base md:flex items-center gap-3 lg:gap-7 font-semibold  ml-2 md:ml-16">
        <Link to="/">Início</Link>
        <Link to="/catalog" className="border-x-2 border-x-zinc-800 px-4">
          Catálogo
        </Link>
        <Link to="/deals">Ofertas</Link>
        <Link to="/orders" className="border-l-2 border-l-zinc-800 pl-6">
          Pedidos
        </Link>
        {user?.role == "admin" && (
          <Link to="/admin" className="border-l-2 border-l-zinc-800 px-4">
            Admin
          </Link>
        )}
      </div>

      <div className="items-center gap-1 flex">
        <div className="hidden sm:flex">
          {user ? (
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
