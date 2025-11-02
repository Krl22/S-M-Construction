import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/S&M.png";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm ${
      isActive ? "bg-secondary" : "hover:bg-accent"
    }`;
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="S&M Construction logo" className="h-8 w-auto" />
          <span className="text-lg font-semibold text-primary relative top-[8px]">
            Construction
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
