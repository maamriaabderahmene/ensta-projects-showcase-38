
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  developers: string[];
  supervisor: string;
  technologies: string[];
  department: string;
  github: string;
  demo: string;
  date: string;
  logo?: string; // Adding logo property
}

export const projects: Project[] = [
  {
    id: "smartstock",
    title: "SmartStock",
    description: "An intelligent warehouse management system for optimizing storage operations through smart zone management and real-time tracking.",
    image: "public/lovable-uploads/d9f2930c-5783-4c90-b93b-a5a50c5e14c2.png",
    developers: ["john-doe", "jane-smith"],
    supervisor: "prof-alan",
    technologies: ["react", "nodejs", "mongodb"],
    department: "computer-science",
    github: "https://github.com/ensta/smartstock",
    demo: "/projects/smartstock",
    date: "2025-04-15",
    logo: "public/lovable-uploads/756d8ce4-6740-474f-b98a-8386342fb051.png",
  },
  {
    id: "amanah",
    title: "Amanah - أمــانة",
    description: "A web-based platform designed to simplify the process of reporting, searching for, and managing lost and found items across Algeria.",
    image: "public/lovable-uploads/e922d9b5-99a4-493f-8e1e-d3acc7c2530b.png",
    developers: ["saci-zhour", "jazia-abdelkrim", "djebir-raounek", "zeddoun-aya", "arzim-sara"],
    supervisor: "prof-alan",
    technologies: ["react", "typescript", "node-js"],
    department: "computer-science",
    github: "https://github.com/ensta/amanah",
    demo: "/projects/amanah",
    date: "2025-03-15",
    logo: "public/lovable-uploads/336bd2bc-817d-4dc5-8cb6-32e67919ed4a.png",
  },
  {
    id: "nova-scheduler",
    title: "Nova Scheduler",
    description: "An advanced scheduling application designed to streamline and optimize the allocation of resources.",
    image: "/lovable-uploads/306f76cc-9b44-41af-b8e8-7ba4f602221f.png",
    developers: ["alice-johnson", "bob-williams"],
    supervisor: "dr-emma-brown",
    technologies: ["react", "typescript", "node-js"],
    department: "software-engineering",
    github: "https://github.com/ensta/nova-scheduler",
    demo: "https://nova-scheduler.example.com",
    date: "2024-03-01",
  },
  {
    id: "eco-monitor",
    title: "Eco Monitor",
    description: "A comprehensive environmental monitoring system that tracks pollution levels and promotes ecological awareness.",
    image: "/lovable-uploads/2943ad0f-8c2c-4e02-8494-2cd1bce674d8.png",
    developers: ["carl-david", "diana-lee"],
    supervisor: "prof-samuel-green",
    technologies: ["python", "django", "postgresql"],
    department: "environmental-science",
    github: "https://github.com/ensta/eco-monitor",
    demo: "https://eco-monitor.example.com",
    date: "2024-02-15",
  },
  {
    id: "health-track",
    title: "Health Track",
    description: "A personal health tracking application that helps users monitor their fitness and wellness metrics.",
    image: "/lovable-uploads/062f7205-ee8f-45c6-8f33-0ab1ae45de6d.png",
    developers: ["eve-martinez", "frank-nguyen"],
    supervisor: "dr-olivia-white",
    technologies: ["react-native", "firebase"],
    department: "health-informatics",
    github: "https://github.com/ensta/health-track",
    demo: "https://health-track.example.com",
    date: "2024-01-10",
  },
];

export default projects;
