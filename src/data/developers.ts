
export interface Developer {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const websiteDevelopers: Developer[] = [
  {
    name: "MAAMRIA ABDERAHMENE",
    role: "Frontend Developer",
    bio: "Led the development of the user interface and responsive design of the PrepaNova showcase website."
  },
  {
    name: "SAICHE OUSSAMA",
    role: "Backend Developer",
    bio: "Managed the data structures and API integrations for the PrepaNova showcase website."
  },
  {
    name: "NACERI RIM SERINE",
    role: "UI/UX Designer",
    bio: "Created the visual design, user flows, and interactive elements of the PrepaNova showcase website."
  },
  {
    name: "HARIZIZI ROUNEK NOUR EL YAKINE",
    role: "Full-Stack Developer",
    bio: "Implemented both frontend and backend features, ensuring cohesive functionality throughout the website."
  },
  {
    name: "HADJ SOUNDOUS",
    role: "Project Manager & QA",
    bio: "Coordinated the development process and ensured quality standards for the PrepaNova showcase website."
  }
];

export const supervisor = {
  name: "El Hadi Khoumeri",
  title: "Professor & Project Supervisor",
  bio: "Professor El Hadi Khoumeri is an experienced educator and researcher in the field of computer science at the École Nationale des Technologies Avancées. With a background in software engineering and computational systems, he brings valuable insights to guide students through their practical projects. Professor Khoumeri specializes in applied informatics and has supervised numerous successful student initiatives. His teaching philosophy emphasizes practical application of theoretical knowledge and collaborative problem-solving.",
  contact: {
    email: "el-hadi.khoumeri@ensta.edu",
    linkedin: "linkedin.com/in/elhadikhoumeri"
  }
};

export const departmentInfo = {
  name: "Département de Base en Informatique (DFI)",
  shortDescription: "The foundation department for computer science education at ENSTA.",
  mission: "To provide students with a solid foundation in computer science principles and practices, preparing them for advanced studies and professional careers in technology fields.",
  vision: "To be a center of excellence for introductory computer science education, fostering innovation, critical thinking, and practical skills development.",
  focus: [
    "Programming fundamentals and software development",
    "Data structures and algorithms",
    "Database systems and management",
    "Web and mobile application development",
    "Introduction to artificial intelligence and machine learning",
    "Computer networks and security basics"
  ]
};
