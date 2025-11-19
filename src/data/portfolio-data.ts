import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 'anduril-lattice',
    title: 'Anduril Lattice Sensor Data Integration Service',
    description: 'Modular Python service with multi-sensor simulation and REST API connectivity',
    category: 'Systems',
    technologies: ['Python', 'REST API', 'YAML', 'pytest', 'mypy'],
    highlights: [
      'Developed modular python service using mock Anduril lattice SDK',
      'Implemented core simulation engine with entity models and 5 movement patterns',
      'Professional development practices with mypy type-checking and pytest',
      'Demonstrated sensor fusion architectures and real-time telemetry data ingestion'
    ]
  },
  {
    id: 'embedcore',
    title: 'EmbedCore - Embedded Systems Middleware Framework',
    description: 'Cross-language embedded middleware combining C++ HAL with Rust application framework',
    category: 'Systems',
    technologies: ['Rust', 'C++', 'Embedded Systems', 'Robotics'],
    highlights: [
      'Designed cross-language embedded middleware system for robotics motor control',
      'Implemented zero-cost abstractions in Rust wrapping unsafe C++ HAL primitives',
      'Achieved type-safe motor control with compile-time bounds checking',
      'Panic-free error handling for critical embedded systems'
    ]
  },
  {
    id: 'tenable-ai',
    title: 'Tenable AI Hackathon Project',
    description: 'Automated evaluation pipeline for Mistral AI performance assessment',
    category: 'AI/ML',
    technologies: ['Python', 'LangChain', 'Mistral AI', 'ROUGE'],
    highlights: [
      'Built automated evaluation pipeline for proprietary AI assessment',
      'Implemented custom metrics: ROUGE, semantic similarity, hallucination detection',
      'Integrated model into data pipeline with automated retraining',
      'Measured model reliability for threat intelligence reporting'
    ]
  },
  {
    id: 'etl-pipelines',
    title: 'Microservices-Based ETL Pipelines',
    description: 'High-volume data processing system for real-time analytics at Tenable',
    category: 'Data Engineering',
    technologies: ['Python', 'Microservices', 'ETL', 'AWS', 'Docker'],
    highlights: [
      'Designed and optimized ETL pipelines processing high-volume datasets',
      'Built robust data systems for operational intelligence',
      'Implemented data governance frameworks ensuring integrity and compliance',
      'Developed predictive ML models for anomaly detection and forecasting'
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 'tenable-de',
    company: 'Tenable',
    role: 'Data Engineer Intern',
    location: 'Columbia, MD',
    period: 'May 2024 – Aug 2024',
    type: 'work',
    description: [
      'Designed and optimized microservices-based ETL pipelines processing high-volume datasets for real-time analytics',
      'Partnered with stakeholders to deploy AI solutions in mission-critical production environments',
      'Built robust data systems to process and analyze high-volume datasets for operational intelligence',
      'Implemented data governance frameworks and quality controls ensuring data integrity across production systems',
      'Developed and deployed predictive ML models for anomaly detection, pattern recognition, and forecasting'
    ]
  },
  {
    id: 'tenable-swe',
    company: 'Tenable',
    role: 'Software Engineer Intern',
    location: 'Columbia, MD',
    period: 'May 2023 – Aug 2023',
    type: 'work',
    description: [
      'Developed backend automation tools using enterprise frameworks to streamline critical business processes',
      'Built and optimized internal tools for running batch marketing campaigns, increasing deployment speed',
      'Developed notification systems (email, push, in-app) improving delivery efficiency',
      'Leveraged technical expertise to explain product functionalities, fostering trust and driving upsell opportunities'
    ]
  },
  {
    id: 'umd-tse',
    company: 'University of Maryland',
    role: 'Technical Support Engineer',
    location: 'College Park, MD',
    period: 'Aug 2023 – May 2025',
    type: 'work',
    description: [
      'Resolved frequent system issues in engineering labs by implementing streamlined troubleshooting workflows',
      'Configured and maintained lab computers and network resources',
      'Developed user-friendly support guides, leading to higher satisfaction across technical classrooms'
    ]
  },
  {
    id: 'gatech',
    company: 'Georgia Institute of Technology',
    role: 'M.Sc. in Computer Science',
    location: 'Online',
    period: '2026 – 2028',
    type: 'education',
    description: [
      'Specialization in Artificial Intelligence',
      'Advanced coursework in machine learning, deep learning, and AI systems'
    ]
  },
  {
    id: 'umd',
    company: 'University of Maryland, College Park',
    role: 'B.Sc. in Information Science',
    location: 'College Park, MD',
    period: 'Aug 2022 – May 2025',
    type: 'education',
    description: [
      'Specialization in Cloud & Backend Development',
      'Dean\'s List: 2023 & 2024'
    ]
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    icon: 'Code2',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Rust', 'C++', 'Go', 'SQL', 'R']
  },
  {
    category: 'AI/ML & Generative AI',
    icon: 'Brain',
    items: ['OpenAI API', 'LLM Fine-Tuning', 'RAG', 'Pinecone', 'Weaviate', 'LangChain', 'PyTorch']
  },
  {
    category: 'Backend & Cloud',
    icon: 'Server',
    items: ['Node.js', 'Docker', 'Kubernetes', 'AWS', 'Microservices', 'ETL Pipelines']
  },
  {
    category: 'Data Engineering',
    icon: 'Database',
    items: ['SQL Optimization', 'Data Pipelines', 'Real-time Analytics', 'Data Governance']
  },
  {
    category: 'Tools & DevOps',
    icon: 'Wrench',
    items: ['Git', 'pytest', 'mypy', 'CI/CD', 'REST APIs', 'YAML']
  },
  {
    category: 'Security & Compliance',
    icon: 'Shield',
    items: ['Risk Analysis', 'Secure Data Pipelines', 'Data Integrity', 'Compliance Frameworks']
  }
];
