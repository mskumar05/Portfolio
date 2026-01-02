import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="AI/ML PRODUCTION SYSTEMS"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          github={<a href='https://ytapi-clone-chinna.web.app' target='_blank'><BsGithub /></a>}
        /> */}
        <ProjectsCard
          title="LLM Inference Platform on AWS Bedrock"
          des="Built a PyTorch + FastAPI serving layer for Bedrock-hosted LLMs with distributed caching, model parallelism, and autoscaling on Kubernetes/Docker. Tuned AWS Trainium/Inferentia deployments for 35% better throughput and consistent sub-2s latency."
          src={projectOne}
          github={
            <a
              href='https://github.com/mskumar05'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="GitHub repository"
            >
              {<FaGithub />}
            </a>
          }
        />
        <ProjectsCard
          title="AI Engineering Assistant Platform"
          des="Delivered a LangChain-powered assistant that automates code review summaries, documentation, and knowledge retrieval. Exposed a cloud-native Python/AWS Lambda API handling thousands of daily developer requests with sub-second responses."
          src={projectTwo}
          github={
            <a
              href='https://github.com/mskumar05'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="GitHub repository"
            >
              {<FaGithub />}
            </a>
          }
        />
        <ProjectsCard
          title="Enterprise Fraud Detection Platform"
          des="Led ML engineering for PNC Bank’s fraud stack—ensemble XGBoost + deep models, streaming PySpark feature store (200+ features), MLflow governance, and SageMaker deployments that monitor 30M+ transactions/day with 98% precision."
          src={projectThree}
          github={
            <a
              href='https://github.com/mskumar05'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="GitHub repository"
            >
              {<FaGithub />}
            </a>
          }
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        /> */}
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects
