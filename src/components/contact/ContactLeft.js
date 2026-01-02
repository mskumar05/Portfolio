import React from "react";
import { FaLinkedinIn, FaDownload, FaGithub } from "react-icons/fa";
const ContactLeft = () => {
  const portraitSrc = "/sai.png";
  const resumeHref = "/msai_resume.pdf";
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[var(--color-panel-start)] to-[var(--color-panel-end)] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={portraitSrc}
        alt="Sai Kumar Mothe portrait"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sai Kumar Mothe</h3>
        <p className="text-lg font-normal text-gray-400">
          AI Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I build real-time financial AI, multi-agent LangChain/LangGraph systems, and Bedrock-scale LLM serving on AWS with MLflow, Docker, Kubernetes, and Terraform.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 (980) 689-0147</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">msk05@myyahoo.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
              aria-label="GitHub repository"
            >
              <FaGithub />
            </a>
          </span>
        </div>
        <div>
          <h1 className="font-bold text-center text-red-500 text-base uppercase font-titleFont mb-4">
            RESUME
          </h1>
          <span className="bannerIcon w-full ">
            <a href={resumeHref} rel="noopener noreferrer" target="_blank" download>
              <FaDownload />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
