import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import underline from '../../../assets/images/general/underline.png'
import sliderImage1 from '../../../assets/images/hero/sliderImage1.png'
import sliderImage2 from '../../../assets/images/hero/sliderImage2.png'
import sliderImage3 from '../../../assets/images/hero/sliderImage3.png'

const Hero = () => {
    const sliderRef = useRef(null)
    const imagesRef = useRef([])

    useEffect(() => {
        const images = imagesRef.current;
        const ctx = gsap.context(() => {
            const slideAnimation = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

            images.forEach((img, index) => {
                gsap.set(img, { opacity: index === 0 ? 1 : 0 });

                slideAnimation
                    .to(img, {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut"
                    }, index * 3) // Delay each animation
                    .to(img, {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.inOut"
                    }, (index + 1) * 3 - 1);
            });
        }, sliderRef);

        return () => ctx.revert();
    }, []);


    return (
        <section id='hero' className="bg-white py-12 pt-16 sm:py-12 mt-20 relative z-0 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6 mb-8 lg:mb-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left text-[var(--secondary-color)]">
                            Your Companion <br /> in Deen
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                            Chat to get authentic rulings with Quranic Ayats, <br></br>Saheeh Hadiths.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <a
                                href="https://islam-gpt-lilac.vercel.app/signup"
                                className="px-6 sm:px-8 py-3 bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] text-white rounded-full text-base sm:text-lg font-medium transition-all duration-300"
                            >
                                Get Started
                            </a>
                        </div>

                    </div>

                    {/* Image Slider */}
                    <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <div ref={sliderRef} className="relative w-full max-w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
                            {[sliderImage1, sliderImage2, sliderImage3].map((src, index) => (
                                <img
                                    key={index}
                                    ref={el => imagesRef.current[index] = el}
                                    src={src}
                                    alt={`IslamGpt Interface ${index + 1}`}
                                    className="absolute top-0 left-0 w-full h-full object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero