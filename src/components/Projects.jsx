import { motion } from "framer-motion";

const projects = [
  {
    title: "CRM Dashboard",
    desc: "Role-based CRM system with authentication, lead management, and analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://your-crm-live-link.com",
    code: "https://github.com/your-username/crm-project",
  },
  {
    title: "Secure File Sharing",
    desc: "Secure file upload and sharing platform with authentication and protected downloads.",
    tech: ["MERN", "Cloudinary", "JWT"],
    live: "https://your-file-sharing-link.com",
    code: "https://github.com/your-username/file-sharing",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {p.desc}
            </p>

            {/* 🏷️ Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-gray-800 px-2 py-1 text-xs rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* 🔗 Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition shadow hover:shadow-blue-500/40"
              >
                🚀 Live
              </a>

              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-400 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                💻 Code
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;