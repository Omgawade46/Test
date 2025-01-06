import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { IconCloudDemo } from "./components/IconCloudDemo";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import { useState, useEffect } from "react";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   // Clean up the timer when the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);
  console.log("App.js");

  return (
    <div>
      {/* {!loading ? (
        <>
        
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
          
          
        </>
      ) : (
        <div className={`min-h-[100vh] ${loading ? 'flex items-center overflow-hidden justify-center' : ''}`}>
          <IconCloudDemo />
        </div>
      )} */}
        <Home />
    </div>
  );
  
}

export default App;
