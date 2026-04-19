import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold"
      >
        <img src="/profile.jpg"
   className="w-40 h-35 rounded-full mb-4 mx-auto md:mx-0"
/>
        Frontend Developer <span className="text-blue-500"> | React.js Specialist😎</span>
      </motion.h1>

      <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
        Frontend Developer specializing in React.js, building modern web apps.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
         className="border px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          View Projects
        </a>

       <a
  href="/Sharath(IT).pdf"
  target="_blank"
  className="border px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  Resume
</a>
      </div>
    </section>
  );
};

export default Hero;