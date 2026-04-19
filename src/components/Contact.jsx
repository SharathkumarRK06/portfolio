const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Let’s Work Together
      </h2>

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        I’m open to frontend roles and freelance opportunities.
      </p>
<div className="mt-6 flex justify-center gap-6">
  <a
    href="https://github.com/SharathkumarRK06"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-sm hover:shadow-md"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/sharath-kumar-r-k-b072a3260"
    target="_blank"
    rel="noopener noreferrer"
className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-sm hover:shadow-md"
    >
    LinkedIn
  </a>
</div>
      <a
  href="mailto:sharathkumarrk494@gmail.com" 
  className="inline-block mt-6 bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition shadow"
>
Contact Me
</a>
    </section>
  );
};

export default Contact;