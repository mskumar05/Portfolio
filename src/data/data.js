import { FaBrain, FaRobot, FaServer, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <FaBrain />,
    title: "Financial AI & Fraud",
    des: "Designing PyTorch/TensorFlow models that screen 30M+ daily transactions with 98% precision while cutting fraud false positives by 35-52%.",
  },
  {
    id: 2,
    icon: <FaRobot />,
    title: "Multi-Agent Workflows",
    des: "Building LangChain/LangGraph + MCP platforms with trading, risk, compliance, and customer intelligence agents that collaborate in real time.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "LLM Inference Platforms",
    des: "Serving Bedrock-scale LLMs via PyTorch, FastAPI, distributed caching, and AWS Trainium/Inferentia to hit sub-2s latency for 50K+ queries/day.",
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: "Streaming Feature Stores",
    des: "Engineering PySpark/Kafka pipelines with 200+ behavioral and merchant features plus MLflow tracking for always-fresh fraud signals.",
  },
  {
    id: 5,
    icon: <SiKubernetes />,
    title: "MLOps Automation",
    des: "Shipping GitHub Actions, Docker, Kubernetes, Terraform, and Helm pipelines that shrink deployment cycles to under three hours.",
  },
  {
    id: 6,
    icon: <FaShieldAlt />,
    title: "Governance & Monitoring",
    des: "Implementing SHAP-driven explainability, drift/skew monitoring, IAM/RBAC guardrails, and Prometheus/Grafana observability runbooks.",
  },
];
