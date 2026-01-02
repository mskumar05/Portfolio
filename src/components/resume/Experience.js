import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AI Engineer"
            subTitle="McKinsey & Co. — Sep 2023 - Present"
            result="New York, NY"
            des={
              <div>
                <ul>
                  <li>Built multi-tier analytics applications that improved consulting data-processing efficiency by 35%.</li>
                  <li>Designed LangChain/LangGraph multi-agent platforms for trading, risk, compliance, and customer analytics.</li>
                  <li>Created Trading, Risk, Compliance, and Customer Intelligence agent workflows for collaborative decisions.</li>
                  <li>Integrated Model Context Protocol so agents can reach financial APIs, regulatory data, live markets, credit, and AML tools.</li>
                  <li>Developed agent memory that fuses real-time context with persistent knowledge bases for 1,000+ user sessions.</li>
                  <li>Engineered inter-agent communication standards enabling distributed cognition on cross-domain banking problems.</li>
                  <li>Scaled agent infrastructure on AWS Lambda with auto-scaling and sub-2-second latency for 50K+ queries per day.</li>
                  <li>Collaborated on deploying LLMs to AWS Trainium/Inferentia, boosting inference throughput by 35%.</li>
                  <li>Created internal tooling to profile accuracy/latency trade-offs and tune batching/parallelism across accelerators.</li>
                </ul>
              </div>
            }
          />
          <ResumeCard
            title="ML Engineer"
            subTitle="PNC Bank — Oct 2019 - Jun 2021"
            result="Pittsburgh, PA"
            des={
              <div>
                <ul>
                  <li>Developed backend services that raised transaction throughput by 45% and cut latency by 30%.</li>
                  <li>Delivered real-time fraud models monitoring 30M+ transactions per day with 98% precision and 35% fewer false positives.</li>
                  <li>Built ensemble XGBoost + deep learning models achieving 94% precision, 87% recall, and 52% fewer false positives.</li>
                  <li>Created a streaming PySpark feature store with 200+ behavioral and merchant features feeding ML pipelines.</li>
                  <li>Deployed PyTorch/TensorFlow models on AWS SageMaker with autoscaling and 99.9% uptime across peak loads.</li>
                  <li>Applied quantization + pruning to reduce inference latency by 30–45% while lowering compute expenses 40%.</li>
                  <li>Implemented GitHub Actions, Docker, Terraform, and Helm CI/CD, shrinking deployments from days to under three hours.</li>
                  <li>Established MLflow tracking, governed model registry, and Prometheus/Grafana monitoring for drift, skew, and data quality.</li>
                  <li>Delivered FastAPI gateways, TensorFlow Serving endpoints, Kafka contracts, and on-call runbooks that cut investigation time by 45%.</li>
                </ul>
              </div>
            }
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Experience;
