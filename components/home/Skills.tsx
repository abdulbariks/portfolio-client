"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Workflow,
  Server,
  Database,
  Shield,
  Radio,
  Container,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Ecosystem",
    icon: <Code2 className="size-6" />,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
    ],
    color: "text-blue-500",
  },
  {
    title: "State & Data Layer",
    icon: <Workflow className="size-6" />,
    technologies: ["Redux Toolkit", "RTK Query", "Axios"],
    color: "text-purple-500",
  },
  {
    title: "Backend & APIs",
    icon: <Server className="size-6" />,
    technologies: ["NestJS", "Node.js", "REST API", "WebSockets"],
    color: "text-green-500",
  },
  {
    title: "Database & Cache",
    icon: <Database className="size-6" />,
    technologies: ["PostgreSQL", "Prisma", "Redis"],
    color: "text-orange-500",
  },
  {
    title: "Authentication & Security",
    icon: <Shield className="size-6" />,
    technologies: ["JWT", "OAuth", "RBAC", "Better-Auth"],
    color: "text-red-500",
  },
  {
    title: "Real-Time Communication",
    icon: <Radio className="size-6" />,
    technologies: ["Socket.IO", "WebRTC", "LiveKit"],
    color: "text-cyan-500",
  },
  {
    title: "DevOps & Deployment",
    icon: <Container className="size-6" />,
    technologies: [
      "Docker",
      "GitHub Actions",
      "Linux",
      "Nginx",
      "Vercel",
      "AWS",
    ],
    color: "text-emerald-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 px-6 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              Skills
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and
              high-performance applications
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  type: "spring" as const,
                  stiffness: 400,
                  damping: 25,
                },
              }}
              className="group relative flex flex-col rounded-2xl border border-accent bg-background/60 backdrop-blur-sm p-6 cursor-grab active:cursor-grabbing transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <motion.div
                className="flex items-center gap-3 mb-4"
                whileHover={{ x: 4 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
              >
                <div
                  className={`shrink-0 size-12 rounded-xl bg-accent/80 flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold leading-tight">
                  {category.title}
                </h3>
              </motion.div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.technologies.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="rounded-full text-xs font-medium hover:bg-primary/10 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"
                layoutId={`gradient-${category.title}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
