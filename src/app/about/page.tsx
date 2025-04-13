// export default function Page() {
//     return (
//         <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
//             <p className="text-lg text-gray-700">
//                 I am a software developer with experience in Java, React, and building scalable backend systems. I’m passionate about coding and love to solve complex problems.
//             </p>
//         </div>
//     );
// }

// app/about/page.jsx
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaServer, FaBrain } from "react-icons/fa";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/3 p-6 flex justify-center">
                            <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-blue-100">
                                <Image
                                    src="/profile.jpg" // Replace with your image path
                                    alt="Samith Kumarasingha"
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Samith Kumarasingha</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Passionate Software Developer & AI Enthusiast with experience in building
                                scalable applications and solving complex problems. I love turning ideas
                                into reality through code.
                            </p>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills & Expertise</h3>
                                <div className="flex flex-wrap gap-3">
                                    <span className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                                        <FaCode className="mr-2" /> Frontend (React, Next.js)
                                    </span>
                                    <span className="flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full">
                                        <FaServer className="mr-2" /> Backend (Node.js, Java)
                                    </span>
                                    <span className="flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                                        <FaBrain className="mr-2" /> AI/ML
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Connect With Me</h3>
                                <div className="flex space-x-4">
                                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                                       className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                                       className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                                       className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                                        <FaTwitter size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
                        <p className="text-gray-600">
                            Bachelor's in Computer Science<br />
                            University of XYZ, 20XX
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Experience</h3>
                        <p className="text-gray-600">
                            Software Developer at ABC Corp<br />
                            20XX - Present
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Hobbies</h3>
                        <p className="text-gray-600">
                            Open Source Contributions<br />
                            Learning new technologies<br />
                            Hiking & Photography
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
