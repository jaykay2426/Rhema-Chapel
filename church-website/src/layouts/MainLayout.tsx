import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className={`flex-1 ${isHome ? "" : "pt-28"}`}>

        <Outlet />

      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;  