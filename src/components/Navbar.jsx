import { useEffect, useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-500">Sharathkumar R K</h1>

      <div className="flex items-center gap-6">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button
          onClick={toggleTheme}
          className="border px-3 py-1 rounded"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;