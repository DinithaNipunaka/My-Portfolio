import React, { useEffect, useState,useRef } from 'react';
import './Experience.css';

const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML5', icon: 'html-5.png' },
      { name: 'CSS', icon: 'css.png' },
      { name: 'Bootstrap', icon: 'bootstrap.png' },
      { name: 'JavaScript', icon: 'javascript.png' },
      { name: 'React', icon: 'react.png' },
      { name: 'Angular', icon: 'angular.png' },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'PHP', icon: 'php.png' },
      { name: 'Laravel', icon: 'laravel.png' },
      { name: 'Java', icon: 'java.png' },
      { name: 'Python', icon: 'python.png' },
      { name: 'Rust', icon: 'rust.png' },
    ],
  },
  {
    category: 'Database Development',
    items: [
      { name: 'MySQL', icon: 'mysql.png' },
      { name: 'MongoDB', icon: 'mongodb.png' },
    ],
  },
  {
    category: 'Version Control',
    items: [
      { name: 'Git', icon: 'git.png' },
      { name: 'GitHub', icon: 'github.png' },
    ],
  },
  {
    category: 'API Development & Integration',
    items: [
      { name: 'Postman', icon: 'postman.png' },
    ],
  },
  {
    category: 'Testing & Debugging',
    items: [
      { name: 'Selenium IDE', icon: 'selenium.png' },
      { name: 'CircleCI', icon: 'circleci.png' },
    ],
  },
  {
    category: 'AI & Data Science Tools',
    items: [
      { name: 'Jupyter Notebook', icon: 'jupyter.png' },
      { name: 'Google Colab', icon: 'colab.png' },
      { name: 'OpenCV', icon: 'opencv.png' },
      { name: 'TensorFlow', icon: 'tensorflow.png' },
      { name: 'NumPy', icon: 'numpy.png' },
      { name: 'Pandas', icon: 'pandas.png' },
    ],
  },
  {
    category: 'Networking',
    items: [
      { name: 'Cisco Packet Tracer', icon: 'Cisco.png' },
    ],
  },
  {
    category: 'Bioinformatics',
    items: [
      { name: 'Bio Python', icon: 'biopy.png' },
    ],
  },
  {
    category: 'Other Skills',
    items: [
      { name: 'Linux Basics', icon: 'linux.png' },
      { name: 'Figma (UI/UX Design)', icon: 'figma.png' },
      { name: 'Canva', icon: 'canva.png' },
      { name: 'Documentation', icon: 'word.png' },
      { name: 'CorelDRAW', icon: 'CorelDRAW.png' },
      { name: 'Adobe Illustrator', icon: 'Adobe Illustrator.png' },
    ],
  },
];

const Experience = () => {

  const [activeGlowIndex, setActiveGlowIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const allSkills = skills.flatMap((cat) => cat.items);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGlowIndex((prevIndex) => (prevIndex + 1) % allSkills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [allSkills.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(entry.target.dataset.category);
            setVisibleCategories((prev) => [...new Set([...prev, categoryIndex])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const categoryElements = document.querySelectorAll('.skill-category');
    categoryElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

 
  
  
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
  

  let skillCounter = 0;

  return (
    <section  id="experience"  ref={sectionRef}  className="experience-section">
      <div className="experience-header">
        <h2 className="experience-title">Technical Skills & Experience</h2>
        <p className="experience-subtitle">
          Crafting digital experiences with modern technologies
        </p>
      </div>
      
      <div className="experience-container">
        {skills.map((skillCategory, catIdx) => {
          const isVisible = visibleCategories.includes(catIdx);
          
          return (
            <div
              className={`skill-category ${isVisible ? 'animate-in' : ''}`}
              key={catIdx}
              data-category={catIdx}
            >
              <div className="category-header">
                <h3 className="category-title">{skillCategory.category}</h3>
                <div className="category-line"></div>
              </div>
              
              <div className="skills-grid">
                {skillCategory.items.map((skill, idx) => {
                  const isGlowing = skillCounter === activeGlowIndex;
                  const card = (
                    <div
                      className={`skill-card ${isGlowing ? 'glow' : ''}`}
                      key={idx}
                      style={{ '--delay': `${idx * 0.1}s` }}
                    >
                      <div className="skill-card-inner">
                        <div className="skill-icon-container">
                          <img
                            src={`/skill-icons/${skill.icon}`}
                            alt={skill.name}
                            className="skill-image"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="skill-fallback" style={{ display: 'none' }}>
                            {skill.name.charAt(0).toUpperCase()}
                          </div>
                        </div>
                        <span
                          className="skill-name"
                          data-length={skill.name.length}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <div className="skill-card-glow"></div>
                    </div>
                  );
                  skillCounter++;
                  return card;
                })}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Experience;