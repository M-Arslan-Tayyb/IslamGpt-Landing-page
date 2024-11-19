/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import underline from '../../../assets/images/general/underline.png'
// import leftImage from '../../../assets/images/general/ourCoreValues.jpg'
import leftImage from '../../../assets/images/general/body img.png'


gsap.registerPlugin(ScrollTrigger)

const OurCoreValues = () => {
    const sectionRef = useRef(null)
    const valuesRef = useRef(null)

    const values = [
        {
            title: "Accessibility",
            description: "IslamGpt believes in the importance of accessibility to the authentic and accurate knowledge of Islam. This value is reflected in the meticulous work of the IslamGpt search engine, which includes a multitude of abilities that strive to bring users the most authentic and high standard response."
        },
        {
            title: "Lifestyle",
            description: "IslamGpt strives to create a platform that uplifts and progresses Muslims in their daily lives. This is portrayed in the individualistic functions of IslamGpt's features, each one meant to support Muslims in different aspects of their life."
        },
        {
            title: "Respect and Inclusion",
            description: "IslamGpt fosters communal respect by connecting Muslims of various levels of Islamic practice, cultural backgrounds, and social status to be a part of one community. IslamGpt aims to uplift Muslims to be active students of Islam and members in their community."
        },
        {
            title: "Community",
            description: "IslamGpt cultivates community involvement in order to support Muslims in their daily lifestyle. Every Muslim needs their local Islamic community for support in all matters of faith– to improve their faith, fulfill their Islamic duties (give zakat), raise children, lead the youth, etc."
        }
    ]

    useGSAP(() => {
        const elements = valuesRef.current.children

        gsap.set(elements, { opacity: 0, y: 50 })

        ScrollTrigger.create({
            trigger: valuesRef.current,
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
            },
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-[var(--bg-gray)]">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Our Core Values
                        </h2>
                        <img
                            src={underline}
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[220px] h-4 object-contain"
                        />
                    </div>
                    <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-lg">
                        Our values inspire us to create a platform that not only meets the needs of todays Muslims but also enriches their lives.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col slg:flex-row gap-8 lg:gap-12">
                    {/* Left Image */}
                    <div className="lg:w-[45%] md:w-[55%]  md:text-center mx-auto flex justify-center md:justify-start">
                        <img
                            src={leftImage}
                            alt="Muslims in mosque"
                            className="w-full h-[60%] slg:h-[100%]rounded-lg  max-w-[530px] bg-transparent"
                        />
                    </div>


                    {/* Right Content */}
                    <div ref={valuesRef} className="lg:w-[55%] md:w-[45%] mx-auto slg:text-start space-y-8">
                        {values.map((value, index) => (
                            <div key={value.title} className="value-item">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <span className="text-[var(--secondary-color)]">◆</span>
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed pl-6">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCoreValues