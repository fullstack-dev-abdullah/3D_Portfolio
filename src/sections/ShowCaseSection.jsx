import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";
import {projects} from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);
function ShowCaseSection() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);
    cardRefs.current = []; // reset refs on every render


    useGSAP(() => {
        // Fade in the section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animate each card
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, [projects]);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full ">
                <div className="md:mb-10 mb-5">
                    <TitleHeader title="My Projects Overview" sub="🎯My Projects"/>
                </div>

                <div className="showcaselayout">

                    <div className="project-list-wrapper overflow-hidden">

                        {projects.map((project, index) => (
                            <div className="project"  ref={(el) => el && (cardRefs.current[index] = el)} key={project.id}>
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    <div className="image-wrapper bg-[#FFEFDB]">
                                        <img
                                            src={project.imgPath}
                                            alt={project.name}
                                        />
                                    </div>
                                    <h2>{project.name}</h2>
                                </a>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowCaseSection
