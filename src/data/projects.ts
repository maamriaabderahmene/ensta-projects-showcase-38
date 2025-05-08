export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  tech: string[];
  url: string;
  github: string;
  supervisor: string;
  teamMembers?: TeamMember[]; // Add teamMembers as optional property
}

export interface TeamMember {
  name: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "9",
    title: "Little Quest",
    description: "\"LITTLE QUEST\" is a pixel 2D game made for Multidisciplinary Project by GROUP-11. It is a simple single-player game that tells adventures of a nameless character fighting enemies and bosses in a fantasy world full of different difficulties and challenges.",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/ab9aae4c-6aa5-4d4d-8376-972baf1bf41e.png",
    tech: ["Godot 4.3", "GDScript", "HTML", "CSS", "JavaScript", "Aseprite"],
    url: "/projects/littlequest",
    github: "https://github.com/ensta/littlequest",
    supervisor: "BENCHENINA Souhaib Meheni",
    teamMembers: [
      { name: "BRAHMI Abbas", role: "Developer" },
      { name: "LAMRIA Mahmoud Noureddine", role: "Developer" },
      { name: "AIT SAID Mehdi", role: "Developer" },
      { name: "HAMADI Imededdine", role: "Developer" }
    ]
  },
  {
    id: "1",
    title: "Amanah",
    description: "A comprehensive financial management application for Muslim users, offering Shariah-compliant financial services, investment tracking, and budgeting tools",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/336bd2bc-817d-4dc5-8cb6-32e67919ed4a.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
    url: "/projects/amanah",
    github: "https://github.com/ensta/amanah",
    supervisor: "Dr. Tariq Abdullah",
  },
  {
    id: "2",
    title: "CourSpace",
    description: "A collaborative learning platform designed for university students to share resources, form study groups, and track academic progress",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/12e4538c-e0a0-49ff-ae78-3e0cddc16e96.png",
    tech: ["React", "Firebase", "Tailwind CSS", "Next.js"],
    url: "/projects/courspace",
    github: "https://github.com/ensta/courspace",
    supervisor: "Prof. Laila Hameed",
  },
  {
    id: "3",
    title: "SmartStock",
    description: "An inventory management system with AI-powered demand forecasting for small to medium-sized businesses",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/756d8ce4-6740-474f-b98a-8386342fb051.png",
    tech: ["Vue.js", "Python", "TensorFlow", "PostgreSQL", "FastAPI"],
    url: "/projects/smartstock",
    github: "https://github.com/ensta/smartstock",
    supervisor: "Dr. Nasser Al-Awadhi",
  },
  {
    id: "4",
    title: "MedApp",
    description: "A telemedicine application connecting patients with healthcare providers for remote consultations and medication management",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/0a13b633-f6dc-48b0-bc6a-d56db65d139f.png",
    tech: ["React Native", "Express", "MongoDB", "Socket.io", "AWS"],
    url: "/projects/medapp",
    github: "https://github.com/ensta/medapp",
    supervisor: "Dr. Fatima Al-Zahraa",
  },
  {
    id: "5",
    title: "Bayti",
    description: "A smart home automation solution integrating IoT devices for energy efficiency and home security",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/f6ac1659-da76-4a61-857d-705092086ed6.png",
    tech: ["Arduino", "Raspberry Pi", "MQTT", "Node.js", "React"],
    url: "/projects/bayti",
    github: "https://github.com/ensta/bayti",
    supervisor: "Prof. Omar Al-Saeed",
  },
  {
    id: "6",
    title: "UniHub",
    description: "A centralized platform for university events, club activities, and campus services",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/7fd7907e-47ba-42cb-98c0-239484c9989a.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    url: "/projects/unihub",
    github: "https://github.com/ensta/unihub",
    supervisor: "Dr. Aisha Mahmood",
  },
  {
    id: "7",
    title: "Avrid",
    description: "An augmented reality application for interactive educational content in science and engineering courses",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/d5e2052d-fa52-44dd-a078-d7610ace03dc.png",
    tech: ["Unity", "C#", "ARKit", "ARCore", "Vuforia"],
    url: "/projects/avrid",
    github: "https://github.com/ensta/avrid",
    supervisor: "Dr. Mohammed Al-Fahad",
  },
  {
    id: "8",
    title: "Reservili",
    description: "A booking and reservation system for restaurants and cafes with real-time availability updates",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/7264c4e6-d13f-4d57-9b70-39b5f50160d2.png",
    tech: ["React", "Node.js", "PostgreSQL", "GraphQL", "Stripe API"],
    url: "/projects/reservili",
    github: "https://github.com/ensta/reservili",
    supervisor: "Prof. Khalid Al-Mansour",
  },
];

export default projects;
