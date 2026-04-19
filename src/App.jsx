import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();

  // ⏳ Loader delay
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white transition"
    >

      {/* 📊 Scroll Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      />

      {/* ✨ Cursor Glow */}
      <div
        className="pointer-events-none fixed w-40 h-40 bg-blue-500 opacity-20 blur-3xl rounded-full z-0"
        style={{
          left: pos.x - 80,
          top: pos.y - 80,
        }}
      />

      {/* 🔥 Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}

export default App;