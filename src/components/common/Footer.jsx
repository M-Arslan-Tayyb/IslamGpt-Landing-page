import React from "react";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import logo from "../../assets/images/general/finalLogo.png";

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#010C15] text-white py-12">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center justify-center">
                        <img src={logo} alt="Islam GPT logo" className="w-16 h-16" />
                        <span className="text-[var(--primary-color)] text-2xl font-semibold relative right-3 top-1">
                            IslamGPT
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex gap-8">
                        <a
                            href="#features"
                            className="hover:text-[var(--secondary-color)] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("features");
                            }}
                        >
                            Features
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-[var(--secondary-color)] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("faq");
                            }}
                        >
                            FAQ
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-[var(--secondary-color)] transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/arslan._butt/" className="hover:text-[var(--secondary-color)] transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>

                        <a href="https://www.facebook.com/butt.arslan.923" className="hover:text-[var(--secondary-color)] transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/m-arslan-tayyab-ab2099270/" className="hover:text-[var(--secondary-color)] transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">
                        © Copyright {currentYear}, All Rights Reserved
                    </p>
                    {/* <div className="flex gap-6">
                        <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Terms
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
