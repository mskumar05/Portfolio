import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ label, width }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium">{label}</p>
    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        style={{ width }}
      >
        <span className="absolute -top-7 right-0">{width}</span>
      </motion.span>
    </span>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Core Technologies
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">ML/AI & Programming</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar label="Python" width="95%" />
          <SkillBar label="PyTorch" width="92%" />
          <SkillBar label="TensorFlow & Keras" width="88%" />
          <SkillBar label="LangChain & LangGraph" width="92%" />
          <SkillBar label="LLMs & NLP (GPT, Llama, Claude)" width="90%" />
          <SkillBar label="Scikit-learn & XGBoost" width="90%" />
          <SkillBar label="PySpark & Distributed Data" width="87%" />
          <SkillBar label="FastAPI, GraphQL & AsyncIO" width="84%" />
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Platforms & Ops
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Cloud, Data & MLOps</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar label="AWS (Bedrock, Lambda, ECS, Trainium)" width="90%" />
          <SkillBar label="Docker & Kubernetes" width="87%" />
          <SkillBar label="Terraform & Infrastructure as Code" width="85%" />
          <SkillBar label="MLflow, CI/CD & Model Governance" width="88%" />
          <SkillBar label="Streaming Feature Stores & Kafka" width="86%" />
          <SkillBar label="Redis, DynamoDB & Low-Latency Caching" width="82%" />
          <SkillBar label="Prometheus, Grafana & Datadog Monitoring" width="86%" />
          <SkillBar label="SHAP, Explainability & Risk Controls" width="88%" />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
