import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Graduate Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold">Academic Foundation</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[650px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="M.S. Applied Statistics & Decision Analytics"
            subTitle="Western Illinois University"
            result="Analytics & AI Focus"
            des="Blended statistical learning, optimization, predictive modeling, and enterprise analytics. Delivered research across ML, quantitative decision science, and business intelligence."
          />
          <ResumeCard
            title="Graduate Research & Capstone"
            subTitle="Real-time ML & Financial Analytics"
            result="Project Distinction"
            des="Explored fraud detection, streaming data science, and production AI techniques that now power large-scale banking and LLM systems I build professionally."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Key Disciplines</p>
          <h2 className="text-3xl md:text-4xl font-bold">Specializations</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[650px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Machine Learning & LLMs"
            subTitle="PyTorch, TensorFlow, LangChain, LangGraph"
            result="Expert"
            des="Neural networks, NLP, LLM orchestration, and agent memory design that power my fraud, compliance, and GenAI solutions."
          />
          <ResumeCard
            title="MLOps & Cloud Platforms"
            subTitle="AWS Bedrock, SageMaker, Lambda, Kubernetes"
            result="Expert"
            des="Infrastructure-as-code, CI/CD, MLflow governance, and scalable serving across Trainium/Inferentia, Docker, and Terraform."
          />
          <ResumeCard
            title="Data Engineering & Analytics"
            subTitle="PySpark, Streaming Feature Stores, Decision Science"
            result="Advanced"
            des="High-volume data processing, behavioral feature stores, and analytical storytelling to guide enterprise AI adoption."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
