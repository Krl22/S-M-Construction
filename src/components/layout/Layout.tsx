import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Layout() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
