
export interface Developer {
  name: string;
  role?: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  logo?: string;
  images?: string[];
  figmaUrl?: string;
  developers: Developer[];
}

// Placeholder data - would be replaced with real project data
export const projects: Project[] = [
  {
    id: "reservili",
    title: "Reservili",
    shortDescription: "Smart reservation system for university resources",
    fullDescription: "Reservili is an innovative platform designed to streamline the process of reserving university resources such as laboratories, equipment, and study rooms. The system provides real-time availability updates, automated confirmations, and analytics for resource utilization.",
    logo: "/lovable-uploads/5a38ff68-a876-4ead-8176-6e6c67964f4d.png", // Using the event poster as placeholder
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "unihub",
    title: "UniHub",
    shortDescription: "Centralized platform connecting students, professors, and resources",
    fullDescription: "UniHub serves as a comprehensive digital ecosystem for university communities, bridging the gap between students, professors, and educational resources. The platform features personalized dashboards, course materials, discussion forums, and event scheduling.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "codemart",
    title: "CodeMart",
    shortDescription: "Online marketplace for student programming projects",
    fullDescription: "CodeMart is an innovative marketplace where students can showcase their programming projects, receive feedback from peers and industry professionals, and even monetize their work. The platform includes features for code review, version control integration, and collaborative development.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "studyai",
    title: "StudyAI",
    shortDescription: "AI-powered study assistant for personalized learning",
    fullDescription: "StudyAI harnesses the power of artificial intelligence to create personalized learning experiences for students. The application analyzes learning patterns, identifies knowledge gaps, and generates customized study materials and quizzes to enhance comprehension and retention.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "campusmap",
    title: "CampusMap",
    shortDescription: "Interactive 3D navigation system for university campus",
    fullDescription: "CampusMap is an innovative 3D navigation system designed to help students, staff, and visitors find their way around the university campus with ease. The application features detailed building interiors, real-time crowd density information, and the shortest path calculations between locations.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "meetlab",
    title: "MeetLab",
    shortDescription: "Virtual laboratory for remote scientific experimentation",
    fullDescription: "MeetLab provides a virtual environment where students can conduct scientific experiments remotely. The platform simulates real laboratory conditions, allows for collaborative research, and includes features for data collection, analysis, and report generation.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "gradtracker",
    title: "GradTracker",
    shortDescription: "Comprehensive progress tracking system for academic goals",
    fullDescription: "GradTracker helps students plan and monitor their academic journey through university. The system provides visualization tools for degree progress, grade analysis, course planning assistance, and integration with university systems for real-time data updates.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "bookbuddy",
    title: "BookBuddy",
    shortDescription: "Textbook exchange and sharing platform for students",
    fullDescription: "BookBuddy is a peer-to-peer platform that allows students to buy, sell, rent, or exchange textbooks. The application includes features for price comparison, condition verification, campus meetup coordination, and digital textbook access where available.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "ecolearn",
    title: "EcoLearn",
    shortDescription: "Gamified sustainability education platform",
    fullDescription: "EcoLearn makes sustainability education engaging through gamification. Students complete challenges related to environmental conservation, earn points for sustainable actions, and track their personal and collective impact on campus ecological footprint.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "healthtracker",
    title: "HealthTracker",
    shortDescription: "Wellness monitoring and mental health support for students",
    fullDescription: "HealthTracker is focused on student wellbeing, providing tools to monitor physical activity, sleep patterns, stress levels, and mental health. The application includes features for anonymous counseling connections, meditation guides, and health resource scheduling.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "codecoach",
    title: "CodeCoach",
    shortDescription: "Peer-to-peer programming tutoring and collaboration",
    fullDescription: "CodeCoach connects students who need assistance with programming assignments to peers who have mastered those concepts. The platform features live code sharing, video tutoring, scheduling tools, and endorsement systems to recognize helpful contributors.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "eventpulse",
    title: "EventPulse",
    shortDescription: "Real-time campus events discovery and RSVP system",
    fullDescription: "EventPulse helps students discover and engage with events happening across campus in real-time. The application provides personalized recommendations based on interests, friend activities, and academic focus, along with RSVP features and event check-ins.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "researchconnect",
    title: "ResearchConnect",
    shortDescription: "Platform linking students with research opportunities",
    fullDescription: "ResearchConnect bridges the gap between professors seeking research assistants and students looking for research experience. The platform matches students based on skills, interests, and availability, while providing tools for application management and research project tracking.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  },
  {
    id: "skillforge",
    title: "SkillForge",
    shortDescription: "Skill development and portfolio showcasing platform",
    fullDescription: "SkillForge helps students develop and showcase their professional skills through guided learning paths, project challenges, and portfolio building. The platform integrates with industry certification programs and includes features for peer feedback and employer visibility.",
    developers: [
      { name: "Student One", role: "Frontend Developer" },
      { name: "Student Two", role: "Backend Developer" },
      { name: "Student Three", role: "UI/UX Designer" },
      { name: "Student Four", role: "Database Engineer" },
      { name: "Student Five", role: "Project Manager" }
    ]
  }
];
