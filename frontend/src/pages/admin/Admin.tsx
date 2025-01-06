import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

import { SheetHeaderDashboard } from "./components/sheetHeader";

export function AdminPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Header />

      <div className="flex-1 flex flex-col">
        <SheetHeaderDashboard />

        <div className="flex-1 overflow-auto p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
