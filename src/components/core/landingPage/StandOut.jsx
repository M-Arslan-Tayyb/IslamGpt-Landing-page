import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import underline from '../../../assets/images/general/underline.png'
import accuracy from '../../../assets/images/StandOut/accuracy.png'
import practicleRelevance from '../../../assets/images/StandOut/practicleRelevance.png'
import contextual from '../../../assets/images/StandOut/contextual.png'
import aiAssistedIcon from '../../../assets/images/StandOut/aiAssistedIcon.png'
import trustedIcon from '../../../assets/images/StandOut/trustedIcon.png'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        icon: accuracy,
        title: "Unmatched Accuracy",
        description: "Multi-level answers based on 100,000+ fatwas, hadiths, and trusted Islamic texts, all reviewed by experts to ensure authenticity."
    },
    {
        icon: practicleRelevance,
        title: "Practical Relevance",
        description: "Tailored responses rooted in Islamic principles and continuously updated to address modern-day challenges."
    },
    {
        icon: contextual,
        title: "Contextual Understanding",
        description: "Each query is analyzed in light of similar questions and user-specific details, ensuring personalized, relevant answers."
    },
    {
        icon: aiAssistedIcon,
        title: "AI-Assisted, Expert-Driven",
        description: "IslamGpt uses AI to organize and retrieve expert-backed answers, ensuring every response aligns with authentic Islamic teachings."
    },
    {
        icon: trustedIcon,
        title: "Trusted References",
        description: "Every answer comes with clear references to our sources, allowing users to verify the authenticity and context of the information provided."
    }
]

const StandOut = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef(null)

    useGSAP(() => {
        const title = sectionRef.current.querySelector('.title-container')
        const cards = cardsRef.current.children

        gsap.set([title, cards], { opacity: 0, y: 50 })

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
                gsap.to(cards, {
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
        <section ref={sectionRef} className="py-16 md:py-24 bg-[var(--bg-gray)]">
            <div className="container mx-auto px-4">
                {/* Title Section */}
                <div className="title-container text-center mb-16">
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Why IslamGpt Stands Out
                        </h2>
                        <img
                            src={underline}
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[220px] h-4 object-contain"
                        />
                    </div>
                </div>

                {/* Features Grid */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${index >= 3 ? 'lg:col-span-3/2' : ''
                                }`}
                        >
                            <div className="flex justify-center mb-6">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StandOut