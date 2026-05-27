import { Outlet } from "react-router-dom";
import { Footer } from "../components/common/Footer";
import { FloatingActions } from "../components/common/FloatingActions";
import { Navbar } from "../components/common/Navbar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff8fd] via-[#fcfbff] to-[#f8f9ff]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};
