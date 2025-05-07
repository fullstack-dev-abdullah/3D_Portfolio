import React from 'react'
import {words,roles} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Typewriter from 'typewriter-effect';
import AnimatedCounter from "../components/AnimatedCounter.jsx";

function Hero() {
    useGSAP(()=>{
        gsap.fromTo('.hero-text h1', {y: 50,opacity:0}, {y: 0,opacity:1, duration: 1,stagger:0.5, ease: 'power2.inOut'})
    })
    return (
        <section id="hero" className="relative overflow-hidden">
            {/*<div className="absolute top-0 left-0 z-10">*/}
            {/*    <img src="/images/bg.png" alt="" />*/}
            {/*</div>*/}
        {/* LEFT: Hero Content */}
            <div className="hero-layout">

        <header  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
            <div className="flex flex-col gap-6">
                <div className="hero-text">
                    <h1>Hi, I’m Abdullah R</h1>
  {/*                  <h1><span className="slide">*/}
  {/*                     <span className="wrapper">*/}
  {/*{words.map((word, index) => (<span*/}
  {/*    key={index}*/}
  {/*    className="flex items-center md:gap-2 gap-1 pb-2"*/}
  {/*>*/}
  {/*                      <img*/}
  {/*                          src={word.imgPath}*/}
  {/*                          alt="person"*/}
  {/*                          className="xl:size-12 md:size-10 size-7 md:p-1 p-1 rounded-full bg-white-50"*/}
  {/*                      />*/}
  {/*                      <span >{word.text}</span>*/}
  {/*                    </span>))}*/}
  {/*                      </span>*/}
  {/*                      </span></h1>*/}

                    <Typewriter
                        options={{
                            strings: roles,
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
<div className='mt-2'>
    <p className='text-white-50 md:text-xl relative z-10'>Shaping Code Into Real Projects That Delivers Results. </p>

</div>
                <Button className='md:w-80 md:h-16 w-60 h-12'
                        text={'See my Work'}
                        id='work'
                />

            </div>
            {/* RIGHT: 3D Model or Visual */}
            <figure>
                <div className='hero-3d-layout'>
                    <HeroExperience />
                </div>
            </figure>
        </header >
            </div>
            <AnimatedCounter />
    </section>)
}

export default Hero
