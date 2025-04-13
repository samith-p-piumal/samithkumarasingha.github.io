// //import Image from "next/image";
//
// import Link from "next/link";
//
// export default function Home() {
//   return (
//       <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           Samith Kumarasingha
//         </h1>
//         <p className="text-xl text-gray-600 mb-6">
//           Passionate Software Developer & AI Enthusiast
//         </p>
//         <div className="flex space-x-4">
//
//           <Link href="/about" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//               About Me
//
//           </Link>
//           <Link href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//               My Projects
//           </Link>
//         </div>
//       </div>
//   );
// }

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl">
                {/* Animated greeting */}
                <div className="animate-fade-in">
                    <p className="text-blue-600 font-medium mb-2">Hello, I'm</p>
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                        Samith <span className="text-blue-600">Kumarasingha</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-medium text-gray-600 mb-6">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-200"></span>
              <span className="relative">Software Developer</span>
            </span> & AI Enthusiast
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
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        About Me
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                        href="/projects"
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        View My Work
                    </Link>
                </div>

                {/* Social links */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub className="h-6 w-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="h-6 w-6" />
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
                        aria-label="Twitter"
                    >
                        <FaTwitter className="h-6 w-6" />
                    </a>
                </div>

                {/* Scroll indicator (optional) */}
                <div className="mt-16 animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}