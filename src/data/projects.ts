
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
    id: "14",
    title: "Hamini",
    description: "Hamini is a legal services platform connecting clients with verified lawyers. It offers AI-powered legal assistance, streamlined consultation booking, and a seamless client-lawyer interaction experience to make legal help more accessible and convenient.",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/6d71684d-2d3d-4965-8a70-9f35b17f19f9.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Gemini AI"],
    url: "/hamini",
    github: "https://github.com/ensta/hamini",
    supervisor: "Dr. Mohammed Amine"
  },
  {
    id: "13",
    title: "CodeBattle",
    description: "CodeBattle est une application mobile éducative qui aide les étudiants à apprendre la programmation en résolvant des défis interactifs. Elle propose une interface simple, un système de messagerie en temps réel, et un espace enseignant pour suivre la progression des élèves.",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/e881429c-58e8-4f91-b644-3308f6145662.png",
    tech: ["React Native", "Firebase", "Node.js", "Express"],
    url: "/codebattle",
    github: "https://github.com/ensta/codebattle",
    supervisor: "Dr. Mohammed Amine"
  },
  {
    id: "12",
    title: "UniVibe",
    description: "UniVibe is a dynamic and evolving platform designed to help university students seamlessly manage both academic and social aspects of campus life. By centralizing essential tools and services, UniVibe simplifies daily student interactions, enhances engagement, and improves organization.",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/79a03f01-893b-4a4f-a7c4-9d5d8986d8ca.png",
    tech: ["Qt QML", "HTML/CSS/JavaScript", "Qt/C++", "FastAPI", "MySQL", "Azure"],
    url: "/univibe",
    github: "https://github.com/ensta/univibe",
    supervisor: "Dr. Mohammed Amine"
  },
  {
    id: "11",
    title: "RIGUELNI",
    description: "RIGUELNI is a modern platform that helps freelancers and businesses connect easily, bringing together talented professionals and companies looking for services in one simple place with user-friendly tools.",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/95d15c38-7868-4506-a7f3-e153c1313779.png",
    tech: ["React", "Node.js", "PostgreSQL", "React Native", "Django"],
    url: "/riguelni",
    github: "https://github.com/ensta/riguelni",
    supervisor: "Dr. Mohammed Amine"
  },
  {
    id: "10",
    title: "LabSync",
    description: "LabSync is a lab management system designed to streamline the organization and tracking of laboratory resources within an academic or research environment. It enables administrators to manage equipment inventory, monitor loan history, and organize lab rooms efficiently. With features like real-time updates, editable records, and user-friendly interfaces, LabSync ensures better coordination and accountability in lab usage. The system aims to reduce manual errors, enhance resource availability, and support smooth operation of laboratory activities.",
    image: "/placeholder.svg",
    logo: "/lovable-uploads/98eefbe3-f5ae-4dce-8dcd-1eae6cccd847.png",
    tech: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    url: "/projects/labsync",
    github: "https://github.com/ensta/labsync",
    supervisor: "BOUDDISA Farouk Redouane",
    teamMembers: [
      { name: "FERRAT Ilham", role: "Developer" },
      { name: "DJEBOURI Lynda", role: "Developer" },
      { name: "KHEDRI Manel", role: "Developer" },
      { name: "MEZAACHE Abdessamie", role: "Developer" }
    ]
  },
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
    logo: "/lovable-uploads/d67f08ee-6b2a-436d-9ab6-8672fe315a10.png",
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
    logo: "/lovable-uploads/982e0d7c-1194-4c52-8306-099d2a69a3af.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    url: "/projects/unihub",
    github: "https://github.com/ensta/unihub",
    supervisor: "Dr. Aisha Mahmood",
  },
  {
    id: "7",
    title: "Avrid Together",
    description: "Avrid Together est une application mobile de covoiturage permettant aux utilisateurs de choisir un trajet, consulter les avis sur les conducteurs et sécuriser leur trajet grâce à un système de QR codes.",
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
