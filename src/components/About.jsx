import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* 🧠 LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About Me
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            I’m a passionate Frontend Developer specializing in React.js and modern
            web technologies. I enjoy building responsive, user-friendly applications
            and turning ideas into real-world digital experiences.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            I have experience working on projects like CRM systems and secure
            file-sharing platforms, focusing on performance, clean UI, and scalable
            code.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            I’m currently looking for opportunities to grow as a developer and
            contribute to impactful products.
          </p>
        </div>

        {/* 🏷️ RIGHT SKILLS */}
        <div className="flex flex-wrap gap-3 justify-start">
          {[
            "HTML", "CSS", "JavaScript", "React",
            "Tailwind CSS", "Node.js", "MongoDB",
            "Figma", "UI/UX"
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm rounded-full bg-blue-100 dark:bg-gray-800 shadow-sm hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default About;