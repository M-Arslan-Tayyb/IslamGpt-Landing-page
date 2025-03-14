import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/general/finalLogo.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    // { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },

  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["hero", "features", "faq"];

      // Check hero section first
      const heroSection = document.getElementById("hero");
      if (heroSection && scrollPosition < heroSection.offsetHeight - 100) {
        setActiveSection("hero");
        return;
      }

      // Check other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
            return;
          }
        }
      }

      // If we're past all sections or between them
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false);
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Islam GPT logo" className="w-20 h-20" />
          <span className=" text-2xl font-semibold relative right-4 top-1">
            IslamGPT
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 flex justify-center items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`transition-colors duration-200 px-3 py-2 ${activeSection === item.href.slice(1)
                ? "text-[var(--secondary-color)]"
                : "text-gray-600 hover:text-[var(--secondary-color)]"
                }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.slice(1));
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="https://islam-gpt-lilac.vercel.app/"
            className="hidden md:inline-block px-6 py-2 rounded-full   text-black border border-[var(--secondary-color)]  "
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 rounded-full bg-[var(--bg-light)] flex items-center justify-center border border-gray-200 focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1">
            <span className="block w-5 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden bg-white w-64 space-y-6 px-2 py-7 transition duration-200 ease-in-out z-30`}
      >
        <div className="flex items-center mb-8 px-4">
          <img src={logo} alt="Islam GPT logo" className="w-10 h-10 mr-2" />
          <span className="text-[var(--primary-color)] text-xl font-semibold">
            Islam GPT
          </span>
        </div>
        <nav>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-4 py-2 transition-colors duration-200 ${activeSection === item.href.slice(1)
                ? "text-[var(--secondary-color)]"
                : "text-gray-600 hover:text-[var(--secondary-color)]"
                }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.slice(1));
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="https://islam-gpt-lilac.vercel.app/"
            className="block px-2 py-2 mt-4 text-center rounded-full  text-black border border-[var(--secondary-color)]  "
            onClick={() => setIsSidebarOpen(false)}
          >
            Sign In
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
