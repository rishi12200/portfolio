// src/components/Header.js
function Header() {
  return (
    <header className="fixed w-full top-0 bg-white bg-opacity-70 shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Rishikesh M</h1>
        <div className="space-x-4">
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500">
            Projects
          </a>
          <a href="#skills" className="text-gray-700 hover:text-blue-500">
            Skills
          </a>
          <a href="#experience" className="text-gray-700 hover:text-blue-500">
            Experience
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
