import { useEffect, useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🌙 Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 💾 Save theme
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // 📌 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔥 Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Sharathkumar<span className="text-blue-500"> R K</span>
        </h1>

        {/* 🔗 Links */}
        <div className="flex items-center gap-6 text-sm font-medium">

          <a
            href="#about"
            className="hover:text-blue-500 transition duration-200"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-blue-500 transition duration-200"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-blue-500 transition duration-200"
          >
            Contact
          </a>

          {/* 🌙 Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {dark ? "🌙" : "☀️"}
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;