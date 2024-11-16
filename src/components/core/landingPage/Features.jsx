import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import underline from '../../../assets/images/general/underline.png'
import mosque from '../../../assets/images/features/featureMosque.png'
import AiChat from '../../../assets/images/features/featureChat.png'
import PrayerTime from '../../../assets/images/features/featurePrayerTime.png'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)

    const features = [
        {
            icon: PrayerTime,
            title: "Prayer Times",
            description: "View local prayer times, including Iqamah time for a local mosque"
        },
        {
            icon: AiChat,
            title: "AI Chat",
            description: "Learn about Islam by asking a question and receive a dependable answer based on authentic sources"
        },
        {
            icon: mosque,
            title: "Nearby Mosque",
            description: "Search mosques near you and get information on prayer and iqamah times, events, and community notices"
        }
    ]

    useGSAP(() => {
        const elements = cardsRef.current.children
        const title = sectionRef.current.querySelector('.title-container')

        gsap.set([elements, title], { opacity: 0, y: 50 })

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(title, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out"
                })
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    delay: 0.3
                })
            }
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="features" className="py-16 md:py-24 bg-[var(--bg-light)]">
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <div className="title-container text-center mb-16">
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Useful Features for a Muslim
                        </h2>
                        <img
                            src={underline}
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[220px] h-4 object-contain"
                        />
                    </div>
                    <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-lg">
                        The most effective and successful solution has been in making Islamic knowledge accessible online by establishing platforms that share, progress, and propel that knowledge.
                    </p>
                </div>

                {/* Features Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-6">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-[var(--primary-color)] text-white rounded-full text-lg font-medium hover:bg-[var(--secondary-color)] transition-opacity">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Features