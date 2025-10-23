import React from 'react';
import './About.css'; 
import { FaLaravel, FaVuejs, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from 'react-icons/fa';
import { SiInertia, SiJquery } from "react-icons/si"; 

const About = () => {
    const name = "Alfred Cabato";
    const title = "Software Developer";
    const bio = "I’m a passionate and hands-on developer with experience in building full-stack web applications using PHP, MySQL, JavaScript, HTML, CSS, and PostgreSQL. I’ve also worked with modern frontend frameworks like React, and I’m comfortable designing user interfaces as well as managing backend databases. I enjoy solving real-world problems through code and continuously learning new tools and technologies to improve my craft.";
    const details = [
        { label: "Age", value: "23" },
        { label: "Residence", value: "San Quintin, Philippines" },
        { label: "Email", value: "cabatoalfred725@gmail.com" },
        { label: "Freelance", value: "Available" },
    ];
    
    // Tech Stack Data
    const techStack = [
        { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
        { name: 'Vue', icon: FaVuejs, color: '#4FC08D' },
        { name: 'Inertia', icon: SiInertia, color: '#9553E2' },
        { name: 'PHP', icon: FaPhp, color: '#777BB4' },
        { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'JS', icon: FaJsSquare, color: '#F7DF1E' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    
                    {/* LEFT SIDE: Image */}
                    <div className="about-visual">
                        <img 
                            src="/profile.jpg" 
                            alt={name + " - Profile Photo"} // Mas descriptive na alt text
                            className="profile-photo" 
                        />
                    </div>

                    {/* RIGHT SIDE: Text and Details */}
                    <div className="about-text">
                        {/* Pinalitan ang heading at ginamit ang name variable */}
                        <h3 className="about-name">{name}</h3> 
                        <p className="about-title-role">{title}</p>
                        
                        <p className="about-bio">{bio}</p>

                        <div className="about-details-grid">
                            {details.map((item) => (
                                <div key={item.label} className="detail-item">
                                    <span className="detail-label">{item.label}</span>
                                    <span className="detail-value">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* BAGONG SECTION: TECH STACK */}
                        <div className="tech-stack-section">
                            <h4 className="tech-stack-title">My Technical Stack</h4>
                            <div className="tech-icons-grid">
                                {techStack.map((tech) => (
                                    <div key={tech.name} className="tech-item">
                                        <tech.icon 
                                            style={{ color: tech.color }} 
                                            className="tech-icon"
                                            title={tech.name}
                                        />
                                        <span className="tech-name">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* END TECH STACK SECTION */}

                        {/* Updated CV link for clarity */}
                        <a href="/Cabato_Alfred_CV.pdf" download="Alfred_Cabato_CV.pdf" className="download-btn">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;