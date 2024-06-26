"use client"

import React, { useRef, useState } from 'react';
import { SocialMediaData } from '../libs/Data';
import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { easeOut } from 'framer-motion';
import gsap from 'gsap';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

export default function HomeSection() {

  let LeftHero, RightHero = useRef();

  const [isOpen, setOpen] = useState(false)

  
  useEffect(() => {
    const isDekstop = window.matchMedia("(min-width: 1024px)").matches;
    
    const animateOnScroll = (element, { opacity, x, y }) => {
      gsap.fromTo(element, { opacity: 0, x, y }, {
        opacity: 1,
        x: 0,
        y: 0,
        delay: 0.2,
        duration: 1.3,
        ease: easeOut,
      })
    }

    
    const animateOnDesktop = () => {
      animateOnScroll(LeftHero, {opacity: 0, y: -100})
      animateOnScroll(RightHero, {opacity: 0, y: 100})
    }
    
    const animateOnMobile = () => {
      animateOnScroll(LeftHero, {opacity: 0, y: -30})
      animateOnScroll(RightHero, {opacity: 0, y: 30})
    }
    
    isDekstop ? animateOnDesktop() : animateOnMobile();
    
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      gsap.to('.parallax-element', { 
        duration: 0.5, // Adjust the duration as needed
        y: -scrollValue * 0.2, 
        ease: easeOut // You can adjust the easing function
      });
    };
    
    window.addEventListener('scroll', handleScroll);

  }, [])

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("#Picture"),{
        reverse:        false,  // reverse the tilt direction
        max:            10,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        speed:          500,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
    })
},[])

  return (
    <section id='Home' className="w-full flex lg:flex-row flex-col items-center justify-center h-screen parallax-element">

      <div ref={el => {LeftHero = el}} className='flex p-8 flex-col gap-y-3 justify-center lg:items-start items-center lg:pt-0 pt-24 lg:h-screen lg:w-1/2 w-full h-1/2'>

        <h1 className='text-black text-center lg:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl' style={{fontFamily: 'Avant Garde', lineHeight: '1.2'}}>UI UX Designer & Front End Web Developer</h1>

        <h1 className='text-black text-center lg:text-start text-xs md:text-base 2xl:text-2xl' style={{fontFamily: 'Futura Hv'}}>Welcome to my portfolio website! I'm a passionate and experienced web developer with a focus creating an elegant user interface that user like to see. Explore my portfolio to see how i created website and crafted some functional website for you!</h1>

        <a href='#Contact' className='text-white bg-black px-4 py-2 text-sm md:text-md lg:text-lg 2xl:text-xl rounded-md' style={{fontFamily: 'Futura Hv'}}>Get In Touch</a>

          
      </div>

      <div ref={el => {RightHero = el}} className='flex p-8 flex-col gap-y-3 md:gap-y-5 justify-center items-center lg:h-screen lg:w-1/2 w-full h-1/2'>

        <div id='Picture' className='bg-black p-2 w-4/5 h-2/3 shadow-md shadow-black'>

          <img src="/myself.jpg" onClick={() => setOpen(true)} alt="" className='object-cover grayscale-[40%] shadow-black shadow-md hover:grayscale-0 transition w-full h-full'/>

        </div>

        <div className='flex justify-center items-center gap-2 md:gap-3 lg:gap-4'>
          {SocialMediaData.map(({svg, index,  href}) => (
            <a href={href} rel='noopener noreferrer' target='_blank'>
              <div key={index} dangerouslySetInnerHTML={{__html: svg}} className='h-5 w-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 transition text-black'/>
            </a>
          ))}
        </div>

      </div>

      <Lightbox
        open={isOpen}
        full
        close={() => setOpen(false)}
        slides={[
          {
            src: "/myself.jpg",
            alt: "me",
            download: '/myself.jpg',
            width: 3840,
            height: 2560,
          },
          // ...
        ]}
      />
        
    </section>
  );
}
