import React, { useEffect, useState } from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import java from "../assets/java.png";
import sql from "../assets/sql.png";
import Mongo from "../assets/mongo.png";
import Particles from "./magicui/Particles";
import { useTheme } from "next-themes";
import CardSpotlight from "./ui/card-spotlight";

const Skills = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);

  return (
    <div
      name="skills"
      className="w-full h-auto custom-gradient text-gray-300 py-12 relative"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div>
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-yellow-400">
            Skills
          </p>
          <p className="py-4 text-sm sm:text-base">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 text-center py-8">
          <CardSpotlight className="shadow-md hover:scale-110 z-20 duration-500">
            <img
              className="w-16 sm:w-20 mx-auto mt-6 z-20 relative"
              src={HTML}
              alt="HTML icon"
            />
            <p className="mt-4 text-sm sm:text-base z-20 relative">HTML</p>
          </CardSpotlight>
          <CardSpotlight className="shadow-md hover:scale-110 duration-500">
            <img
              className="w-16 sm:w-20 mx-auto mt-6 z-20 relative"
              src={CSS}
              alt="CSS icon"
            />
            <p className="mt-4 text-sm sm:text-base z-20 relative">CSS</p>
          </CardSpotlight>
          <CardSpotlight className="shadow-md hover:scale-110 duration-500">
            <img
              className="w-16 sm:w-20 mx-auto mt-6 z-20 relative"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="mt-4 text-sm sm:text-base z-20 relative">
              JAVASCRIPT
            </p>
          </CardSpotlight>
          <CardSpotlight className="shadow-md hover:scale-110 duration-500">
            <img
              className="w-16 sm:w-20 mx-auto mt-6 z-20 relative"
              src={ReactImg}
              alt="React icon"
            />
            <p className="mt-4 text-sm sm:text-base z-20 relative">REACT</p>
          </CardSpotlight>
          <CardSpotlight className="shadow-md hover:scale-110 duration-500">
            <img
              className="w-16 sm:w-20 mx-auto mt-6 z-20 relative"
              src={java}
              alt="Java icon"
            />
            <p className="mt-4 text-sm sm:text-base z-20 relative">JAVA</p>
          </CardSpotlight>
          <CardSpotlight className="shadow-md hover:scale-110 duration-500">
            <img
              className="w-16 sm:w-20 mx-auto mt-6 z-20 relative"
              src={Node}
              alt="Node.js icon"
            />
            <p className="mt-4 text-sm sm:text-base z-20 relative">NODE JS</p>
          </CardSpotlight>
          <CardSpotlight className="shadow-md hover:scale-110 duration-500">
            <img
              className="w-16 sm:w-20 mx-auto mt-6 z-20 relative"
              src={Mongo}
              alt="MongoDB icon"
            />
            <p className="mt-4 text-sm sm:text-base z-20 relative">MONGO DB</p>
          </CardSpotlight>
          <CardSpotlight className="shadow-md hover:scale-110 duration-500">
            <img
              className="w-16 sm:w-20 mx-auto mt-6 z-20 relative"
              src={sql}
              alt="SQL icon"
            />
            <p className="mt-4 text-sm sm:text-base z-20 relative">SQL</p>
          </CardSpotlight>
        </div>
      </div>
      <Particles
        className="absolute inset-0 "
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default Skills;
