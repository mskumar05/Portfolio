import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaRobot } from "react-icons/fa";
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = ({ onChatbotToggle }) => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="gap-0.1 font-bold text-gray-300">
        <span className="text-6xl text-red-500">S</span>
        <span className="text-3xl ml-1">ai</span>
        <span className="text-6xl text-red-500 ml-1">K</span>
        <span className="text-3xl ml-1">umar</span>
        <span className="text-6xl text-red-500 ml-1">M</span>
        <span className="text-3xl ml-1">othe</span>
      </div>

      <div className="flex items-center gap-4">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={onChatbotToggle}
          className="hidden mdl:inline-flex items-center gap-2 bg-gradient-to-r from-designColor to-[#c026d3] text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-designColor/50 transition-all"
          title="Ask AI about Sai's experience"
        >
          <FaRobot className="text-lg" />
          <span className="text-sm font-medium">Ask AI</span>
        </button>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I build real-time financial AI, multi-agent systems, and end-to-end MLOps platforms on AWS with LangChain, LangGraph, PyTorch, and Terraform.
                </p>
              </div>
              <button
                onClick={() => {
                  setShowMenu(false);
                  onChatbotToggle();
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-designColor to-[#c026d3] text-white px-4 py-3 rounded-lg hover:shadow-lg hover:shadow-designColor/50 transition-all"
              >
                <FaRobot className="text-lg" />
                <span className="text-sm font-medium">Ask AI about me</span>
              </button>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <a
                      href="http://www.linkedin.com/in/sai-kumar-m-10b5a126b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a
                      href="https://github.com/mskumar05"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
