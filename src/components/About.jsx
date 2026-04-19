const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-4xl mx-auto text-center"
    >
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
      <div className="mt-8 flex flex-wrap justify-center gap-3">
  {["HTML", "CSS", "React", "JavaScript","UI/UX Design","Figma", "Tailwind CSS", "Node.js", "MongoDB"].map((skill, i) => (
    <span
      key={i}
      className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-gray-800"
    >
      {skill}
    </span>
  ))}
</div>
    </section>
  );
};

export default About;