// src/components/GlassNavbar.tsx
import { useState, useEffect } from "react";
import { Sun, Moon } from 'lucide-react';
import { Button } from "../ui/button";


export default function GlassNavbar() {
  const [dark, setDark] = useState(
    () =>
      typeof window !== "undefined" &&
      (localStorage.theme === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [scrolled, setScrolled] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  // Watch scroll position
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/90 dark:bg-black/30    backdrop-blur-md border-b border-teal-300/50 dark:border-white/10 shadow-lg dark:shadow-sm dark:text-white text-gray-950 "
          : "bg-transparent border-none text-white"}
      `}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 ">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          {scrolled
          ? (localStorage.theme == "dark"?
          
          <img src="./logo-w.png" className="h-9" alt="" /> : <img src="./logo.svg" className="h-9" alt="" />)
          : <img src="./logo-w.png" className="h-9" alt="" /> }

      
           
          {/* <span className="bg-gradient-to-br from-green-400 to-blue-400 bg-clip-text text-transparent">
            P2X
          </span>{" "}
          Summit */}
        </a>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {["Home", "Agenda", "Speakers", "Tickets", "Sponsors", "Venue", "About"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
           
            className={`
         transition-colors duration-200
        ${scrolled
          ? "dark:text-white text-gray-950 "
          : "text-white"}
      `}
            
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white/90 hover:text-white transition-colors duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>

          {/* Register CTA */}
          <a
            href="#register"
            className="hidden md:inline-flex btn-gradient px-5 py-2.5 text-sm font-semibold rounded-xl"
          >
            Register Now
          </a>
          {/* <Button
              size="lg"
              className="
              
             bg-teal-300/40 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:bg-teal-300/50"
            >
              Register Now
            </Button> */}
        </div>
      </nav>
    </header>
  );
}
