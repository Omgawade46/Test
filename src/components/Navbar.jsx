import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
 import Logo from '../assets/OG.png';
import resume from '../assets/resume.jpg';
import { Link } from 'react-scroll';
import ScrollProgress from "../components/magicui/scroll-progress";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handClick = () => setNav(!nav);

  // const [showImage, setShowImage] = useState(false);
  // const [link,setlink]=useState(true);

  // const clicklink = () =>{
  //   setlink("")
  // }
  // Function to toggle the image visibility
  // const toggleImage = () => {
  //   setShowImage(!showImage);
  // };

  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-4 back backdrop-blur-lg text-gray-300 z-50 '>
       <ScrollProgress className="top-[50px] " />
      
      <div >
      <img src={Logo} alt="Logo Image" style={{ width: '80px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex '>
        <li className=' hover:text-yellow-400 bg:blur-2xl'>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=' hover:text-yellow-400'>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' hover:text-yellow-400'>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' hover:text-yellow-400'>
          <Link to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className=' hover:text-yellow-400'>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      

      {/* Hamburger */}
      <div onClick={handClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#020509] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="project" smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-yellow-400'>
          <Link onClick={handClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      {/* <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0 fixed'>
        <ul>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
          <a
    href="https://www.linkedin.com/in/om-gawade-22b337244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-between items-center w-full text-gray-300"
  >
              Linked <FaLinkedin size={30}   />
            </a>
          </li>
          <li className="w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
  <a
    href="https://github.com/Omgawade46"
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-between items-center w-full text-gray-300"
  >
    Github <FaGithub size={30} />
  </a>
</li>
<li className="w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
  <a
    href="mailto:omgawade2002@gmail.com"
    className="flex justify-between items-center w-full text-gray-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    Email <HiOutlineMail size={30} />
  </a>
</li>

          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <button onClick={toggleImage} className='flex justify-between items-center w-full text-gray-300' href="#">
              Resume <BsFillPersonLinesFill size={30} />
            </button>
          </li>
        </ul>
      </div>

      {/* Conditionally render the image and close button */}
      {/* {showImage && (
        <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>

          <div style={{ position: 'relative', textAlign: 'center' }}>
          <button className="close-btn" onClick={toggleImage} >
            
            <img
              src={resume}
              alt="Example"
              style={{ width: '700px', height: '700px',  padding: '3px',  borderRadius: '10px' }}
            />
            </button>
            
           
          </div>
        </div>
      )}  */}
    </div>
  );
}

export default Navbar;
