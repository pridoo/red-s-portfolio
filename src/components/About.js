import React from 'react';
import './About.css'; 
import { FaLaravel, FaVuejs, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaDatabase, FaRobot } from 'react-icons/fa';
import { SiInertia, SiJquery, SiPostgresql, SiPostman, SiMysql } from "react-icons/si"; 

const About = () => {
    const name = "Alfred Cabato";
    const title = "Software Developer";
    
    // Updated Bio to highlight AI and API skills
    const bio = "I’m a passionate full-stack developer specializing in building intelligent web applications. My expertise spans backend development with PHP and Laravel to modern frontend frameworks like React and Vue. I have hands-on experience in API development and integration (RESTful APIs), database management with SQL/PostgreSQL, and leveraging AI models (like DeepSeek) to automate institutional tasks. I enjoy solving complex problems through efficient code and seamless user experiences.";

    const details = [
        { label: "Age", value: "23" },
        { label: "Residence", value: "San Quintin, Philippines" },
        { label: "Email", value: "cabatoalfred725@gmail.com" },
        { label: "Freelance", value: "Available" },
    ];
    
    // Updated Tech Stack with AI, AJAX, DBs, and API Tools
    const techStack = [
        { name: 'Laravel', icon: FaLaravel, color: '#FF2D20' },
        { name: 'Vue', icon: FaVuejs, color: '#4FC08D' },
        { name: 'Inertia', icon: SiInertia, color: '#9553E2' },
        { name: 'PHP', icon: FaPhp, color: '#777BB4' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'AI Logic', icon: FaRobot, color: '#00A67E' }, // AI Interaction Icon
        { name: 'API/Postman', icon: SiPostman, color: '#FF6C37' }, // API Development
        { name: 'SQL/MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'AJAX/jQuery', icon: SiJquery, color: '#0769AD' },
        { name: 'JS', icon: FaJsSquare, color: '#F7DF1E' },
        { name: 'HTML/CSS', icon: FaHtml5, color: '#E34F26' },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    
                    {/* LEFT SIDE: Image */}
                    <div className="about-visual">
                        <div className="photo-frame">
                            <img 
                                src="/profile.jpg" 
                                alt={name + " - Profile Photo"} 
                                className="profile-photo" 
                            />
                        </div>
                    </div>

                    {/* RIGHT SIDE: Text and Details */}
                    <div className="about-text">
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

                        {/* TECH STACK SECTION */}
                        <div className="tech-stack-section">
                            <h4 className="tech-stack-title">Technical Expertise</h4>
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