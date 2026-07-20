import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  PlayCircle,
} from "lucide-react";

import churchLogo from "../../assets/logo/thea.png";

interface NavLinkType {
  name: string;
  path: string;
}

const links: NavLinkType[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Sermons", path: "/sermons" },
  { name: "Departments", path: "/departments" },
  { name: "Projects", path: "/projects" },
  { name: "Media", path: "/social-media" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <header
        className={`fixed left-0 z-50 w-full transition-all duration-500
        ${
          scrolled
  ? "top-0 border-b border-white/20 bg-white/55 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-3xl"
  : "border-b border-transparent bg-white/90 backdrop-blur-xl"
        }`}
      >
        <div className="flex h-24 w-full items-center justify-between px-8 xl:px-16 2xl:px-24">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute left-1/4 top-0 h-32 w-32 rounded-full bg-[#0A3D91]/10 blur-3xl animate-pulse" />
  <div className="absolute right-1/4 top-0 h-32 w-32 rounded-full bg-[#C1121F]/10 blur-3xl animate-pulse delay-700" />
</div>

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-4"
          >
            <img
              src={churchLogo}
              alt="Church Logo"
              className="h-16 w-auto object-contain transition-all duration-500 hover:scale-110 hover:-rotate-2 hover:drop-shadow-[0_10px_30px_rgba(193,18,31,0.45)]"
            />

            
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden -ml-[10px] items-center gap-8 lg:flex">

            {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
  `group relative overflow-hidden rounded-xl px-5 py-3 text-[18px] font-semibold transition-all duration-500 ${
    isActive
      ? "bg-white/50 text-[#0A3D91] shadow-lg backdrop-blur-xl"
      : "text-slate-700 hover:bg-white/40 hover:text-[#C1121F] hover:shadow-xl hover:backdrop-blur-xl"
  }`
}
                >
                  {link.name}

                  <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-[#C1121F] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">

            <button className="flex items-center gap-2 rounded-xl bg-[#0A3D91] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#C1121F] hover:shadow-red-300">

              <PlayCircle size={20} />

              Watch Live

            </button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-xl p-2 text-[#0A3D91] transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={30} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-white shadow-2xl transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] lg:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b px-6 py-5">

            <div className="flex items-center gap-3">

              <img
                src={churchLogo}
                alt="Logo"
                className="h-12 w-auto"
              />

              <div>

                <h2 className="font-bold text-[#0A3D91]">
                  Rhema Chapel International Churches
                </h2>

                <p className="text-xs text-[#C1121F]">
                  Home of the Blessed People
                </p>

              </div>

            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              <X size={28} />
            </button>
          </div>
                    <div className="flex flex-col gap-2 px-6 py-8">

            {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-5 py-4 text-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#0A3D91] text-white"
                        : "text-slate-700 hover:bg-[#0A3D91] hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            <button className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-[#0A3D91] px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#C1121F]">

              <PlayCircle size={22} />

              Watch Live

            </button>

            <button className="rounded-xl border-2 border-[#0A3D91] px-6 py-4 text-lg font-semibold text-[#0A3D91] transition-all duration-300 hover:bg-[#0A3D91] hover:text-white">

              Join Us This Sunday

            </button>

          </div>

        </div>

      </header>
    </>
  );
};

export default Navbar;