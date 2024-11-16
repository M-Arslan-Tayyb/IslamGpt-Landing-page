import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import underline from '../../../assets/images/general/underline.png'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {
    const sectionRef = useRef(null)
    const [openQuestion, setOpenQuestion] = React.useState(null)

    const faqs = [
        {
            question: "What is IslamGpt AI?",
            answer: "IslamGpt AI is an innovative platform designed to provide authentic Islamic knowledge through advanced AI technology. It serves as your trusted companion for personalized, AI-driven Islamic learning."
        },
        {
            question: "What is IslamGpt's most important feature?",
            answer: "IslamGpt's greatest feature is our comprehensive search engine. Using AI technology, IslamGpt's developers and content experts have created a database of highly reputable, authentic Islamic sources. You need simply to search an Islamic topic or ask a question, and a response is expertly generated, bringing you an array of Islamic works– original authentic sources (Quran, Hadith, Seerah), scholarly works (Tafsir and Fatwas), video demonstrations, and links to full sources!"
        },
        {
            question: "What should I do if I cannot find my answers in IslamGpt?",
            answer: "If you can't find the specific answer you're looking for, you can try rephrasing your question or using different keywords. You can also reach out to our support team for assistance."
        },
        {
            question: "What kind of sources does IslamGpt use?",
            answer: "IslamGpt uses authentic Islamic sources including the Quran, Hadith collections, scholarly works, and verified Islamic literature. All sources are carefully vetted and referenced."
        },
        {
            question: "Why focus on authenticity in sharing Islamic Knowledge?",
            answer: "Authenticity is crucial in Islamic knowledge to ensure that the information shared aligns with true Islamic teachings and principles. This helps maintain the integrity of Islamic knowledge and prevents misinformation."
        },
        {
            question: "How does IslamGpt utilize AI?",
            answer: "IslamGpt uses AI to organize, process, and retrieve information from our extensive database of Islamic sources. The AI helps in understanding questions and providing relevant, accurate answers while maintaining authenticity."
        }
    ]

    useGSAP(() => {
        const title = sectionRef.current.querySelector('.title-container')
        const questions = sectionRef.current.querySelectorAll('.faq-item')

        gsap.set([title, questions], { opacity: 0, y: 50 })

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
                gsap.to(questions, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.3
                })
            }
        })
    }, { scope: sectionRef })

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index)
    }

    return (
        <section ref={sectionRef} id="faq" className="py-16 md:py-24 bg-[var(--bg-light)]">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Title Section */}
                <div className="title-container text-center mb-16">
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <img
                            src={underline}
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[220px] h-4 object-contain"
                        />
                    </div>
                    <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-lg">
                        Explore common questions and detailed answers about IslamGpt — your trusted companion for personalized, AI-driven Islamic learning.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item border-b border-[var(--secondary-color)] border-opacity-20"
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full flex items-center justify-between py-4 text-left hover:text-[var(--primary-color)] transition-colors duration-200"
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openQuestion === index ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-600">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ