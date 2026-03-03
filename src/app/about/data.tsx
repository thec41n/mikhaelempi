import {
  SiPhp,
  SiJavascript,
  SiGo,
  SiPython,
  SiLaravel,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiMongodb,
  SiGithub,
  SiGooglecloud,
  SiDocker,
  SiPostman,
  SiRabbitmq,
  SiJira,
  SiConfluence,
  SiTrello,
  SiVmware,
} from "react-icons/si";
import { FaJava, FaServer, FaPlay } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

export const educationData = [
  {
    institution: "Universitas Gunadarma",
    year: "Sep 2021 - Sep 2025",
    title: "Bachelor's degree, Informatics",
    points: [
      "Bridging the gap between academic excellence and enterprise-level software engineering.",
      "Active in Gunadarma I/O and Cyber Community.",
      "Graduated with Distinction (Top 10%) from Bangkit Academy 2024.",
    ],
  },
  {
    institution: "SMAN 9 Depok",
    year: "Jul 2016 - Aug 2019",
    title: "Mathematics and Natural Science",
    points: [
      "Focused on exact sciences to build a strong logical foundation.",
      "Prepared foundational knowledge for Computer Science.",
    ],
  },
];

export const experienceData = [
  {
    institution: "PT HiThink Technology Indonesia",
    year: "Jul 2025 - Present",
    title: "Software Engineer",
    points: [
      "Engineered mission-critical backend services for Japanese government systems (Tax & Fire Dept).",
      "Configured and deployed development environments on Windows Server utilizing VMware.",
      "Pursued Japanese language proficiency (N5-N3) for direct client collaboration.",
    ],
  },
  {
    institution: "Syntera Innovations",
    year: "Oct 2024 - Present",
    title: "Co-Founder",
    points: [
      "Leading technical initiatives and business development strategies.",
      "Building innovative digital solutions from the ground up.",
    ],
  },
  {
    institution: "Asah led by Dicoding",
    year: "Aug 2025 - Jan 2026",
    title: "React & Back End AI Mentor",
    points: [
      "Mentored 480 students with an ~85% success rate.",
      "Achieved 'Best Mentor' on Bi-Weekly #1 with a 4.80/5.0 satisfaction rating.",
      "Fostered collaborative learning environments through 1:1 sessions and community management.",
    ],
  },
  {
    institution: "Telkom Indonesia",
    year: "Jul 2023 - Jan 2025",
    title: "Developer & Digistar Icon",
    points: [
      "Developed SPSE application back-end using Java and Play Framework.",
      "Migrated SPSE applications and databases to Google Cloud Platform.",
      "Achieved top 10 best mentees out of 500 in Digistar Class 2023.",
    ],
  },
  {
    institution: "Bangkit Academy",
    year: "Feb 2024 - Jul 2024",
    title: "Cloud Computing Cohort",
    points: [
      "Ranked in the top 10% of mentees and graduated with Distinction.",
      "Engineered scalable cloud solutions utilizing GCP services (Compute Engine, Cloud Storage).",
      "Led a 7-member team to develop a real-world cloud project.",
    ],
  },
  {
    institution: "ABN CENTER",
    year: "Dec 2023 - Feb 2024",
    title: "Back-End Web Developer",
    points: [
      "Architected a full-stack voter data management solution for KPU Jakarta Timur.",
      "Utilized Laravel 10 and Bootstrap 5.2.3.",
      "Reduced system downtime by 25% during critical election periods.",
    ],
  },
];

export const techStack = [
  { name: "PHP", icon: <SiPhp />, color: "hover:text-[#777BB4]" },
  { name: "JavaScript", icon: <SiJavascript />, color: "hover:text-[#F7DF1E]" },
  { name: "SQL", icon: <SiPostgresql />, color: "hover:text-[#4169E1]" },
  { name: "Java", icon: <FaJava />, color: "hover:text-[#007396]" },
  { name: "Go", icon: <SiGo />, color: "hover:text-[#00ADD8]" },
  { name: "Python", icon: <SiPython />, color: "hover:text-[#3776AB]" },

  // --- Frameworks & Libraries ---
  { name: "Laravel", icon: <SiLaravel />, color: "hover:text-[#FF2D20]" },
  { name: "React / Native", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "hover:text-[#339933]" },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    color: "hover:text-[#6DB33F]",
  },
  { name: "Play Framework", icon: <FaPlay />, color: "hover:text-[#ea2845]" },

  // --- Databases ---
  { name: "MySQL", icon: <SiMysql />, color: "hover:text-[#4479A1]" },
  { name: "SQL Server", icon: <DiMsqlServer />, color: "hover:text-[#CC292B]" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "hover:text-[#4169E1]" },
  { name: "Redis", icon: <SiRedis />, color: "hover:text-[#DC382D]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "hover:text-[#47A248]" },

  // --- Cloud & DevOps ---
  {
    name: "Git / GitHub",
    icon: <SiGithub />,
    color: "hover:text-gray-800 dark:hover:text-white",
  },
  { name: "GCP", icon: <SiGooglecloud />, color: "hover:text-[#4285F4]" },
  { name: "Docker", icon: <SiDocker />, color: "hover:text-[#2496ED]" },
  {
    name: "Cloud Run & Compute",
    icon: <FaServer />,
    color: "hover:text-[#FCC624]",
  },

  // --- Tools ---
  { name: "Postman", icon: <SiPostman />, color: "hover:text-[#FF6C37]" },
  { name: "RabbitMQ", icon: <SiRabbitmq />, color: "hover:text-[#FF6600]" },
  { name: "Jira", icon: <SiJira />, color: "hover:text-[#0052CC]" },
  { name: "Confluence", icon: <SiConfluence />, color: "hover:text-[#172B4D]" },
  { name: "Trello", icon: <SiTrello />, color: "hover:text-[#0052CC]" },
  { name: "ESXi", icon: <SiVmware />, color: "hover:text-[#607078]" },
];
