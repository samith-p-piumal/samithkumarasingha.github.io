"use client"; // Add this directive at the top

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {FaHome} from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "AI-Powered Chat Application",
        description: "A real-time chat application with AI moderation features built using React, Node.js, and TensorFlow.js.",
        tags: ["React", "Node.js", "AI", "WebSockets"],
        githubUrl: "https://github.com/yourusername/ai-chat-app",
        liveUrl: "https://your-chat-app.com",
        imageUrl: "/project1.jpg"
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "Full-featured e-commerce platform with payment integration, product management, and user authentication.",
        tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        liveUrl: "https://your-ecommerce-site.com",
        imageUrl: "/project2.png"
    },
    {
        id: 3,
        title: "Health & Fitness Tracker",
        description: "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
        tags: ["React Native", "Firebase", "D3.js", "Redux"],
        githubUrl: "https://github.com/yourusername/fitness-tracker",
        liveUrl: "https://your-fitness-app.com",
        imageUrl: "/project3.png"
    },
    {
        id: 4,
        title: "Health & Fitness Tracker",
        description: "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
        tags: ["React Native", "Firebase", "D3.js", "Redux"],
        githubUrl: "https://github.com/yourusername/fitness-tracker",
        liveUrl: "https://your-fitness-app.com",
        imageUrl: "/project4.png"
    },
    {
        id: 5,
        title: "Health & Fitness Tracker",
        description: "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
        tags: ["React Native", "Firebase", "D3.js", "Redux"],
        githubUrl: "https://github.com/yourusername/fitness-tracker",
        liveUrl: "https://your-fitness-app.com",
        imageUrl: "/project5.png"
    },
    {
        id: 6,
        title: "Health & Fitness Tracker",
        description: "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
        tags: ["React Native", "Firebase", "D3.js", "Redux"],
        githubUrl: "https://github.com/yourusername/fitness-tracker",
        liveUrl: "https://your-fitness-app.com",
        imageUrl: "/project6.png"
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Web", "Mobile", "AI", "Fullstack"];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <div className="min-h-screen animated-gradient bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Here are some of my featured projects. Each one was built to solve a specific problem or explore new technologies.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                activeFilter === filter
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="flex space-x-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex space-x-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        <FiGithub className="mr-1" /> Code
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                        >
                                            <FiExternalLink className="mr-1" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="fixed bottom-6 right-6 z-50">
                <Link
                    href="/"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
                    aria-label="Return to home"
                >
                    <FaHome className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
}