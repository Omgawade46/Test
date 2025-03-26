import React, { useState } from 'react';
import Particles from './magicui/Particles';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion'; // For smooth animations
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // Importing icons

const Contact = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setColor(theme === "dark" ? "#000000" : "#ffffff");
    }, [theme]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_8o5w9ag', 'template_jaucfyq', e.target, '7V8_oR0_S71LBqK4y')
            .then(
                (result) => {
                    setStatus('Message sent successfully!');
                    setShowPopup(true);
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    setStatus('Failed to send message. Please try again later.');
                    setShowPopup(true);
                }
            );
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div name="contact" className="w-full h-full custom-gradient flex justify-center items-center p-4 relative">
            <form
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col max-w-[600px] w-full p-6 bg-opacity-80 bg-gray-800 rounded-lg shadow-lg"
            >
                <div className="pb-2">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">Get in touch with me! Fill out the form below or email me at omgawade2002@gmail.com.</p>
                </div>

                <input
                    className="bg-[#72757c] p-3 mb-4 rounded-md text-white"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    className="bg-[#72757c] p-3 mb-4 rounded-md text-white"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    className="bg-[#72757c] p-3 mb-4 rounded-md text-white"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    className="text-white mb-8 border-2 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black px-6 py-2 my-4 mx-auto flex items-center rounded-md"
                >
                    Let's Connect
                </button>
            </form>

            {/* Popup Modal with animation */}
            {showPopup && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 p-8 rounded-lg text-center max-w-sm w-full shadow-xl"
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-2xl font-bold mb-4 text-white">{status}</p>
                        <button
                            onClick={closePopup}
                            className="bg-white text-black px-6 py-3 rounded-full transform transition duration-300 hover:scale-105"
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Social Icons Section */}
            <div className="absolute bottom-6  flex justify-center items-center space-x-6 text-gray-300">
                <a href="https://www.linkedin.com/in/om-gawade-22b337244/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} className="hover:text-yellow-400 transition-all duration-300" />
                </a>
                <a href="https://github.com/Omgawade46" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className="hover:text-yellow-400 transition-all duration-300" />
                </a>
                <a href="mailto:omgawade2002@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={30} className="hover:text-yellow-400 transition-all duration-300" />
                </a>
                <a href="https://drive.google.com/file/d/19ACcV_P_MFsADzA4AMM6isNObYfaZfky/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FaFileAlt size={30} className="hover:text-yellow-400 transition-all duration-300" />
                </a>
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

export default Contact;
