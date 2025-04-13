import Link from "next/link";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl">
                {/* Animated greeting */}
                <div className="animate-fade-in">
                    <p className="text-black font-medium mb-2">Hello, I'm</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                        Samith Kumarasingha{/*<span className="text-blue-600">Samith Kumarasingha</span>*/}
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
                        //className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        About Me
                        {/*<FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />*/}
                    </Link>
                    <Link
                        href="/projects"
                        //className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        View My Work
                    </Link>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-6">

                    <a href="https://www.linkedin.com/in/samithkumarasingha/" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:text-gray-700 transition-colors duration-300">
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a href="https://www.facebook.com/samith.p.piumal" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:text-gray-700 transition-colors duration-300">
                        <FaFacebook className="h-6 w-6" />
                    </a>
                    <a href="https://www.instagram.com/samithkumarasingha/" target="_blank" rel="noopener noreferrer"
                       className="text-red-500 hover:text-gray-700 transition-colors duration-300">
                        <FaInstagram className="h-6 w-6" />
                    </a>

                </div>

                {/* Scroll indicator (optional) */}
                {/*<div className="mt-16 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
                    </div>
                </div>*/}
            </div>
        </div>
    );
}