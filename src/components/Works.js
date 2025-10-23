import React, { useState } from 'react';
import './Works.css'; 
import { FaEye, FaCode, FaImages, FaTimes, FaGithub } from 'react-icons/fa'; 

const ProjectModal = ({ project, onClose }) => {
    
    let demoImages = [
        project.image, 
    ];

    if (project.id === 1) { 
        demoImages.push('/Municipal/ss1.jpg', '/Municipal/ss2.jpg'); 
    } else if (project.id === 2) { 
        demoImages.push('/Barangay/ss_dashboard.jpg', '/Barangay/ss_cert.jpg');
    } else if (project.id === 3) {
        demoImages.push('/Tekna/dashboard.jpg', '/Tekna/tasks_view.jpg');
    } 

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === demoImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? demoImages.length - 1 : prev - 1));
    };

    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}><FaTimes /></button>
                
                <h3 className="modal-title">{project.title} - Screenshots</h3>
                
                <div className="modal-slider">
                    <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
                    
                    <img 
                        src={demoImages[currentSlide]} 
                        alt={`Screenshot ${currentSlide + 1} of ${project.title}`} 
                        className="modal-image"
                    />
                    
                    <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
                    
                    <div className="slider-indicators">
                        {demoImages.map((_, index) => (
                            <span 
                                key={index} 
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>

                <p className="modal-info">Showing {currentSlide + 1} of {demoImages.length} images.</p>
                
            </div>
        </div>
    );
};


const Works = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const projects = [
        {
            id: 1,
            title: "San Quintin Management System (SQMS)",
            description: "An ongoing web application for the local government of San Quintin, streamlining municipal services. Leading full-stack development (Laravel, Inertia, Vue).",
            image: "/Municipal/Municipal.jpg",
            tech: ["Laravel", "Inertia.js", "Vue.js", "Tailwind CSS"],
            liveUrl: "", 
            codeUrl: "https://github.com/pridoo/SanQuintinManagementSystem",
        },
        {
            id: 2,
            title: "Barangay Automation Services Information System (BASIS)",
            description: "System for digitizing barangay operations: resident profiling, certificate requests, and transaction tracking. Full-stack development.",
            image: "/Barangay/Barangay.jpg", 
            tech: ["Laravel", "PHP", "JavaScript", "CSS"],
            liveUrl: "",
            codeUrl: "https://github.com/pridoo/BarangayAutomationServices-InformationSystem",
        },
        {
            id: 3,
            title: "Task Management System (Tekna Packaging Inc.)",
            description: "Web application for Tekna Packaging Inc. to manage and track employee tasks and project progress. Primary role: Laravel backend development.",
            image: "/Tekna/Tekna.jpg", 
            tech: ["Laravel", "PHP", "JavaScript", "Tailwind CSS"],
            liveUrl: "",
            codeUrl: "https://github.com/pridoo/task-management",
        },
        {
            id: 4,
            title: "GPA Calculator (General)",
            description: "A responsive web tool (HTML, Tailwind CSS, JavaScript) for students to quickly calculate their GWA and check honors eligibility. Developed frontend and core logic.",
            image: "/GPA/GPA.jpg", 
            tech: ["HTML", "Tailwind CSS", "JavaScript"],
            isLive: true, 
            liveUrl: "https://pridoo.github.io/GpaCalculator/",
            codeUrl: "https://github.com/pridoo/GpaCalculator",
        },
        {
            id: 5,
            title: "PSU GWA Calculator (Mobile-Friendly)",
            description: "Mobile-friendly web application tailored for Pangasinan State University students to compute their GWA. Fast and optimized for mobile.",
            image: "/PSU/PSU_GWA.jpg", 
            tech: ["HTML", "Tailwind CSS", "JavaScript"],
            isLive: true, 
            liveUrl: "https://gwacalculator-fred.vercel.app/",
            codeUrl: "https://github.com/pridoo/Gwacalculator",
        },
        {
            id: 6,
            title: "HARVESTEER: ML Crop Management App (Front-End Contributor)",
            description: "Contributed to the front-end development and QA of a Machine Learning-based mobile app for CLSU RM-CARES using Flutter and Dart.",
            image: "/Harvesteer/Harvesteer.jpg", 
            tech: ["Flutter", "Dart", "Quality Assurance"],
            liveUrl: "",
            codeUrl: "https://github.com/pridoo",
        },
    ];

    return (
        <section id="works" className="works-section">
            <div className="works-container">
                <h2 className="section-title">My Works</h2>
                <p className="section-subtitle">
                    A collection of my recent creative and technical projects.
                </p>

                <div className="works-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>

                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-tech">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                
                                <div className="project-links">
                                    {project.isLive && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-btn live-btn" title="Live Demo">
                                            <FaEye /> Live Demo
                                        </a>
                                    )}

                                    <button onClick={() => openModal(project)} className="link-btn screenshot-btn" title="View Project Screenshots">
                                        <FaImages /> Screenshots
                                    </button>

                                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="link-btn code-btn" title="View Code on GitHub">
                                        <FaCode /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}

        </section>
    );
};

export default Works;