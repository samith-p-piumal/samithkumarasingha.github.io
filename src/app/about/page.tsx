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
import {
    FaLinkedin,
    FaCode,
    FaServer,
    FaBrain,
    FaFacebook,
    FaInstagram,
    FaDatabase,
    FaGraduationCap, FaMusic, FaPlane, FaBookOpen, FaUserTie, FaMedal, FaHome
} from "react-icons/fa";
import {GiNetworkBars} from "react-icons/gi";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen animated-gradient bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/*<div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>*/}

                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/3 p-6 flex justify-center">
                            <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-blue-100">
                                <Image
                                    src="/profile.jpg"
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
                                    {/*<span className="flex items-center px-3 py-1 bg-orange-100 text-green-800 rounded-full">
                                        <FaUserTie className="mr-2" /> Technical Lead, Service Owner, Scrum Master
                                    </span>
                                    <span className="flex items-center px-3 py-1 bg-yellow-100 text-green-800 rounded-full">
                                        <GiNetworkBars className="mr-2" /> Financial, Banking, Telco, Healthcare
                                    </span>
                                    <span className="flex items-center px-3 py-1 bg-red-100 text-green-800 rounded-full">
                                        <FaMedal className="mr-2" /> FinTech Expert, Information Security Specialist
                                    </span>*/}
                                    <span className="flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full">
                                        <FaServer className="mr-2" /> Backend (Java, Node.js, GO)
                                    </span>
                                    <span className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                                        <FaCode className="mr-2" /> Frontend (React, Angular, Next.js)
                                    </span>
                                    <span className="flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                                        <FaDatabase className="mr-2" /> MYSql, Oracle, MSSql, MongoDB
                                    </span>
                                    <span className="flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                                        <FaBrain className="mr-2" /> AI/ML
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Connect With Me</h3>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/samithkumarasingha/" target="_blank" rel="noopener noreferrer"
                                       className="text-blue-600 hover:text-gray-700 transition-colors duration-300">
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a href="https://www.facebook.com/samith.p.piumal" target="_blank" rel="noopener noreferrer"
                                       className="text-blue-600 hover:text-gray-700 transition-colors duration-300">
                                        <FaFacebook size={24} />
                                    </a>
                                    <a href="https://www.instagram.com/samithkumarasingha/" target="_blank" rel="noopener noreferrer"
                                       className="text-red-500 hover:text-gray-700 transition-colors duration-300">
                                        <FaInstagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
                        <p className="text-gray-600" >
                            <FaGraduationCap className="text-black" />
                            <b>BCSc - Bachelor of Computer Science</b><br />
                            University of Colombo School of Computing: September 2011 - February  2015<br /><br />
                            <FaGraduationCap className="text-black" />
                            <b>MIS - Master of Information Security</b><br />
                            University of Colombo School of Computing: October 2021 - January  2024
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Experience</h3>
                        <p className="text-gray-600">
                            <FaUserTie className="text-black" />
                            <b>Roles</b><br />
                            Technical Lead, Service Owner, Scrum Master<br /><br />
                            <GiNetworkBars className="text-black" />
                            <b>Domains</b><br />
                            Financial, Banking, Telco, Healthcare<br /><br />
                            <FaMedal className="text-black" />
                            <b>Expertise</b><br />
                            FinTech Expert, Information Security Specialist<br /><br />
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Hobbies</h3>
                        {/*<div className="flex gap-4 items-center">
                            <FaMusic className="text-black" />
                            <FaCameraRetro className="text-black" />
                            <FaPlane className="text-black" />
                            <FaBookOpen className="text-black" />
                            <GiWeightLiftingUp className="text-black" />
                        </div>*/}
                        <p className="text-gray-600">
                            <FaMusic className="text-black" />
                            Play guitar(Base and Rhythm)<br /><br />
                            <FaPlane className="text-black" />
                            Traveling, Hiking & Road trip<br /><br />
                            <FaBookOpen className="text-black" />
                            Learning new technologies<br />

                        </p>
                    </div>
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
