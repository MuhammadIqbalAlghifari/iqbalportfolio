"use client"

import SocialMediaData from "../libs/SocialMediaData";
import BackgroundPortfolio from "./backgroundPortfolio";
import { Text } from "@chakra-ui/react";
import ContactMe from "./contact";

export default function AboutMe() {

    return (
        <div className="relative">
          <div className="w-full absolute bg-no-repeat -z-10 bg-cover">
            <BackgroundPortfolio />
    
            <section className="px-10 transition-all duration-500 relative" style={{fontFamily: 'Futura Hv', zIndex: 1}}>
                  <div className="flex flex-col max-w-7xl mx-auto justify-center h-full items-center md:pt-24 pt-20">
                      <div className="flex flex-col w-full items-center justify-center p-8 text-center md:gap-4 gap-3">
                          
                          <Text
                          className="lg:text-xl md:text-md text-sm"
                          bgGradient="linear(to-r, #4eecda, #00da8e)"
                          bgClip="text"
                          fontWeight='extrabold'
                          >
                          My Profile
                          </Text>

                          <img src="/about-me.jpg" className="object-cover bg-no-repeat md:mt-10 w-44 h-44 rounded-full"/>

                          <Text
                          className="lg:text-4xl md:text-2xl text-xl"
                          color='white'
                          fontWeight='extrabold'
                          >
                          About Me
                          </Text>

                          <Text
                          className="lg:text-md md:text-base text-sm"
                          color='white'
                          >
                          I'm a front end developer with a couple years of experience in web development. I've worked on a variety of projects for clients in the user interface and user experience design, making a functional website, and working on corporate company. I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards.
                          </Text>

                          <Text
                          className="lg:text-xl md:text-md text-base py-2"
                          color= 'white'
                          fontWeight='extrabold'
                          >
                          My Social Media
                          </Text>

                          <div className="flex justify-center items-center md:gap-4 gap-2">
                            {SocialMediaData.map(({ Svg, Href, index}) => (
                              <a href={Href}>
                                <div key={index} dangerouslySetInnerHTML={{__html: Svg}} className="lg:h-14 lg:w-14 md:h-12 md:w-12 h-10 w-10 md:p-3 p-2 border border-white rounded-full text-white hover:text-[#00da8e] hover:border-[#00da8e] duration-500"/>
                              </a>
                            ))}
                          </div>


                      </div>
                  </div>
            </section>

            <ContactMe/>
          </div>

        </div>
      );
}