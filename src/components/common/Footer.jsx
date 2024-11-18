import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'
import logo from '../../assets/images/general/finalLogo.png'

const Footer = () => {
    const currentYear = new Date().getFullYear()

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
                        <Link to="/" className="hover:text-[var(--secondary-color)] transition-colors">
                            Home
                        </Link>
                        <Link to="/features" className="hover:text-[var(--secondary-color)] transition-colors">
                            Features
                        </Link>
                        <Link to="/faq" className="hover:text-[var(--secondary-color)] transition-colors">
                            FAQ
                        </Link>
                    </nav>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[var(--secondary-color)] transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-[var(--secondary-color)] transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-[var(--secondary-color)] transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-[var(--secondary-color)] transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">
                        © Copyright {currentYear}, All Rights Reserved
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer