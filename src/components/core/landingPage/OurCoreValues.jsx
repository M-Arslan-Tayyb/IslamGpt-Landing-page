/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import underline from '../../../assets/images/general/underline.png'
// import leftImage from '../../../assets/images/general/ourCoreValues.jpg'
import leftImage from '../../../assets/images/general/body img.png'






gsap.registerPlugin(ScrollTrigger);

const OurCoreValues = () => {
    const sectionRef = useRef(null);
    const valuesRef = useRef(null);

    const values = [
        { title: "Accessibility", description: "IslamGpt delivers authentic Islamic knowledge through a precise, reliable search engine designed for everyone." },
        { title: "Lifestyle", description: "Empowering Muslims and new converts with tailored features to support and enhance their daily lives." },
        { title: "Respect & Inclusion", description: "Building a diverse community that fosters mutual respect and active engagement in Islamic learning." },
        { title: "Community", description: "IslamGpt delivers authentic Islamic knowledge through a precise, reliable search engine designed for everyone." }
    ];

    useGSAP(() => {
        const elements = valuesRef.current.children;
        gsap.set(elements, { opacity: 0, y: 50 });

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
                    ease: "power3.out",
                });
            },
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-[#F4ECFA] rounded-3xl mx-auto max-w-7xl">
            <div className="container mx-auto px-4">

                {/* Title Section */}
                <div className="text-center mb-12">
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">Our Core Values</h2>
                        {/* <img src={underline} alt="" className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[220px] h-4 object-contain" /> */}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src={leftImage} alt="Core Values" className="w-full max-w-[500px] h-auto object-contain" />
                    </div>

                    {/* Right Text Content */}
                    <div ref={valuesRef} className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
                        {values.map((value, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <span className="text-[#6C2475] text-lg">◆</span>
                                <div>
                                    <h3 className="text-lg font-bold">{value.title}</h3>
                                    <p className="text-gray-700 text-sm">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OurCoreValues;
