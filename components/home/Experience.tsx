import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-0.5 bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-1.25 top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Softvence Agency Delta",
      period: "11/10/2025 - Present",
      description:
        "Developed responsive, scalable, and user-friendly web applications using React, Next.js, TypeScript, and modern UI frameworks. Integrated REST APIs, implemented reusable components, optimized performance, and collaborated with teams to deliver high-quality frontend solutions.",
      technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Redux"],
    },
    {
      title: "MERN Stack Developer",
      company: "Kryzotech Solutions",
      period: "01/01/2025 - 30/09/2025",
      description:
        "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js. Built RESTful APIs, implemented authentication and database integration, created responsive user interfaces, and optimized applications for performance, scalability, and maintainability.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
    },
    {
      title: "Content Moderator",
      company: "Genex Infosys Limited",
      period: "16/09/2022 - 31/12/2024",
      description:
        "Reviewed and moderated user-generated content to ensure compliance with platform policies and community guidelines. Identified and handled inappropriate or harmful content, maintained accuracy and consistency, and supported a safe and positive online environment.",
      technologies: ["MS Word", "MS Excel", "MS PowerPoint"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
