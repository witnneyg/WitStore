import { Outlet } from "react-router-dom";
import { Header } from "./components/ui/header";
import { Footer } from "./components/ui/footer";

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
