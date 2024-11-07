// src/components/Hero.js
function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-600 text-white"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Hello, I'm Rishi
      </h2>
      <p className="text-lg  md:text-2xl mb-8">
        A passionate Front-End Developer specializing in React.
      </p>
      <div>
        <a
          href="#projects"
          className="font-semibold px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full mr-4"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="font-semibold px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
