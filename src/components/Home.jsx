import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ShimmerButton from "../components/magicui/ShimmerButton";
import SlightFlip from "../components/magicui/SlightFlip";
import WordPullUp from '../components/magicui/WordPullUp';
import Particles from './magicui/Particles';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import prof from "../assets/projects/om3.jpg";

const Home = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#E1D9D1");
  }, [theme]);
   

  
  return (
    <div name="home" className="w-full h-screen custom-gradient">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
          {/* Profile Image */}
         
          <img
            src={prof}
            alt="profile"
            className="w-32 h-32 sm:w-48 sm:h-48 mb-7 md:w-60 md:h-60 rounded-full mt-9 md:mb-0 md:ml-4 "
          />
          
         
          {/* Text Content */}
          <div>
            <p className="text-yellow-400">Hi, my name is</p>
            <SlightFlip className="text-4xl sm:text-6xl font-bold text-[#f8f3ea]" word="Om Gawade" />
            <WordPullUp className="text-4xl sm:text-6xl font-bold text-[#b4b4b6e3]" words="I’m a full-stack developer." />
            <p className="text-[#8b93ad] py-4 max-w-[700px]">
            Dedicated to building high-quality digital experiences, I’m currently focused on crafting responsive full-stack web applications.
            </p>
            

            <a href='https://drive.google.com/file/d/19ACcV_P_MFsADzA4AMM6isNObYfaZfky/view?usp=sharing'>
            <div>
             
              <ShimmerButton  className="shadow-2xl text-white group flex items-center hover:text-black">
                <div className="text-white group flex items-center hover:text-black">
                  Resume
                  <span className="">
                    <HiArrowNarrowRight size={25} className="ml-3" />
                  </span>
                  
                </div>
              </ShimmerButton>
             
            </div>
            </a>
          </div>
        </div>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default Home;
