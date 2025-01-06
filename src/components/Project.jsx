import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg';
import realEstate from '../assets/projects/realestate.jpg'
import Particles from './magicui/Particles';
import  { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";
import { useTheme } from "next-themes";



const Project = () => {
    
        const { theme } = useTheme();
        const [color, setColor] = useState("#ffffff");
      
        useEffect(() => {
          setColor(theme === "dark" ? "#000000" : "#ffffff");
        }, [theme]);

        const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  return (

    
    <div name='project' className='w-full md:h-screen  text-gray-300 custom-gradient py-14 relative'>
         
         <div className='pb-2 mx-auto p-4 flex flex-col justify-center max-w-[1000px]'>
            <p className='text-4xl  font-bold inline border-b-4 text-gray-300 border-yellow-400'>
             Project
            </p>
            <p className='py-5'> Check out my recent Project</p>
            </div>
            
        <AnimatePresence mode='wait'>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
             className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode='sync'>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div 
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top "
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                   className="h-auto w-auto max-h-40 max-w-40 md:max-h-14 md:max-w-14 rounded-lg object-cover object-center mx-auto"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
     
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



export const CloseIcon = () => {
    return (
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-black"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </motion.svg>
    );
  };
  
  const cards = [
    
    {
      description: "A blog application provides insights into the content and purpose of your blog post. ",
      title: "Blog Application",
      src: WorkImg,
      ctaText: "View",
      ctaLink: "https://github.com/Omgawade46/Blog_App",
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for
            her melancholic and cinematic music style. Born Elizabeth Woolridge
            Grant in New York City, she has captivated audiences worldwide with her
            haunting voice and introspective lyrics. <br /> <br />
            Her songs often explore themes of tragic romance, glamour, and
            melancholia, drawing inspiration from both contemporary and vintage pop
            culture. With a career that has seen numerous critically acclaimed
            albums, Lana Del Rey has established herself as a unique and influential
            figure in the music industry, earning a dedicated fan base and numerous
            accolades.
          </p>
        );
      },
    },
    {
        description: "An authenticator website is a platform that enhances security by generating and managing time-based one-time passwords.",
        title: "Authentication App ",
        src: WorkImg,
        ctaText: "View",
        ctaLink: "https://github.com/Omgawade46/Authentication_App",
        content: () => {
          return (
            <p>
              Babu Maan, a legendary Punjabi singer, is renowned for his soulful
              voice and profound lyrics that resonate deeply with his audience. Born
              in the village of Khant Maanpur in Punjab, India, he has become a
              cultural icon in the Punjabi music industry. <br /> <br /> His songs
              often reflect the struggles and triumphs of everyday life, capturing
              the essence of Punjabi culture and traditions. With a career spanning
              over two decades, Babu Maan has released numerous hit albums and
              singles that have garnered him a massive fan following both in India
              and abroad.
            </p>
          );
        },
      },
      
    

      {
        description: "Soil detection involves analyzing and identifying the properties of soil.",
        title: "Soil detection",
        src: WorkImg,
        ctaText: "View",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
          return (
            <p>
              Led Zeppelin, a legendary British rock band, is renowned for their
              innovative sound and profound impact on the music industry. Formed in
              London in 1968, they have become a cultural icon in the rock music
              world. <br /> <br /> Their songs often reflect a blend of blues, hard
              rock, and folk music, capturing the essence of the 1970s rock era.
              With a career spanning over a decade, Led Zeppelin has released
              numerous hit albums and singles that have garnered them a massive fan
              following both in the United Kingdom and abroad.
            </p>
          );
        },
      },

      
     
      
    {
      description: "A seamless table reservation system ",
      title: "Table Reservation System",
      src: realEstate,
      ctaText: "View",
      ctaLink: "https://github.com/Omgawade46/Table_Reservation",
      content: () => {
        return (
          <p>
            Babu Maan, a legendary Punjabi singer, is renowned for his soulful
            voice and profound lyrics that resonate deeply with his audience. Born
            in the village of Khant Maanpur in Punjab, India, he has become a
            cultural icon in the Punjabi music industry. <br /> <br />
            His songs often reflect the struggles and triumphs of everyday life,
            capturing the essence of Punjabi culture and traditions. With a career
            spanning over two decades, Babu Maan has released numerous hit albums
            and singles that have garnered him a massive fan following both in India
            and abroad.
          </p>
        );
      },
    },
    
    
   
  ];
  
export default Project