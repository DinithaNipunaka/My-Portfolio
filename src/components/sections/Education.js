import React, { useState, useEffect } from "react";
import sibaLogo from "../../assets/siba-logo.png";
import stSylLogo from "../../assets/po.png";

const Education = ({ darkMode = false }) => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      institute: "SIBA Campus, Pallekele",
      duration: "2022 – Present",
      status: "Undergraduate",
      logo: sibaLogo,
      color: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    },
    {
      id: 2,
      degree: "GCE A/L Completed",
      institute: "Poramadulla Central College",
      duration: "2021",
      status: "Completed",
      logo: stSylLogo,
      color: "linear-gradient(135deg, #8b5cf6, #ec4899)"
    },
    {
      id: 3,
      degree: "GCE O/L Completed",
      institute: "Poramadulla Central College",
      duration: "2016",
      status: "Completed",
      logo: stSylLogo,
      color: "linear-gradient(135deg, #10b981, #14b8a6)"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === educationData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, educationData.length]);

  const handleDotClick = (index) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => {
      setIsAnimating(false);
      setIsAutoPlay(true);
    }, 1000);
  };

  const handleNavClick = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsAutoPlay(false);
    
    if (direction === 'prev') {
      setCurrentIndex(currentIndex === 0 ? educationData.length - 1 : currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex === educationData.length - 1 ? 0 : currentIndex + 1);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
      setIsAutoPlay(true);
    }, 1000);
  };

  const currentEdu = educationData[currentIndex];
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  return (
    <section 
      id="Education"
      className={`education-section ${darkMode ? 'dark' : 'light'}`}
      style={{
        minHeight: '100vh',
        padding: isMobile ? '3rem 0.5rem' : isTablet ? '4rem 1rem' : '5rem 1rem',
        background: darkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #f1f5f9 50%, #ffffff 75%, #f8fafc 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite',
        color: darkMode ? '#ffffff' : '#1f2937',
        transition: 'all 0.8s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.03,
        background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000'%3E%3Cpath d='M50 50m-25 0a25,25 0 1,1 50,0a25,25 0 1,1 -50,0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        animation: 'float 20s ease-in-out infinite'
      }} />

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        position: 'relative', 
        zIndex: 10,
        padding: isMobile ? '0 0.5rem' : '0 1rem'
      }}>
        {/* Enhanced Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: isMobile ? '3rem' : '5rem',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: isMobile ? '0.75rem' : '1.5rem',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            padding: isMobile ? '0.75rem 1.25rem' : '1rem 2rem',
            borderRadius: '50px',
            background: darkMode 
              ? 'rgba(59, 130, 246, 0.1)' 
              : 'rgba(59, 130, 246, 0.05)',
            border: darkMode 
              ? '1px solid rgba(59, 130, 246, 0.3)' 
              : '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              fontSize: isMobile ? '1.75rem' : '2.5rem',
              padding: '0.5rem',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              animation: 'pulse 2s infinite'
            }}>
              🎓
            </div>
            <h2 style={{
              fontSize: isMobile ? '1.75rem' : isTablet ? '2.5rem' : '3rem',
              fontWeight: '800',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              Education Journey
            </h2>
          </div>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.25rem',
            maxWidth: '700px',
            margin: '0 auto',
            color: darkMode ? '#cbd5e1' : '#64748b',
            lineHeight: '1.7',
            fontWeight: '400',
            padding: isMobile ? '0 0.5rem' : '0'
          }}>
            Explore my academic milestones and educational achievements that have shaped my professional expertise
          </p>
        </div>

        {/* Enhanced Main Card Container */}
        <div style={{
          position: 'relative',
          maxWidth: '1100px',
          margin: `0 auto ${isMobile ? '2rem' : '4rem'} auto`,
          perspective: '1000px'
        }}>
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: isMobile ? '20px' : '32px',
            padding: isMobile ? '1.5rem' : isTablet ? '2.5rem' : '4rem',
            background: darkMode 
              ? 'rgba(30, 41, 59, 0.6)' 
              : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(30px)',
            border: darkMode 
              ? '1px solid rgba(71, 85, 105, 0.3)' 
              : '1px solid rgba(226, 232, 240, 0.6)',
            boxShadow: darkMode 
              ? '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
              : '0 20px 50px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.8)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isAnimating ? 'scale(0.98)' : 'scale(1)',
            position: 'relative'
          }}>
            {/* Animated Border Effect */}
            <div style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: isMobile ? '22px' : '34px',
              background: `linear-gradient(45deg, ${currentEdu.color}, transparent, ${currentEdu.color})`,
              backgroundSize: '400% 400%',
              animation: 'borderGlow 8s ease infinite',
              zIndex: -1,
              opacity: 0.6
            }} />

            {/* Enhanced Navigation Arrows - Hidden on mobile */}
            {!isMobile && ['prev', 'next'].map((direction, idx) => (
              <button
                key={direction}
                onClick={() => handleNavClick(direction)}
                disabled={isAnimating}
                style={{
                  position: 'absolute',
                  top: '50%',
                  [direction === 'prev' ? 'left' : 'right']: '1rem',
                  transform: 'translateY(-50%)',
                  width: isTablet ? '50px' : '60px',
                  height: isTablet ? '50px' : '60px',
                  borderRadius: '50%',
                  background: darkMode 
                    ? 'rgba(51, 65, 85, 0.8)' 
                    : 'rgba(255, 255, 255, 0.9)',
                  border: darkMode 
                    ? '1px solid rgba(71, 85, 105, 0.5)' 
                    : '1px solid rgba(226, 232, 240, 0.8)',
                  color: darkMode ? '#e2e8f0' : '#475569',
                  cursor: isAnimating ? 'not-allowed' : 'pointer',
                  fontSize: isTablet ? '1.5rem' : '1.75rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 20,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)',
                  opacity: isAnimating ? 0.5 : 1,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
                }}
                onMouseEnter={(e) => {
                  if (!isAnimating) {
                    e.target.style.transform = 'translateY(-50%) scale(1.1)';
                    e.target.style.background = darkMode ? 'rgba(71, 85, 105, 0.9)' : 'rgba(255, 255, 255, 1)';
                    e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(-50%) scale(1)';
                  e.target.style.background = darkMode ? 'rgba(51, 65, 85, 0.8)' : 'rgba(255, 255, 255, 0.9)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
                }}
              >
                {direction === 'prev' ? '‹' : '›'}
              </button>
            ))}

            {/* Enhanced Card Content */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              gap: isMobile ? '1.5rem' : '3rem',
              position: 'relative',
              zIndex: 10
            }}>
              {/* Enhanced Logo Section */}
              <div style={{
                flexShrink: 0,
                textAlign: 'center',
                position: 'relative'
              }}>
                {/* Glowing Ring */}
                <div style={{
                  position: 'absolute',
                  inset: isMobile ? '-10px' : '-20px',
                  borderRadius: '50%',
                  background: currentEdu.color,
                  opacity: 0.2,
                  animation: 'pulse 3s ease-in-out infinite',
                  filter: 'blur(20px)'
                }} />
                
                <div style={{
                  width: isMobile ? '100px' : '140px',
                  height: isMobile ? '100px' : '140px',
                  borderRadius: '50%',
                  background: currentEdu.color,
                  padding: isMobile ? '4px' : '6px',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  margin: '0 auto',
                  position: 'relative',
                  transition: 'all 0.5s ease'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: darkMode ? '#1e293b' : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '0.5rem' : '1rem',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={currentEdu.logo} 
                      alt={`${currentEdu.institute} Logo`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transition: 'all 0.5s ease',
                        filter: darkMode ? 'brightness(1.1)' : 'brightness(1)'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<div style="font-size: 3rem;">🎓</div>';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div style={{
                flex: 1,
                textAlign: isMobile ? 'center' : 'left'
              }}>
                {/* Status Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: isMobile ? '1rem' : '1.5rem',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: isMobile ? '0.5rem' : '0.75rem',
                    padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
                    borderRadius: '50px',
                    fontSize: isMobile ? '0.85rem' : '0.95rem',
                    fontWeight: '600',
                    background: currentEdu.status === 'Undergraduate'
                      ? (darkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)')
                      : (darkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)'),
                    color: currentEdu.status === 'Undergraduate'
                      ? (darkMode ? '#60a5fa' : '#1d4ed8')
                      : (darkMode ? '#34d399' : '#059669'),
                    border: currentEdu.status === 'Undergraduate'
                      ? (darkMode ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(59, 130, 246, 0.2)')
                      : (darkMode ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(16, 185, 129, 0.2)'),
                    animation: currentEdu.status === 'Undergraduate' ? 'pulse 2s infinite' : 'none'
                  }}>
                    <span style={{ fontSize: isMobile ? '0.9rem' : '1.1rem' }}>
                      {currentEdu.status === 'Undergraduate' ? '🚀' : '🏆'}
                    </span>
                    {currentEdu.status}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 style={{
                  fontSize: isMobile ? '1.25rem' : isTablet ? '1.75rem' : '2rem',
                  fontWeight: '700',
                  marginBottom: isMobile ? '1rem' : '1.5rem',
                  lineHeight: '1.3',
                  letterSpacing: '-0.01em'
                }}>
                  {currentEdu.degree}
                </h3>

                {/* Institute and Duration Info */}
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '0.75rem' : '1.5rem',
                  marginBottom: isMobile ? '1.5rem' : '2rem',
                  justifyContent: isMobile ? 'center' : 'flex-start'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '0.5rem' : '0.75rem',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                    fontWeight: '500',
                    color: darkMode ? '#cbd5e1' : '#64748b'
                  }}>
                    <span style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>📍</span>
                    <span>{currentEdu.institute}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '0.5rem' : '0.75rem',
                    fontSize: isMobile ? '1rem' : '1.2rem',
                    fontWeight: '500',
                    color: darkMode ? '#cbd5e1' : '#64748b'
                  }}>
                    <span style={{ fontSize: isMobile ? '1.1rem' : '1.3rem' }}>📅</span>
                    <span>{currentEdu.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '0.75rem' : '1rem',
          marginBottom: isMobile ? '2rem' : '3rem'
        }}>
          {educationData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              disabled={isAnimating}
              style={{
                width: index === currentIndex ? isMobile ? '2rem' : '3rem' : '10px',
                height: isMobile ? '8px' : '12px',
                borderRadius: '6px',
                border: 'none',
                cursor: isAnimating ? 'not-allowed' : 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: index === currentIndex 
                  ? currentEdu.color
                  : (darkMode ? '#475569' : '#cbd5e1'),
                opacity: isAnimating && index !== currentIndex ? 0.5 : 1,
                transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)',
                boxShadow: index === currentIndex ? '0 4px 15px rgba(0, 0, 0, 0.2)' : 'none'
              }}
              aria-label={`Go to education ${index + 1}`}
              onMouseEnter={(e) => {
                if (!isAnimating && index !== currentIndex) {
                  e.target.style.transform = 'scale(1.2)';
                  e.target.style.background = darkMode ? '#64748b' : '#94a3b8';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = darkMode ? '#475569' : '#cbd5e1';
                }
              }}
            />
          ))}
        </div>

        {/* Enhanced Auto-play Control */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            style={{
              padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: isMobile ? '0.9rem' : '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: isAutoPlay
                ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                : (darkMode ? 'rgba(51, 65, 85, 0.8)' : 'rgba(226, 232, 240, 0.8)'),
              color: isAutoPlay
                ? '#ffffff'
                : (darkMode ? '#e2e8f0' : '#334155'),
              boxShadow: isAutoPlay 
                ? '0 8px 20px rgba(59, 130, 246, 0.3)' 
                : '0 5px 15px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              if (isAutoPlay) {
                e.target.style.background = 'linear-gradient(45deg, #2563eb, #7c3aed)';
                e.target.style.transform = 'translateY(-2px)';
              } else {
                e.target.style.background = darkMode ? 'rgba(71, 85, 105, 0.9)' : 'rgba(203, 213, 225, 0.9)';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.background = isAutoPlay
                ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                : (darkMode ? 'rgba(51, 65, 85, 0.8)' : 'rgba(226, 232, 240, 0.8)');
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ marginRight: '0.5rem', fontSize: isMobile ? '1rem' : '1.1rem' }}>
              {isAutoPlay ? '⏸️' : '▶️'}
            </span>
            {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
          </button>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes borderGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .education-section {
          scroll-behavior: smooth;
        }
        
        @media (max-width: 640px) {
          .education-section {
            min-height: auto;
            padding: 2rem 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;