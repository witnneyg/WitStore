import { Outlet } from "react-router-dom";

export function LoginLayout() {
  return (
    <div className="w-full h-screen bg-[#dfdfdf]">
      <Outlet />
    </div>
  );
}