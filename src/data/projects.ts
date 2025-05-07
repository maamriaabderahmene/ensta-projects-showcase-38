
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
    id: "courspace",
    title: "CourSpace",
    description: "A mobile application developed to address educational accessibility challenges in Algeria, connecting learners with a wide variety of courses.",
    image: "public/lovable-uploads/f8c3362d-03d0-4a07-981b-71c05598c570.png",
    developers: ["falek-wail", "djediai-lina", "boutria-manel", "kaddour-abdelmalek-islam"],
    supervisor: "bouterbag-amal",
    technologies: ["flutter", "firebase", "android"],
    department: "mobile-development",
    github: "https://github.com/ensta/courspace",
    demo: "/projects/courspace",
    date: "2025-03-01",
    logo: "public/lovable-uploads/12e4538c-e0a0-49ff-ae78-3e0cddc16e96.png",
  },
];

export default projects;
