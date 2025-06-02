import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Pharmacy Management System",
    tech: "PHP, MySQL",
    features: [
      "Medicine stock management",
      "Automated billing",
      "Customer record handling",
      "User authentication",
    ],
    highlight:
      "Streamlined pharmacy operations by enabling accurate inventory tracking and efficient billing.",
    link: "https://github.com/DinithaNipunaka/Pharmacy-Management-System",
    icon: "pharmacy-system.png",
    category: "web",
  },
  {
    title: "Tile Showroom Web Application",
    tech: "PHP, MySQL",
    features: [
      "Responsive tile browsing",
      "Filter by category, size, price",
      "Order management",
      "Stock management",
    ],
    highlight:
      "Enhanced customer experience with responsive UI and efficient showroom staff tools.",
    link: "https://github.com/DinithaNipunaka/Tile-Show-Room-Web-Site",
    icon: "tile-showroom.png",
    category: "web",
  },
  {
    title: "Library Management System",
    tech: "PHP, MySQL",
    features: [
      "Book inventory control",
      "Borrowing & return management",
      "Searchable book database",
      "Automated fine calculation",
    ],
    highlight:
      "Boosted librarian productivity by automating manual workflows and improving searchability.",
    link: "https://github.com/DinithaNipunaka/School-Library-Management-System",
    icon: "library-system.png",
    category: "web",
  },
  {
    title: "Construction Web Application",
    tech: "PHP, MySQL",
    features: [
      "Project tracking",
      "Budget management",
      "Material handling",
      "Client communication with real-time updates",
    ],
    highlight:
      "Centralized construction data for better communication and streamlined project oversight.",
    link: "https://github.com/DinithaNipunaka/Construction-Web-Application",
    icon: "construction-app.png",
    category: "web",
  },
  {
    title: "School Attendance System",
    tech: "PHP, MySQL",
    features: [
      "Real-time attendance marking",
      "Automated report generation",
      "User authentication",
    ],
    highlight:
      "Simplified attendance tracking with real-time updates and automated reporting for staff.",
    link: "https://github.com/DinithaNipunaka/School-Attendance-System",
    icon: "school-attendance.png",
    category: "web",
  },
  {
    title: "Inventory Management System",
    tech: "Java, MySQL",
    features: [
      "Product tracking",
      "Supplier management",
      "Sales reporting",
    ],
    highlight:
      "Java-based solution for small businesses with complete control over inventory and sales.",
    link: "https://github.com/DinithaNipunaka/Inventory_Management_System",
    icon: "inventory-system.png",
    category: "desktop",
  },
  {
    title: "Vehicle Buying & Selling Platform",
    tech: "Laravel, React",
    features: [
      "AI chatbot assistance",
      "3D vehicle gallery",
      "Advanced search filters",
      "Secure authentication",
      "Real-time listings",
    ],
    highlight:
      "Modern marketplace with immersive browsing and smart user assistance for vehicle trading.",
    link: "https://github.com/DinithaNipunaka/Vehicle-Sales-Management-System",
    icon: "vehicle-platform.png",
    category: "web",
  },
  {
    title: "AI Chat Bot for Mental Health",
    tech: "React, Laravel API",
    features: [
      "Emotion-aware conversational AI",
      "Mood tracking dashboard",
      "Guided meditation and breathing exercises",
      "User data privacy and encryption",
      "24/7 mental health support",
    ],
    highlight:
      "An empathetic AI companion designed to support mental well-being through intelligent, real-time conversations and personalized wellness features.",
    link: "https://github.com/DinithaNipunaka/AI-Mental-Health-Chatbot",
    icon: "mental-health-bot.png",
    category: "ai",
  },
  {
    title: "AI Chat Bot for Vehicle Management System",
    tech: "React, Laravel API",
    features: [
      "Vehicle recommendation engine",
      "Secure user authentication",
      "Real-time assistance on platform navigation",
    ],
    highlight:
      "An intelligent AI assistant that streamlines user interaction by providing instant responses, recommendations, and support across the vehicle management platform.",
    link: "https://github.com/DinithaNipunaka/AI-Chat-Bot-for-Vehicle-Management-System",
    icon: "vehicle-chatbot.png",
    category: "ai",
  },
  {
    title: "Real-Time Intelligent Traffic Monitoring & Control System",
    tech: "Python, OpenCV, YOLOv8",
    features: [
      "Dual object detection (vehicles & pedestrians)",
      "Adaptive traffic signal control based on live data",
      "Live annotated video feed with counters",
      "Keyboard-interactive system controls",
    ],
    highlight:
      "An AI-powered real-time traffic management system that uses computer vision and IoT to prioritize pedestrian safety and optimize traffic flow through intelligent signal control.",
    link: "https://github.com/DinithaNipunaka/Real-Time-Intelligent-Traffic-Monitoring-and-Control-System",
    icon: "traffic-monitoring.jpg",
    category: "ai",
  },
  {
    title: "Vehicle Rental System",
    tech: "PHP, MySQL, HTML/CSS",
    features: [
      "Vehicle listing and booking management",
      "User and admin authentication",
      "Real-time availability tracking",
      "Booking history and invoice generation",
    ],
    highlight:
      "A web-based system that simplifies vehicle rentals by allowing users to browse, book, and manage vehicles with real-time availability and secure authentication.",
    link: "https://github.com/DinithaNipunaka/Vehicle-Rental-System",
    icon: "vehicle-rental.jpg",
    category: "web",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">🛠️ My Projects</h2>
        <p className="section-subtitle">Explore my development work across various technologies</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${project.category}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="project-inner">
        <div className="project-header">
          <img
            src={`/project-icons/${project.icon}`}
            alt={project.title}
            className="project-icon"
            onError={(e) => {
              e.target.src = "/project-icons/default-project.png";
            }}
          />
          <div className="project-title-wrapper">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-year">{project.year}</span>
          </div>
        </div>
        <p className="project-tech">
          <strong>Tech Stack:</strong> {project.tech}
        </p>
        <div className={`project-features-container ${isExpanded ? "expanded" : ""}`}>
          <ul className="project-features">
            {project.features.slice(0, isExpanded ? project.features.length : 3).map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          {!isExpanded && project.features.length > 3 && (
            <div className="features-more">+{project.features.length - 3} more</div>
          )}
        </div>
        <div className="project-highlight">
          <strong>Highlight:</strong> {project.highlight}
        </div>
        <div className="project-footer">
          <span className={`project-category ${project.category}`}>
            {project.category === "web" && "🌐 Web"}
            {project.category === "ai" && "🤖 AI"}
            {project.category === "desktop" && "💻 Desktop"}
          </span>
          <span className="project-link">View Project →</span>
        </div>
      </div>
    </a>
  );
};

export default Projects;