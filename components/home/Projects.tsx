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
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "/images/barik.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
      slug: "e-commerce-platform",
    },
    {
      title: "AI Task Manager",
      description:
        "Smart task management app that uses AI to categorize, prioritize, and suggest optimal task scheduling.",
      image: "/images/barik.jpg",
      technologies: ["React", "Python", "TensorFlow", "FastAPI", "MongoDB"],
      liveUrl: "https://ai-taskmanager.com",
      githubUrl: "https://github.com/username/ai-taskmanager",
      slug: "ai-task-manager",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Feature-rich chat application with real-time messaging, file sharing, and video calls.",
      image: "/images/barik.jpg",
      technologies: ["React", "Socket.io", "WebRTC", "Node.js", "Redis"],
      liveUrl: "https://chatapp-demo.com",
      githubUrl: "https://github.com/username/chat-app",
      slug: "real-time-chat-application",
    },
    {
      title: "AI Image Generator",
      description:
        "An AI image generator that uses a model to generate images based on a prompt.",
      image: "/images/barik.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
      liveUrl: "https://ai-image-generator.com",
      githubUrl: "https://github.com/username/ai-image-generator",
      slug: "ai-image-generator",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with a focus on clean UI and smooth animations.",
      image: "/images/barik.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://portfolio-demo.com",
      githubUrl: "https://github.com/username/portfolio",
      slug: "portfolio-website",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather dashboard providing real-time forecasts, interactive maps, and location-based insights.",
      image: "/images/barik.jpg",
      technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/username/weather-dashboard",
      slug: "weather-dashboard",
    },
    {
      title: "Fitness Tracker App",
      description:
        "A fitness tracking app with workout plans, progress monitoring, and social sharing features.",
      image: "/images/barik.jpg",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "https://fitness-tracker-demo.com",
      githubUrl: "https://github.com/username/fitness-tracker",
      slug: "fitness-tracker-app",
    },
    {
      title: "Cryptocurrency Wallet",
      description:
        "A secure crypto wallet supporting multiple currencies, portfolio tracking, and transactions.",
      image: "/images/barik.jpg",
      technologies: ["React", "Web3.js", "Solidity", "Ethers.js"],
      liveUrl: "https://crypto-wallet-demo.com",
      githubUrl: "https://github.com/username/crypto-wallet",
      slug: "cryptocurrency-wallet",
    },
    {
      title: "Online Learning Platform",
      description:
        "A comprehensive e-learning platform with video courses, quizzes, and progress tracking.",
      image: "/images/barik.jpg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://learning-platform-demo.com",
      githubUrl: "https://github.com/username/learning-platform",
      slug: "online-learning-platform",
    },
    {
      title: "Social Media Analytics Tool",
      description:
        "An analytics tool for tracking social media performance, engagement, and audience insights.",
      image: "/images/barik.jpg",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "https://social-analytics-demo.com",
      githubUrl: "https://github.com/username/social-analytics",
      slug: "social-media-analytics-tool",
    },
    {
      title: "Recipe Sharing App",
      description:
        "A community-driven recipe app with search, filters, ratings, and meal planning features.",
      image: "/images/barik.jpg",
      technologies: ["Flutter", "Firebase", "Provider", "Cloud Functions"],
      liveUrl: "https://recipe-app-demo.com",
      githubUrl: "https://github.com/username/recipe-app",
      slug: "recipe-sharing-app",
    },
    {
      title: "Inventory Management System",
      description:
        "A robust inventory management system with barcode scanning, alerts, and reporting.",
      image: "/images/barik.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
      liveUrl: "https://inventory-system-demo.com",
      githubUrl: "https://github.com/username/inventory-system",
      slug: "inventory-management-system",
    },
    {
      title: "Music Streaming Service",
      description:
        "A music streaming platform with personalized playlists, recommendations, and offline mode.",
      image: "/images/barik.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
      liveUrl: "https://music-stream-demo.com",
      githubUrl: "https://github.com/username/music-stream",
      slug: "music-streaming-service",
    },
    {
      title: "Travel Booking Website",
      description:
        "A travel booking platform with flight search, hotel reservations, and itinerary planning.",
      image: "/images/barik.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveUrl: "https://travel-booking-demo.com",
      githubUrl: "https://github.com/username/travel-booking",
      slug: "travel-booking-website",
    },
    {
      title: "Task Collaboration Tool",
      description:
        "A collaborative task management tool with real-time updates, kanban boards, and team chat.",
      image: "/images/barik.jpg",
      technologies: ["React", "Socket.io", "Node.js", "Redis", "MongoDB"],
      liveUrl: "https://task-collab-demo.com",
      githubUrl: "https://github.com/username/task-collab",
      slug: "task-collaboration-tool",
    },
    {
      title: "Document Management System",
      description:
        "A document management system with version control, sharing, and search capabilities.",
      image: "/images/barik.jpg",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Elasticsearch"],
      liveUrl: "https://doc-management-demo.com",
      githubUrl: "https://github.com/username/doc-management",
      slug: "document-management-system",
    },
    {
      title: "Event Booking Platform",
      description:
        "An event booking platform with ticket sales, venue management, and attendee tracking.",
      image: "/images/barik.jpg",
      technologies: ["Next.js", "Stripe", "Supabase", "Tailwind CSS"],
      liveUrl: "https://event-booking-demo.com",
      githubUrl: "https://github.com/username/event-booking",
      slug: "event-booking-platform",
    },
    {
      title: "Healthcare Appointment App",
      description:
        "A healthcare appointment booking app with doctor profiles, scheduling, and reminders.",
      image: "/images/barik.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "Twilio"],
      liveUrl: "https://health-app-demo.com",
      githubUrl: "https://github.com/username/health-app",
      slug: "healthcare-appointment-app",
    },
    {
      title: "Expense Tracker",
      description:
        "An expense tracker with budget management, expense categorization, and visual reports.",
      image: "/images/barik.jpg",
      technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://expense-tracker-demo.com",
      githubUrl: "https://github.com/username/expense-tracker",
      slug: "expense-tracker",
    },
    {
      title: "Virtual Classroom",
      description:
        "A virtual classroom platform with live classes, whiteboard, and student management.",
      image: "/images/barik.jpg",
      technologies: ["React", "WebRTC", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://virtual-classroom-demo.com",
      githubUrl: "https://github.com/username/virtual-classroom",
      slug: "virtual-classroom",
    },
    {
      title: "Smart Home Dashboard",
      description:
        "A smart home dashboard for controlling IoT devices, automations, and energy monitoring.",
      image: "/images/barik.jpg",
      technologies: ["Vue.js", "MQTT", "Node.js", "InfluxDB", "Grafana"],
      liveUrl: "https://smart-home-demo.com",
      githubUrl: "https://github.com/username/smart-home",
      slug: "smart-home-dashboard",
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
