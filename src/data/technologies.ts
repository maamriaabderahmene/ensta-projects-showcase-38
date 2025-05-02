
export interface Tool {
  name: string;
  logo?: string;
}

export interface TechCategory {
  title: string;
  description: string;
  tools: Tool[];
}

export const technologies: TechCategory[] = [
  {
    title: "Frontend Development",
    description: "Modern frameworks and libraries for building responsive, interactive user interfaces.",
    tools: [
      { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
      { name: "Angular", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
      { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
      { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" }
    ]
  },
  {
    title: "Backend Development",
    description: "Server-side technologies for building scalable, secure APIs and services.",
    tools: [
      { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
      { name: "Express", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
      { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
      { name: "Spring Boot", logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
      { name: "Flask", logo: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
      { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" }
    ]
  },
  {
    title: "Databases",
    description: "Storage solutions for structured and unstructured data.",
    tools: [
      { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg" },
      { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
      { name: "Redis", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
      { name: "SQLite", logo: "https://cdn.worldvectorlogo.com/logos/sqlite.svg" },
      { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" }
    ]
  },
  {
    title: "Development Tools",
    description: "Code editors and IDEs that enhance productivity and code quality.",
    tools: [
      { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
      { name: "JetBrains", logo: "https://cdn.worldvectorlogo.com/logos/jetbrains-1.svg" },
      { name: "Sublime", logo: "https://cdn.worldvectorlogo.com/logos/sublime-text.svg" },
      { name: "Atom", logo: "https://cdn.worldvectorlogo.com/logos/atom-4.svg" },
      { name: "Vim", logo: "https://cdn.worldvectorlogo.com/logos/vim.svg" },
      { name: "Eclipse", logo: "https://cdn.worldvectorlogo.com/logos/eclipse-11.svg" }
    ]
  },
  {
    title: "Version Control",
    description: "Tools for tracking changes and collaborating on code bases.",
    tools: [
      { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
      { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
      { name: "GitLab", logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg" },
      { name: "Bitbucket", logo: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg" },
      { name: "GitHub Actions", logo: "https://cdn.worldvectorlogo.com/logos/github-actions-1.svg" },
      { name: "Husky", logo: "https://cdn.worldvectorlogo.com/logos/husky-5.svg" }
    ]
  },
  {
    title: "Design Tools",
    description: "Software for creating user interfaces, graphics, and prototypes.",
    tools: [
      { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
      { name: "Adobe XD", logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" },
      { name: "Sketch", logo: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" },
      { name: "Photoshop", logo: "https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg" },
      { name: "Illustrator", logo: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-2019.svg" },
      { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }
    ]
  },
  {
    title: "Mobile Development",
    description: "Frameworks for building native and cross-platform mobile applications.",
    tools: [
      { name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
      { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
      { name: "Swift", logo: "https://cdn.worldvectorlogo.com/logos/swift-15.svg" },
      { name: "Kotlin", logo: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" },
      { name: "Ionic", logo: "https://cdn.worldvectorlogo.com/logos/ionic-1.svg" },
      { name: "Capacitor", logo: "https://cdn.worldvectorlogo.com/logos/capacitor-logo.svg" }
    ]
  },
  {
    title: "DevOps & Cloud",
    description: "Tools and platforms for deployment, monitoring, and infrastructure management.",
    tools: [
      { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg" },
      { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
      { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
      { name: "Azure", logo: "https://cdn.worldvectorlogo.com/logos/azure-1.svg" },
      { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" }
    ]
  }
];
