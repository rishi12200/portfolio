// src/components/Contact.js

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Contact Me !</h3>
        <form className="space-y-4">
          <button
            type="submit"
            className="text-white font-semibold px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full mr-4"
          >
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTLGtnfzTQlZSVgWSVRbtPfgSHsXzfxFKCjClLCDspjvLKfbLgqBPbZmVqXJxrKGnZXbRg">
              Gmail
            </a>
          </button>
          <button
            type="submit"
            className="text-white font-semibold px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full mr-4"
          >
            <a href="https://www.linkedin.com/in/rishikesh-m-58710b217/">
              LinkedIn
            </a>
          </button>
          <button
            type="submit"
            className="text-white font-semibold px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full mr-4"
          >
            <a href="https://github.com/rishi12200/">GitHub</a>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
