"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {FaCode, FaHome, FaServer, FaTasks} from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "UOB Bank - Singapore",
        description: "Led the development of core systems, including the TMRW App backend, Bank Admin, and PIB platforms, aimed at streamlining banking operations and enhancing customer experiences. Focused on implementing secure authentication, optimizing batch processes, and delivering responsive web solutions to support seamless digital banking services and user engagement. ",
        responsibilities:
            "Developed and maintained backend services for the TMRW App and PIB systems using Java 8, 9, and 11.\n" +
            "Built and enhanced the Bank Admin system, handling various administrative functionalities.\n" +
            "Implemented customer-facing features in the PIB Customer Web App, working on both frontend (FE) and web services (WS).\n" +
            "Utilized JavaServer Pages (JSP) for dynamic web content generation.\n" +
            "Developed and optimized Java batch processing systems for PIB (Batch, EDAG, BatchReport).\n" +
            "Managed middleware services using WebLogic 12c and 14c, ensuring scalability and reliability.\n" +
            "Integrated FIDO2 token authentication for enhanced security across applications.\n" +
            "Collaborated within Agile teams, tracking progress and issues using JIRA.\n" +
            "Led deployment and release activities, coordinating across teams to ensure smooth rollouts.\n",
        technologies: "Java(8,9,11,17)\n Apache Camel\n OCP\n Weblogic(12c, 14c)\n Oracle\n MQ\n JSP\n CSS\n HTML\n FIDO2\n Spring batch\n JIRA\n Agile methodologies\n FIDO2 token authentication\n Splunk\n",
        projects: "TMRW App Backend(SPL , DGE)|This is project details\n " +
            "PIB(Batch, EDAG, BatchReport)|Mange backend opertions like dayily cron jobs, batch execution and report generation\n " +
            "PIB Customer Web App(FE,WS)|Customer web application\n Bank Admin|Bank officers, customer support web application",
        role: "Role: System Programmer",
        tags: ["Java", "Apache Camel", "OCP", "Weblogic", "FIDO2", "Splunk"],
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
        description: "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization." +
            "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization." +
            "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization." +
            "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
        tags: ["React Native", "Firebase", "D3.js", "Redux"],
        githubUrl: "https://github.com/yourusername/fitness-tracker",
        liveUrl: "https://your-fitness-app.com",
        imageUrl: "/project6.png"
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Java", "Next.js", "React Native"];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">My Professional Projects</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore my work experience and technical contributions across various domains
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                                activeFilter === filter
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
                            {/* Project Header */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                        <p className="text-blue-200 font-medium">{project.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                {/* Projects */}
                                {project.projects && (
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 text-gray-800 mb-3">
                                            <FaCode className="text-blue-600" />
                                            <h4 className="font-semibold">Project Details</h4>
                                        </div>
                                        <div className="space-y-3 pl-7">
                                            {project.projects.split('\n').map((proj, index) => {
                                                const [projectName, projectDetails] = proj.split('|');
                                                return (
                                                    <details
                                                        key={index}
                                                        className="group bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors shadow-sm"
                                                    >
                                                        <summary className="flex items-center justify-between p-4 cursor-pointer">
                                                            <div className="flex items-center gap-3">
                                                                <span className="font-medium text-gray-800">
                                                                  {projectName.trim()}
                                                                </span>
                                                            </div>
                                                            <svg
                                                                className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M9 5l7 7-7 7"
                                                                />
                                                            </svg>
                                                        </summary>
                                                        <div className="px-4 pb-4 pt-2 text-gray-600 border-t border-gray-100">
                                                            {projectDetails ? (
                                                                <p className="whitespace-pre-line">{projectDetails.trim()}</p>
                                                            ) : (
                                                                <p className="text-gray-400">No additional details available</p>
                                                            )}
                                                        </div>
                                                    </details>
                                                );
                                            })}
                                        </div>
                                    </div>

                                )}

                                {/* Description */}
                                <div className="mb-8 w-full">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                                        </svg>
                                        Description
                                    </h4>
                                    <div className="w-full text-justify text-gray-600 leading-relaxed tracking-normal space-y-3">
                                        {project.description.split('\n').map((paragraph, index) => (
                                            <p key={index} className="[text-align-last:left] hyphens-auto">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                {project.technologies && (
                                    <div>
                                        <div className="flex items-center gap-2 text-gray-800 mb-2">
                                            <FaServer className="text-blue-600" />
                                            <h4 className="font-semibold">Technologies</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pl-7">
                                            {project.technologies.split('\n').map((tech, i) => (
                                                tech.trim() && (
                                                    <span key={i} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                        {tech.replace('Key technologies:', '').trim()}
                                                    </span>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Responsibilities */}
                                {project.responsibilities && (
                                    <div>
                                        <div className="flex items-center gap-2 text-gray-800 mb-1">
                                            <FaTasks className="text-blue-600" />
                                            <h4 className="font-semibold">Responsibilities</h4>
                                        </div>
                                        <ul className="w-full text-justify space-y-2 pl-7 text-gray-600">
                                            {project.responsibilities.split('\n').map((item, i) => (
                                                item.trim() && (
                                                    <li key={i} className="flex gap-2">
                                                        <span className="text-blue-600">•</span>
                                                        <span>{item.trim()}</span>
                                                    </li>
                                                )
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Links */}
                                <div className="flex gap-4 pt-2">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            <FiGithub /> Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            <FiExternalLink /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Home Button */}
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
        </div>
    );
}