import React, { useState, useEffect } from 'react';
import Particles from './magicui/Particles';
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
          setLoading(false);
          toast.success("Form submitted successfully!");
          setIsSubmitted(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2000);
      } catch (error) {
        setLoading(false);
        toast.error("There was an error submitting the form.");
      }
    }
  };

  return (
    <div name='contact' className='w-full h-full custom-gradient flex justify-center items-center p-4 relative'>
      <form
        method='POST'
        action=""
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[600px] w-full bg-gray-800 p-6 rounded-lg shadow-lg'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>
            Submit the form below or shoot me an email - 
            <a href="mailto:omgawade2002@gmail.com" className='text-yellow-400 underline'> omgawade2002@gmail.com</a>
          </p>
        </div>

        <input
          className='bg-[#72757c] p-2 rounded-md text-white mb-4'
          type="text"
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}

        <textarea
          className='bg-[#72757c] p-2 rounded-md text-white mb-4'
          name="message"
          rows="10"
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}

        <button
          type="submit"
          className='text-white border-2 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black px-4 py-3 my-8 mx-auto flex items-center transition duration-300 ease-in-out'
        >
          {loading ? <span>Loading...</span> : 'Send Message'}
        </button>

        {isSubmitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='text-green-400 text-center mt-4'
          >
            Your message has been successfully sent! I'll get back to you soon.
          </motion.p>
        )}

        <div className='flex justify-center space-x-6 mt-6'>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className='text-gray-300 hover:text-yellow-400 transition duration-300'>
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className='text-gray-300 hover:text-yellow-400 transition duration-300'>
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className='text-gray-300 hover:text-yellow-400 transition duration-300'>
            <FaTwitter size={30} />
          </a>
        </div>
      </form>

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </div>
  );
};

export default Contact;
