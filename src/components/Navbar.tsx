import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(
    () => localStorage.theme === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* logo */}
        <a className="flex items-center gap-2 text-xl font-bold text-white">
          <span className="rounded-md bg-gradient-to-br from-cyan-400 to-sky-600 px-2 py-1 text-sm font-black">
            P2X
          </span>
          Power-to-X Summit
        </a>

        {/* links (اختصارًا) */}
        <ul className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#tickets">Tickets</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#venue">Venue</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="text-xl text-slate-300 hover:text-white"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* CTA */}
          <a href="#register" className="btn-gradient hidden md:inline-flex">
            Register Now
          </a>
        </div>
      </nav>
    </header>
  );
}
