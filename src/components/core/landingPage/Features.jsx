import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import underline from "../../../assets/images/general/underline.png";
import aiChat from "../../../assets/images/StandOut/aiAssistedIcon.png";
import practicalRelevance from "../../../assets/images/StandOut/practicleRelevance.png";
import contextualUnderstanding from "../../../assets/images/StandOut/contextual.png";
import nearbyMosque from "../../../assets/images/features/featureMosque.png";
import prayerTime from "../../../assets/images/StandOut/trustedIcon.png";
import mosqueIllustration from "../../../assets/images/StandOut/full mosque.png"; // Mosque Image

gsap.registerPlugin(ScrollTrigger);

const features = [
    { icon: aiChat, title: "AI Chat" },
    { icon: practicalRelevance, title: "Practical Relevance" },
    { icon: contextualUnderstanding, title: "Contextual Understanding" },
    { icon: nearbyMosque, title: "Nearby Mosque" },
    { icon: prayerTime, title: "Prayer Time" }
];

const Features = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);

    useGSAP(() => {
        const title = sectionRef.current.querySelector(".title-container");
        const cards = cardsRef.current.children;

        gsap.set([title, cards], { opacity: 0, y: 50 });

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
                });
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    delay: 0.3
                });
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-white relative" id="features">
            <div className="container mx-auto px-4">

                {/* Title Section */}
                <div className="title-container text-center mb-12">
                    <div className="relative inline-block">
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Features that Stands Out
                        </h2>

                    </div>
                </div>

                {/* Features Grid */}
                <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* First Row - 3 Cards */}
                    {features.slice(0, 3).map((feature) => (
                        <div key={feature.title} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                            <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-contain mb-4" />
                            <h3 className="text-lg font-bold text-black">{feature.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Second Row - 2 Centered Cards */}
                <div className="flex justify-center gap-6 mt-6">
                    {features.slice(3, 5).map((feature) => (
                        <div key={feature.title} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center w-[250px]">
                            <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-contain mb-4" />
                            <h3 className="text-lg font-bold text-black">{feature.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Mosque Illustration (Bigger & Fully Right) */}
                <img
                    src={mosqueIllustration}
                    alt="Mosque Illustration"
                    className="absolute bottom-4 right-0 w-[250px] md:w-[300px] object-contain"
                />

            </div>
        </section>
    );
};

export default Features;
