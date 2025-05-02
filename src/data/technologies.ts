
export interface TechCategory {
  title: string;
  description: string;
  tools: string[];
}

export const technologies: TechCategory[] = [
  {
    title: "Frontend Development",
    description: "Modern frameworks and libraries for building responsive, interactive user interfaces.",
    tools: ["React", "Vue.js", "Angular", "Next.js", "Tailwind CSS", "Bootstrap", "TypeScript"]
  },
  {
    title: "Backend Development",
    description: "Server-side technologies for building scalable, secure APIs and services.",
    tools: ["Node.js", "Express", "Django", "Spring Boot", "Flask", "FastAPI", "Ruby on Rails"]
  },
  {
    title: "Databases",
    description: "Storage solutions for structured and unstructured data.",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Firestore", "Supabase"]
  },
  {
    title: "Development Tools",
    description: "Code editors and IDEs that enhance productivity and code quality.",
    tools: ["Visual Studio Code", "JetBrains Suite", "Sublime Text", "Atom", "Vim", "Eclipse", "Xcode"]
  },
  {
    title: "Version Control",
    description: "Tools for tracking changes and collaborating on code bases.",
    tools: ["Git", "GitHub", "GitLab", "Bitbucket", "GitHub Actions", "GitLab CI/CD", "Husky"]
  },
  {
    title: "Design Tools",
    description: "Software for creating user interfaces, graphics, and prototypes.",
    tools: ["Figma", "Adobe XD", "Sketch", "Adobe Photoshop", "Adobe Illustrator", "Canva", "Zeplin"]
  },
  {
    title: "Mobile Development",
    description: "Frameworks for building native and cross-platform mobile applications.",
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic", "Capacitor"]
  },
  {
    title: "DevOps & Cloud",
    description: "Tools and platforms for deployment, monitoring, and infrastructure management.",
    tools: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "Netlify", "Vercel"]
  }
];
