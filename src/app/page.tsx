import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br animated-gradient from-gray-50 to-blue-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background elements */}
            {/*<div className="absolute inset-0 overflow-hidden">
                 Floating circles
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-400 opacity-20 animate-float1"></div>
                <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-purple-100 opacity-20 animate-float2"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-indigo-100 opacity-20 animate-float3"></div>

                 Grid pattern
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:40px_40px] opacity-5"></div>
            </div>*/}

            <div className="text-center max-w-3xl relative z-10">
                {/* Animated greeting */}
                <div className="animate-fade-in">
                    <p className="text-black font-medium mb-2">Hello, I'm</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                        Samith Kumarasingha
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 mb-6">
                        <span className="relative inline-block">
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200"></span>
                            <span className="relative">Software Engineer, Information Security Specialist and AI Enthusiast</span>
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        I build exceptional digital experiences with modern technologies.
                        Currently focused on creating innovative solutions at the intersection
                        of software development and artificial intelligence.
                    </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <Link
                        href="/about"
                        className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/projects"
                        // className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md"
                        className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                    >
                        View My Work
                    </Link>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/samithkumarasingha/" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:text-blue-800 transition-colors duration-300 hover:scale-110 transform">
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a href="https://www.facebook.com/samith.p.piumal" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:text-blue-800 transition-colors duration-300 hover:scale-110 transform">
                        <FaFacebook className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/samithkumarasingha/" target="_blank" rel="noopener noreferrer"
                       className="text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:scale-110 transform">
                        <FaInstagram className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    );
}
