import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";


const PROJECTS = [
  
 {
  title: "Digital Payment Management System",
  desc: "Developed a full-stack digital payment system using Spring Boot and React.js with secure REST APIs for user authentication and transaction processing. Integrated MySQL with JPA/Hibernate and optimized database performance using HikariCP.",
  tech: "Java · Spring Boot · Hibernate · JPA · MySQL · REST API · Maven · React JS",
  live: "https://spring-git-development-fame1.vercel.app/"
   }
  ,
  {
    title: 'Weight Calculator',
    desc: 'A simple weight calculator application built with React, demonstrating skills in state management and user interface design.',
    tech: 'React · CSS',
    path:"/weight"
  },
  {
    title: 'Weather App',
    desc: 'A Weather App that fetches real-time weather data from an API, showcasing proficiency in API integration and responsive design.',
    tech: 'React · CSS · API',
    path:"/climate"
  },
  {
    title: 'QR Code Generator',
    desc: 'A QR Code Generator application built with React, demonstrating skills in state management and user interface design.',
    tech: 'React · CSS',
    path:"/qr"
  },
  {
    title: 'Currency Converter',
    desc: 'A Currency Converter application built with React, demonstrating skills in state management and user interface design.',
    tech: 'React · CSS',
    path:"/converter"
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
  ref={ref}
  onClick={() => {
    if (project.live) {
      window.open(project.live, "_blank");
    } else {
      navigate(project.path);
    }
  }}
  className={`project-card ${visible ? 'visible' : ''}`}
  style={{ animationDelay: `${index * 0.3}s` }}
  >
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <p style={{ marginTop: '10px', fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>
        {project.tech}
      </p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;