import { words, roles } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Typewriter from "typewriter-effect";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.5, ease: "power2.inOut" }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
          <div className="flex flex-col gap-6">
            <div className="hero-text">
              <h1>Hi, I’m Abdullah R</h1>
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="mt-2">
              <p className="text-white-50 md:text-xl relative z-10">
                Shaping Code Into Real Projects That Delivers Results.{" "}
              </p>
            </div>
         
          </div>
          {/* RIGHT: 3D Model or Visual */}
          <div>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </div>
             <Button
              className="md:w-80 md:h-16 w-60 h-12 cursor-pointer"
              text={"See my Work"}
              id="work"
            />
        </header>
      </div>
      <AnimatedCounter />
    </section>
  );
}

export default Hero;
