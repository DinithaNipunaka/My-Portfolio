// ./components/sections/Certifications.js
import { react,useEffect, useRef } from "react";
import "./Certifications.css";

const certifications = [
  {
    title: "Create an Agent with Copilot Studio",
    issuer: "Microsoft Learn",
    date: "May 17, 2025",
    image: require("../../assets/micrsoft.jpg"),
    link: "#",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: " May 20, 2025",
    image: require("../../assets/inrocyber.jpg"),
    link: "#",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    date: "Following",
    image: require("../../assets/Introduction to Modern AI.png"),
    link: "#",
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    date: "Following",
    image: require("../../assets/Ethical Hacker.png"),
    link: "#",
  },
];

export default function Certifications({ darkMode }) {

  const sectionRef = useRef(null);


  useEffect(() => {   
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);


  return (
    <section id="Certifications"  ref={sectionRef} className={`certifications-section ${darkMode ? "dark" : "light"}`}>
      <h2 className="certifications-title">Certifications</h2>
      <div className="certification-cards">
        {certifications.map((cert, index) => (
          <div className={`cert-wrapper`} key={index}>
            <div className="rope-top">
              <div className="rope left"></div>
              <div className="rope right"></div>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
