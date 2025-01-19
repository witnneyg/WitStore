import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { SheetHeaderDashboard } from "./components/sheetHeader";

export function AdminPage() {
  return (
    <div
      className="flex overflow-hidden h-screen "
      style={{ height: "calc(100vh - 24px)" }}
    >
      <Header />

      <div className="flex-1 flex flex-col">
        <SheetHeaderDashboard />

        <div className="flex-1 overflow-auto p-4 custom-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
