// eslint-disable-next-line no-unused-vars
import React from 'react'
import rightImg from '../../../assets/images/general/heroImg.png'
import underline from '../../../assets/images/general/underline.png'


const Hero = () => {
    return (
        <section id='hero' className="bg-[var(--bg-gray)]  py-6 sm:py-8  mt-20 relative z-0 overflow-hidden">
            <div className="container mx-auto px-2 xxsm:px-4 slg:px-0">
                <div className="flex flex-col-reverse slg:flex-row slg:items-center slg:justify-between">
                    {/* Left Content */}
                    <div className="w-full slg:w-[45%] space-y-4   slg:pr-4">
                        <h1 className="text-4xl text-center sm:text-4xl slg:text-5xl font-bold leading-tight">
                            Your Portal to{' '}
                            <span className="relative inline-block">
                                Authentic Islamic
                                <span><img src={underline} alt="traceImage" width={220} height={16} /></span>
                                {/* <div className="absolute bottom-2 left-0 w-full h-3 bg-[var(--secondary-color)] opacity-20 -z-10"></div> */}
                            </span>{' '}
                            Knowledge
                        </h1>

                        <p className="text-gray-600 text-center text-sm xxsm:text-base sm:text-lg leading-relaxed">
                            IslamGpt is a dynamic, multi-functional Islamic platform that supports you in your learning and practicing of Islam, personal growth, and connection to Islamic local communities.
                        </p>

                        <div className="grid place-items-center h-full">
                            <button className="px-4 justify-center items-center  sm:px-8 py-2 sm:py-3 bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white rounded-full text-sm xxsm:text-base sm:text-lg font-medium hover:opacity-90 transition-all duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full slg:w-[55%] flex justify-end">
                        <div className="relative w-full  sm:w-[80%] slg:w-[120%] max-w-[800px] slg:max-w-none">
                            <img
                                src={rightImg}
                                alt="IslamGpt App Interface"
                                className="w-full h-auto object-contain object-right slg:object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero