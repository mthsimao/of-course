import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

export default function MainLayout() {
  return (
    <div className="flex h-screen w-full">
      {/* Conteúdo principal */}
      <div className="flex flex-col flex-1">
        <Navbar />

        {/* Conteúdo das rotas */}
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}
