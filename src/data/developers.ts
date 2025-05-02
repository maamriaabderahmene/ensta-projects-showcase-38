
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
    bio: "Led the development of the user interface and responsive design of the PrepaNova showcase website.",
    image: "/lovable-uploads/95939a6e-214c-4c89-a838-b0478b864eeb.png"
  },
  {
    name: "NACERI RIM SERINE",
    role: "UI/UX Designer",
    bio: "Created the visual design, user flows, and interactive elements of the PrepaNova showcase website.",
    image: "/lovable-uploads/f87283e5-19ad-4fa8-9868-f7bc185c3d78.png"
  },
  {
    name: "SAICHE OUSSAMA",
    role: "Frontend Developer",
    bio: "Led the development of the user interface and responsive design of the PrepaNova showcase website.",
    image: "/lovable-uploads/062f7205-ee8f-45c6-8f33-0ab1ae45de6d.png"
  },
  {
    name: "HARIZIZI ROUNEK NOUR EL YAKINE",
    role: "UI/UX Designer",
    bio: "Created the visual design, user flows, and interactive elements of the PrepaNova showcase website.",
    image: "/lovable-uploads/49ba3436-189a-451e-8698-5eccff8da794.png"
  },
  {
    name: "HADJ SOUNDOUS",
    role: "Project Manager & QA",
    bio: "Coordinated the development process and ensured quality standards for the PrepaNova showcase website.",
    image: "/lovable-uploads/2943ad0f-8c2c-4e02-8494-2cd1bce674d8.png"
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
