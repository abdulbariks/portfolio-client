"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "../icons/Icons";
import { useState } from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  slug,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <Link href={`/projects/${slug}`} className="hover:underline">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </Link>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full">
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" className="rounded-full shadow-none">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const projectsPerPage = 4;

  const projects = [
    {
      title: "CINACT Dashboard",
      description:
        "Developed a responsive and scalable CINACT Dashboard using Next.js, TypeScript, and Tailwind CSS. Integrated REST APIs for dynamic data management and implemented real-time communication using Socket.IO. Integrated LiveKit for real-time audio/video communication, with a focus on performance, responsive UI, and maintainable architecture.",
      image: "/images/projects/cinact.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Socket.IO",
        "LiveKit",
      ],
      liveUrl: "https://abbasfasaei-fo-11-a9-dcce-387-front.vercel.app",
      githubUrl: "https://github.com/abdulbariks/cinact-dashboard",
      slug: "CINACT Dashboard",
    },
    {
      title: "FMC Dashboard",
      description:
        "A modern and responsive Apps Admin Dashboard designed to efficiently manage users, applications, data, and system activities from a centralized interface. It provides clear analytics, intuitive navigation, and powerful management tools for streamlined administration and better decision-making.",
      image: "/images/projects/fmc.png",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://danielblairdashboard-front-end.vercel.app",
      githubUrl:
        "https://github.com/abdulbariks/danielblairdashboard-front-end",
      slug: "Admin Dashboard designed",
    },
    {
      title: "Bokli",
      description:
        "Smart Booking Management For Modern Service Businesses All-in-one platform for managing services, staff, branches, bookings, payments,and customer data — with your own branded mini-website.",
      image: "/images/projects/bokli.png",
      technologies: ["Next.js", "TypeScript", "Tap Payments", "Laravel"],
      liveUrl: "https:bokli.io",
      githubUrl: "https://github.com/abdulbariks/bokli",
      slug: "Booking Management ",
    },
    {
      title: "Joyjatra Travel",
      description:
        "Joyjatra Travel is a high-performance travel management platform built with Next.js. It features a robust Role-Based Access Control (RBAC) system, real-time support messaging, and advanced data management tools.",
      image: "/images/projects/joyjatra.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "express.js",
        "Stripe",
        "Prisma",
        "PostgreSQL",
      ],
      liveUrl: "joyjatratravel-client.vercel.app",
      githubUrl: "https://github.com/abdulbariks/JoyjatraTravel-Client",
      slug: "Role-Based Access Control (RBAC) system",
    },
  ];

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="relative py-20 px-6 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + projectsPerPage, projects.length),
                )
              }
            >
              See More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
