import { UserContext } from "@/context/user-context";
import { ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function isAdmin() {
    return user?.role === "admin";
  }

  if (!isAdmin()) {
    navigate("access-denied");
  }

  return <>{children}</>;
}
