import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "AI Engineer.",
      "Multi-Agent Systems Architect.",
      "Real-Time ML Engineer.",
      "MLOps Specialist.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sai Kumar Mothe</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          AI Engineer with 4+ years building real-time financial AI and multi-agent systems. I deliver fraud detection across 30M+ transactions per day, design LangChain/LangGraph agent platforms with MCP, and ship low-latency AI on AWS Trainium/Inferentia. My toolkit spans PyTorch, TensorFlow, PySpark, and production MLOps with MLflow, Docker, Kubernetes, Terraform, and CI/CD.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner
