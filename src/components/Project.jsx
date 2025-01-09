import React from 'react'

import soil from '../assets/projects/soil.png'
import auth from '../assets/projects/Auth_app.png'
import table from '../assets/projects/Tablereservation.jpg'
import blog from '../assets/projects/blog.png'
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
                   className="h-40 w-40 md:h-24 md:w-24  md:max-h-14 md:max-w-14 rounded-lg object-cover object-center mx-auto"
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
      src: blog,
      ctaText: "View",
      ctaLink: "https://github.com/Omgawade46/Blog_App",
      content: () => {
        return (
          <p>
            The Blog Application is a responsive web application built using React.js, designed to enable users to browse, create, edit, and delete blog posts seamlessly. It incorporates Redux for efficient state management, React Router for smooth navigation, and styled-components for a visually appealing and customizable design.  <br /> <br />
            The application features a user-friendly interface with functionality to handle dynamic routing and CRUD operations effectively. It was developed as a self-learning project to deepen knowledge of modern web development practices.
          </p>
        );
      },
    },
    {
        description: "An authenticator website is a platform that enhances security by generating and managing time-based one-time passwords.",
        title: "Authentication App ",
        src: auth,
        ctaText: "View",
        ctaLink: "https://github.com/Omgawade46/Authentication_App",
        content: () => {
          return (
            <p>
             The Authentication App is a secure web application built using React.js, designed to manage user sign-up, login, and authentication processes. It features functionalities like password validation, error handling, and session management to ensure a seamless and secure user experience.  <br /> <br /> React Router is used for navigation, while state management ensures efficient handling of user data. Developed as a self-learning project, it showcases expertise in implementing authentication workflows and enhancing application security.
            </p>
          );
        },
      },
      
    

      {
        description: "Soil detection involves analyzing and identifying the properties of soil.",
        title: "Soil detection",
        src: soil,
        ctaText: "View",
        ctaLink: "",
        content: () => {
          return (
            <p>
              
The Soil Detection Project is a Python-based application that leverages machine learning to classify soil types accurately. Using a trained ML model, the system analyzes soil properties to predict the most suitable category, assisting in agricultural decision-making.  <br /> <br /> The project employs libraries like Pandas, NumPy, and Scikit-learn for data processing, model building, and evaluation. Developed as a self-learning initiative, it highlights proficiency in applying machine learning techniques to solve real-world problems effectively.
            </p>
          );
        },
      },

      
     
      
    {
      description: "A seamless table reservation system ",
      title: "Table Reservation System",
      src: table,
      ctaText: "View",
      ctaLink: "https://github.com/Omgawade46/Table_Reservation",
      content: () => {
        return (
          <p>
        The Table Reservation application is a web-based platform designed to streamline the process of booking tables at restaurants. Built using HTML, CSS, and JavaScript for the front-end, and PHP with a database for the back-end, the project ensures a seamless user experience and efficient data management.   <br /> <br />
         It allows users to view available tables, select their preferred time slots, and make reservations securely. This self-learning project helped in gaining practical experience in full-stack development and database integration.
          </p>
        );
      },
    },
    
    
   
  ];
  
export default Project