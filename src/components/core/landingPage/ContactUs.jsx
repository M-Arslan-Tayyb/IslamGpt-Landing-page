import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import underline from '../../../assets/images/general/underline.png'
import youngMan from '../../../assets/images/general/youngMan.png'

gsap.registerPlugin(ScrollTrigger)

const ContactUs = () => {
    const sectionRef = useRef(null)
    const formRef = useRef(null)

    useGSAP(() => {
        const content = sectionRef.current.querySelector('.content')
        const image = sectionRef.current.querySelector('.image')

        gsap.set([content, image], { opacity: 0, y: 50 })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(content, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out"
                })
                gsap.to(image, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out"
                })
            }
        })
    }, { scope: sectionRef })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <section
            ref={sectionRef}
            className="relative py-16 md:py-24 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #6C2475 0%, #4A1751 100%)'
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="content w-full lg:w-1/2 text-white space-y-6">
                        <div className="relative inline-block">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                IslamGPT - Dive into{' '}
                                <span className="relative inline-block">
                                    Limitless Conversations!
                                    <img
                                        src={underline}
                                        alt=""
                                        className="absolute left-0 -bottom-2 w-full h-4 object-contain"
                                    />
                                </span>
                            </h2>
                        </div>
                        <p className="text-lg md:text-xl opacity-90">
                            The most effective and successful solution has been in making Islamic knowledge accessible online by establishing platforms that share that knowledge.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit} className="max-w-md">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="flex-1 px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-color)]"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-[var(--secondary-color)] text-white rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Image */}
                    <div className="image w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src={youngMan}
                            alt="Happy user"
                            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Diagonal light streaks */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full transform rotate-45 opacity-5">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute h-[200px] w-[2px] bg-white"
                            style={{
                                left: `${30 + i * 20}%`,
                                top: '-100px',
                                transform: 'rotate(-45deg)'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactUs