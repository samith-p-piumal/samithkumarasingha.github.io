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
        technologies: "Java(8,9,11,17)\n Apache Camel\n OCP\n Weblogic(12c, 14c)\n Oracle\n MQ\n JSP\n CSS\n HTML\n " +
            "FIDO2\n Spring batch\n JIRA\n Agile methodologies\n FIDO2 token authentication\n Splunk\n",
        projects: "TMRW App Backend(SPL , DGE)|This is project details\n " +
            "PIB(Batch, EDAG, BatchReport)|Mange backend opertions like dayily cron jobs, batch execution and report generation\n " +
            "PIB Customer Web App(FE,WS)|Customer web application\n Bank Admin|Bank officers, customer support web application",
        role: "System Programmer",
        tags: ["Java", "Apache Camel", "OCP", "Weblogic", "FIDO2", "Splunk"],
        githubUrl: "",
        liveUrl: "https://play.google.com/store/apps/details?id=com.uob.mighty.app&pcampaignid=web_share",
        imageUrl: "/project1.jpg"
    },
    {
        id: 2,
        title: "Mediconsult Oy - Finland(Remote)",
        projects: "MediAtri\n MediCloud\n KuhaWeb",
        description: "Led development of digital healthcare solutions at Mediconsult Oy, focusing on Health and Elderly Care applications. " +
            "Utilized Java, Spring Framework, and React.js to enhance digital services, including online booking, self-care, and ERP for " +
            "resource optimization. Implemented Agile methodologies and acted as Scrum Master for cross-functional teams.",
        tags: ["Java", "JSP", "Kubernetes"],
        technologies: "Java 8,9,11\n MySql\n Oracle DB\n RMQ\n Jenkins\n Docker\n Kubernetes\n Hibernate\n Microservice\n " +
            "Aragon2 Password Algorithm\n Kibana\n JSP\n ELK\n Open Search\n Unit Test\n IT\n SIT\n JIT\n Sonar Qube",
        responsibilities:
            "Built dynamic user interfaces with React.js to improve user experience for digital services like online booking, self-care, and patient management.\n" +
            "Acted as Scrum Master, leading Agile ceremonies, managing sprints, and ensuring timely project delivery.\n" +
            "Collaborated with cross-functional teams to integrate features like SMS services, digital forms, and population health tools.\n" +
            "Implemented resource optimization solutions for elderly care, including ERP for managing services and automating resource planning.\n" +
            "Ensured mHealth mobile solutions allowed offline access and supported features like patient lists, medications, and examinations.\n" +
            "Coordinated with senior management in Finland and the M C Medisoft country manager in Sri Lanka to align technical goals with business objectives.\n",
        role: "Associate Tech Lead",
        githubUrl: "",
        liveUrl: "https://www.mediconsult.fi/ratkaisut/sosiaalihuolto/",
        imageUrl: "/project2.png"
    },
    {
        id: 3,
        title: "Circles Life - Singapore(Sri Lanka Hub)",
        projects: "Billing Service|Billing service mange all prepaid & postpaid bill related activities\n " +
            "Promotion Service|Promotion sevice mange all the promotion related mechanism all over the product\n " +
            "Catalogue Service|Catalogue Service, overseeing the comprehensive platform catalogue, including products, add-ons, bundles.\n " +
            "Payment Service|Payment service responsible for capturing all the payments and refunds",
        description: "Circles Life is the premier telecommunications company in South Asia and a multinational mobile virtual " +
            "network operator in Singapore. It has around 40 microservices for different tasks and I spearheaded key services vital " +
            "to the platform's success. As part of the dynamic team, I led the Billing Service, ensuring seamless postpaid payment " +
            "processes. In managing the Promotion Service, I orchestrated impactful promotions, rewards, discounts, and referral " +
            "programs. Additionally, I played a pivotal role in the Catalogue Service, overseeing the comprehensive platform catalogue, " +
            "including products, add-ons, bundles, and dynamic behaviours. My contribution extended to the platform's core through the " +
            "Payment Service, where I managed payment requests, collaborating with payment service providers via efficient payment connectors.",
        technologies: "Java 11,17\n Golang\n Node JS\n MongoDB\n MySql\n Oracle DB\n Liquibase\n RMQ\n Kafka\n Redis\n Jenkins\n Docker\n " +
            "Kubernetes\n Hibernate\n Spring boot\n Spring batch\n Spring cloud\n Rest-Api\n Microservice\n Domain Driven Design\n " +
            "Opsgenie\n Kibana\n ELK\n Open Search\n Distributed Tracing\n AWS\n Google Cloud\n Unit Test\n IT\n SIT\n " +
            "JIT\n Sonar Qube\n Code Climate",
        responsibilities:
            "Service Owner for Billing, Catalogue, and Secondary Service Owner for Promotion.\n" +
            "Expertly manage team members, assigning tasks and ensuring effective monitoring of their work.\n" +
            "Conduct regular stand-up meetings to enhance communication, mitigate risks, and escalate issues promptly.\n" +
            "Proactively communicate potential impacts on timelines, informing stakeholders in advance.\n" +
            "Conduct Peer Reviews, PR reviews, Code quality reviews, KTs  and onboarding, PDR reviews, OKR settings, and regular one-on-one sessions for team development.\n" +
            "Active participation in quarterly PI planning sessions, collaborating on Requirement (Epic/Story) walkthroughs with Product Owners.\n" +
            "Drive the design and documentation of solutions, presenting them to Product Owners, developers, and Architects.\n" +
            "Showcase ongoing progress to stakeholders mid-sprint and provide comprehensive outcomes at the sprint's end.\n" +
            "Successfully obtain sign-offs for development features within agreed time frames and deploy to production on schedule.\n" +
            "Develop and review Unit tests and integration tests, providing guidance to the AQA team on Service Integration tests and journey Integration tests.\n" +
            "Engage in deployment windows and MD file reviews and offer support for (P1, P2) on-call requests, hotfix review, and deployment with the release team.\n",
        tags: ["Java", "GO", "Node JS"],
        role: "Associate Tech Lead",
        githubUrl: "",
        liveUrl: "https://play.google.com/store/apps/details?id=com.circles.selfcare&pcampaignid=web_share",
        imageUrl: "/project3.png"
    },
    {
        id: 4,
        title: "Payment Services Private Limited & SDB Bank - Sri Lanka",
        projects: "UPay|Upay, an innovative electronic wallet-based payment application\n " +
            "UPos|The UPOS app stands as an indispensable tool, simplifying and fostering the growth of businesses. Merchants can download " +
            "the UPOS app effortlessly, transforming their smartphones into secure platforms for accepting UPay payments.\n " +
            "UPay IPG|The UPayIPG solution delivers a rapid, secure, and dependable payment checkout experience for various eCommerce platforms.",
        description: "Upay, an innovative electronic wallet-based payment application, revolutionizes the payment landscape with unique features. " +
            "The payment process encompasses two methods: Card and CASA. Leveraging the Mastercard payment gateway for card tokenization and Cargill's " +
            "for CASA, it seamlessly integrates with the JustPay payment platform. The application adopts the EMV standard QR for merchant-presented " +
            "QR payments, ensuring secure and efficient transactions.\n" +
            "\n" +
            "One standout feature is the introduction of guest payments, setting Upay apart from traditional payment applications. " +
            "Unlike platforms that require a mandatory sign-up process, Upay's explore mode empowers customers to conduct transactions as " +
            "guest payments. This means users can effortlessly execute transactions using their Credit/Debit card through the MasterCard " +
            "payment gateway, providing a convenient and frictionless experience. Upay's commitment to innovation and user-friendly practices " +
            "makes it a standout choice in electronic wallets.\n",
        technologies: "Java 8\n J2EE\n Spring Boot 2\n Angular js\n Mysql\n AWS API Gateway\n Spring Data\n Hibernate\n Apache Tomcat\n " +
            "Redis\n Jenkins\n JUnit\n Hibernate\n Rest-API\n Microservice Architecture\n AWS\n Azure\n Jasper report\n OCR\n Talend\n " +
            "Sonar\n EMV QR\n Rule Book\n Swagger\n Logback\n FCM\n Firebase\n GPS Tracking\n Git\n Maven\n Web Socket\n JS\n EMV QR",
        responsibilities:
            "Collaborate in solution walkthroughes with the architect team, facilitating discussions and addressing any uncertainties.\n" +
            "Collaborate with architects and tech leads in the initial system design phase.\n" +
            "Engage in Research and Development activities for innovations, provide knowledge transfer, and support implementation for team members.\n" +
            "Conduct discussions with payment service providers, troubleshoot issues, and ensure smooth collaboration.\n" +
            "Lead User Acceptance Testing (UAT) in coordination with payment service providers and service providers, obtaining necessary sign-offs.\n" +
            "Design REST-based APIs using JSON for Microservices, ensuring efficient communication.\n" +
            "Engage in peer reviews, peer coding sessions, and PR reviews, and maintain code quality standards.\n" +
            "Led production deployments, supported sanity and regression tests, and provided on-call support.\n" +
            "Guide junior team members in adhering to coding best practices and standards.\n" +
            "Collaborate effectively with third-party components to ensure seamless integration and functionality.\n",
        tags: ["Java", "Angular"],
        role: "Senior Software Engineer",
        githubUrl: "",
        liveUrl: "https://play.google.com/store/apps/details?id=com.paymentservices.upay&pcampaignid=web_share",
        imageUrl: "/project4.png"
    },
    {
        id: 5,
        title: "Epic Lanka (Pvt) Limited - Sri Lanka",
        role: "Senior Software Engineer & Software Engineer",
        projects: "Frimi Mobile Wallet|Frimi is a super-smart app for NTB Bank that makes handling money easy.\n " +
            "ACS - Access Control Server(3D Secure)|ACS (Access Control Server) plays a crucial role in 3D Secure online payments. " +
            "It facilitates real-time Payer Authentication for cardholders upon request from the acquirer. ACS is configured with the " +
            "highest level of security, employing SSL (TLS) protocols, and it holds certifications from major card networks such as " +
            "Visa and Mastercard and compliance with PCI DSS standards. In 3D Secure transactions, ACS collaborates with card issuers " +
            "(VISA, MASTER, AMEX), acquirers, and the interoperability domain (e.g., payment system) to ensure thorough verification and " +
            "authentication for each transaction.\n " +
            "NTB - SBank Back Office Portal|NTB-SBank is like the boss of the app, taking care of all the important stuff, including helping customers and handling admin stuff\n " +
            "BML TSP - Bank of Maldives Application|BML is a wallet application designed for the Bank of Maldives. The BML TSP " +
            "(Token Service Provider) application serves as the core module responsible for payment option tokenization. Within " +
            "this module, all bank account and card details are meticulously managed. It generates tokens for these details and " +
            "creates payment tokens that facilitate secure transactions during the payment process. ",
        description: "Frimi is a super-smart app for NTB Bank that makes handling money easy. NTB-SBank is like the boss of " +
            "the app, taking care of all the important stuff, including helping customers and handling admin stuff. " +
            "There's also TSP, which is like a superhero that creates special codes to keep your money transactions safe. " +
            "TSP is super secure, ensuring customer accounts are protected with special tokens. Frimi is the go-to app in Sri Lanka, " +
            "and it handles reasonable payment portions of online tractions in Sri Lanka.\n",
        technologies: "Struts\n J2EE\n JS\n  JSP\n JQuery\n HTML\n CSS\n Oracle\n Java 1.8\n Glassfish Server\n SVN\n " +
            "Hibernate\n HSM\n Apache/IBM HTTP servers\n WSDL\n SSL\n JBoss\n WebLogic",
        responsibilities:
            "Participate in solution walkthrough meetings and UI demonstrations.\n" +
            "Engage in the Full Software Development Life Cycle and follow agile methodologies.\n" +
            "Participate in UAT sessions with client teams. \n" +
            "Design and implement solutions, Conduct peer reviews, Unit tests, and Manual testing.\n" +
            "Deployment of backend and frontend components and conduct testing.\n" +
            "Work collaboratively with the NTB bank team.\n" +
            "Support on production issues.\n",
        tags: ["Java", "JS"],
        githubUrl: "",
        liveUrl: "https://play.google.com/store/apps/details?id=com.nationstrust.frimi&pcampaignid=web_share",
        imageUrl: "/project5.png"
    },
    {
        id: 6,
        title: "Ideahub (Pvt) Limited - Sri Lanka",
        role: "Software Engineering",
        projects: "Genie|Genie revolutionises the traditional wallet into a cutting-edge digital platform, safeguarding credit and " +
            "debit cards, current and savings accounts (CASA), and eZ Cash accounts securely on mobile phones.\n " +
            "Snifee|Snifee operates through a straightforward process, users attach a tracking device to the person or " +
            "object they wish to monitor and pre-set specific scenarios for receiving alerts. The Snifee Bee app, available for " +
            "download, transforms a smartphone into a Tracking Beacon.\n " +
            "DApp|Symphony is a versatile framework and product catalogue application, that extends support to complementary " +
            "products such as DApp. The DApp Android application empowers customers to explore deals, vouchers, and more, " +
            "seamlessly integrated with Java backend services. The development incorporates cutting-edge technologies, including GPS and " +
            "BLE, enhancing the user experience.\n " +
            "Menutab|Menutab is a meal ordering system for MAS ACTIVE(Pvt) Ltd. It is fully configurable and consists of an order management workflow with a cost management system.",
        description: "Genie revolutionises the traditional wallet into a cutting-edge digital platform, safeguarding credit and debit cards, " +
            "current and savings accounts (CASA), and eZ Cash accounts securely on mobile phones. Offering a frictionless payment journey " +
            "across in-app, Over-the-counter (OTC via QR Code), web, and remote transactions, Genie ensures a seamless and secure " +
            "user experience. Additionally, it boasts full certification from the globally recognized PCI Data Security Standards body. " +
            "Sampath Bank IPG is employed for card transactions, while CASA support is facilitated through Cargills Bank.",
        technologies: "Java 7,8\n Spring\n AWS API Gateway\n Spring Data\n Hibernate\n Apache Tomcat\n Redis\n Junit\n Hibernate\n " +
            "Rest-API\n AWS\n Jasper report\n OCR\n Paycorp IPG\n Rule Book\n Gradle\n PCI DSS standard\n Jenkins\n HSM\n Azure\n " +
            "Talend\n Sonar\n Mastercard Payment Gateway\n Logback\n Swagger\n EMV QR\n WSO2 Carbon\n WSO2 Application Server\n WSO2 ESB\n PHP",
        responsibilities: "Implement the prescribed solution guided by solution architects to ensure timely delivery.\n" +
            "Participate in solution walkthrough sessions, addressing issues and uncertainties as they arise.\n" +
            "Perform task breakdowns, estimation, and daily stand-up meetings following agile methodologies.\n" +
            "Conduct sessions with the Visa Indian team for acceptance testing and resolve issues related to PCI DSS standards.\n" +
            "Execute peer reviews, unit testing, and manual testing processes.\n" +
            "Lead Proof of Concept (POC) and implementation for a dual authentication system focused on card information encryption and decryption.\n" +
            "Collaborate with Dialog Telecom and the Bank team to meet project deadlines.\n" +
            "Provide deployment support, production support and on-call assistance as required.\n",
        tags: ["Java", "PHP"],
        githubUrl: "",
        liveUrl: "https://play.google.com/store/apps/details?id=lk.tc.finpal&pcampaignid=web_share",
        imageUrl: "/project6.png"
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Java", "Angular", "PHP", "Node JS", "GO"];

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
                                                        <div className="px-4 pb-4 pt-2 w-full text-justify text-gray-600 border-t border-gray-100">
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
                                            <FiExternalLink /> Live App
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