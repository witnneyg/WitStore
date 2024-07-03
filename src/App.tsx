import { Outlet } from "react-router-dom";
import { Header } from "./components/ui/header";
import { Footer } from "./components/ui/footer";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex-1 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
