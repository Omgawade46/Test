import React from 'react'
import Particles from './magicui/Particles';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


const About = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);
  return (
    <div name='about' className='relative w-full h-screen custom-gradient text-gray-300 flex flex-col'>
  <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl  font-bold inline border-b-4 border-yellow-400'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                 <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Om Gawade, nice to meet you. Please take a look around.</p>
                 </div>
                 
                 <div>
                 <p>I'm a passionate software developer with a strong foundation in programming and a keen interest in creating innovative and efficient digital solutions.
                   
                   I’m eager to apply my skills in real-world projects and contribute to solving complex problems. 
                   As a fresher, I’m constantly learning and adapting to new technologies, and I thrive in environments that challenge my abilities and push me to grow. </p>
                 </div>
                </div>

            

        </div>
        <Particles
        className="absolute inset-0 z-10 "
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}

export default About