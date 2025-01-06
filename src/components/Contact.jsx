import React from 'react'
import Particles from './magicui/Particles';
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Contact = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
  
    useEffect(() => {
      setColor(theme === "dark" ? "#000000" : "#ffffff");
    }, [theme]);
  return (
    <div name='contact' className='w-full h-screen custom-gradient flex justify-center items-center p-4 relative'>
    <form method='POST' action="https://getform.io/f/anleoyja" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - omgawade2002@gmail.com</p>
        </div>
  
        <input className='bg-[#72757c] p-2' type="text" placeholder='Name' name='name' /> <br/>
     
        <textarea className='bg-[#72757c] p-2' name="message" rows="10" placeholder='Message'></textarea>
       <a href={`mailto:omgawade2002@gmail.com?subject=hey&body=hello`}className='text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</a>
        
    </form>
    
    <Particles
        className="absolute inset-0 "
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
</div>
  )
}

export default Contact