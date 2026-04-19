import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 max-w-6xl mx-auto relative overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="w-80 h-80 bg-blue-400/20 blur-3xl rounded-full absolute top-20 left-10"></div>
        <div className="w-80 h-80 bg-purple-400/20 blur-3xl rounded-full absolute bottom-20 right-10"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* 👤 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <motion.img
            src="/profile.jpg"
            alt="profile"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-40 h-35 rounded-full mb-6 mx-auto md:mx-0 shadow-xl border-4 border-blue-500"
          />

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Sharathkumar R K
          </h1>

          <p className="mt-3 text-blue-500 text-lg">
            Frontend Developer | React.js Specialist 😎
          </p>
        </motion.div>

        {/* ✨ RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
            I build modern, responsive web applications with clean UI,
            smooth animations, and great user experience using React and Tailwind CSS.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-blue-500 px-6 py-3 rounded-xl text-white hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/40"
            >
              🚀 View Projects
            </a>

            <a
              href="/Sharath(IT).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-6 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              📄 Resume
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;