import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import underline from '../../../assets/images/general/underline.png'
import rightImage from '../../../assets/images/general/AccessImage.png'

gsap.registerPlugin(ScrollTrigger)

const RevolutionizingAccess = () => {
    const sectionRef = useRef(null)
    const contentRef = useRef(null)

    useGSAP(() => {
        const content = contentRef.current
        const elements = content.children
        const image = sectionRef.current.querySelector('.right-image')

        gsap.set([elements, image], { opacity: 0, y: 50 })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                })
                gsap.to(image, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.4,
                    ease: "power3.out"
                })
            }
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-[var(--bg-light)]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div ref={contentRef} className="lg:w-1/2 space-y-6">
                        <div className="relative inline-block">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Revolutionizing{' '}
                                <span className="relative inline-block">
                                    Access
                                    <img
                                        src={underline}
                                        alt=""
                                        className="absolute left-0 -bottom-2 w-full h-4 object-contain"
                                    />
                                </span>{' '}
                                to Authentic Islamic Knowledge
                            </h2>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our values are the foundation of everything we do at IslamGpt AI. We
                            are guided by a deep respect for Islamic principles, a commitment to
                            community service, and a dedication to innovation. Integrity, inclusivity,
                            and excellence drive our efforts to provide accurate, reliable, and
                            beneficial resources to the Muslim community. We believe in the
                            importance of knowledge, the power of connection, and the
                            responsibility to uplift and support one another.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src={rightImage}
                            alt="IslamGpt AI Interface"
                            className="right-image w-full max-w-[600px] h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RevolutionizingAccess