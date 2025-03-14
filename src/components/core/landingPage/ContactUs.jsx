import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import peopleImg from '../../../assets/images/general/Contact img.png';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
    const sectionRef = useRef(null);
    const [message, setMessage] = useState(""); // State for success message
    const [email, setEmail] = useState(""); // State to track input

    useGSAP(() => {
        gsap.set(sectionRef.current, { opacity: 0, y: 50 });

        gsap.to(sectionRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    }, { scope: sectionRef });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setMessage("Thanks for subscribing! 🎉"); // Set success message
        setEmail(""); // Clear input after submission

        // Remove message after 3 seconds
        setTimeout(() => setMessage(""), 3000);
    };

    return (
        <section ref={sectionRef} className="py-12 md:py-16 flex justify-center" id='contact'>
            <div className="w-[90%] md:w-[80%] lg:w-[70%] bg-[#FFF7DF] rounded-3xl shadow-md p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">Salam!</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Let's stay connected! Subscribe to our newsletter for insights and updates, or share your thoughts, suggestions, and corrections—we're just an email away!
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-purple-700 text-white rounded-full font-medium hover:bg-purple-800 transition duration-200 whitespace-nowrap"
                        >
                            SUBSCRIBE
                        </button>
                    </form>

                    {/* Success Message */}
                    {message && (
                        <p className="text-green-600 font-medium mt-2">{message}</p>
                    )}
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-2/3 flex justify-center lg:items-end relative pb-0">
                    <img
                        src={peopleImg}
                        alt="Contact Illustration"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                        style={{ position: 'relative', bottom: '-20px' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
