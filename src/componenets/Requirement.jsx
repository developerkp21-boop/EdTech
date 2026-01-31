import { useState } from 'react';

export default function Requirement() {
  const [selectedAge, setSelectedAge] = useState(null);

  const ageGroups = [
    { id: 1, label: 'Age 3-4', icon: '/images/image 16.svg' },
    { id: 2, label: 'Age 3-4', icon: '/images/image 17.svg' },
    { id: 3, label: 'Age 3-4', icon: '/images/image 4.svg' }
  ];

  return (
    <section className="requirement-section p-0 m-0">
      {/* SVG Background Layer */}
      <div className="req-svg-background">
        <svg 
          className="req-svg-wave wave-bg" 
          viewBox="0 0 564 1280" 
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 0
               C 260 0, 420 140, 420 300
               C 420 420, 300 470, 300 600
               C 300 820, 520 820, 520 1020
               C 520 1180, 360 1280, 120 1280
               L 0 1280
               Z"
            fill="#FFD2D2"
          />
        </svg>
        <svg 
          className="req-svg-wave wave-top" 
          viewBox="0 0 564 1280" 
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 0
               C 240 0, 400 130, 400 280
               C 400 400, 280 450, 280 580
               C 280 800, 500 800, 500 1000
               C 500 1160, 340 1260, 100 1260
               L 0 1260
               Z"
            fill="#FFBDBD"
          />
        </svg>
      </div>

      {/* Background Decorations */}
      <div className="req-decoration req-purple-circle"></div>
      
      <div className="w-100 p-0 m-0 overflow-hidden">
        <div className="row justify-content-center m-0 g-0">
          <div className="col-12 text-center">
            <h2 className="req-title-main">Create Your Own Requirement</h2>
          </div>
        </div>

        <div className="row align-items-center position-relative m-0 ps-5 g-0">
          
          {/* Left Column: Illustration */}
          <div className="col-12 col-lg-6 position-relative">
            <div className="req-illustration-container">
              {/* Main Image */}
              <div className="req-main-img-wrapper">
                <img 
                  src="/images/KID-03.svg" 
                  alt="Student learning" 
                  className="req-main-img"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="col-12 col-lg-6">
            <div className="req-content-wrapper">
              <div className="req-step-container">
                <h4 className="req-step-title">
                  1. Firstly, Select Your Kid's Age Group
                </h4>
                <p className="req-required-text">This Question Is Required. *</p>

                <div className="req-age-grid">
                  {ageGroups.map((group) => (
                    <div 
                      key={group.id}
                      className={`req-age-card ${selectedAge === group.id ? 'active' : ''}`}
                      onClick={() => setSelectedAge(group.id)}
                    >
                      <div className="req-card-circle-wrapper">
                         <img src={group.icon} alt={group.label} className="req-age-icon" />
                      </div>
                      <div className="req-card-info">
                        <span className="req-card-age-label">Age</span>
                        <span className="req-card-years">3-4</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-3">
                  <p className="req-helper-text">CHOOSE ANY ONE OF THEM</p>
                </div>

                <div className="req-navigation d-flex justify-content-between align-items-center mt-5">
                   <button className="req-nav-btn btn-prev">
                     ← Previous
                   </button>
                   <button className="req-nav-btn btn-next">
                     Next →
                   </button>
                </div>

                 {/* Decorative Plane Sketch */}
                <div className="req-plane-decoration-fixed">
                   <img src="/images/Group.svg" alt="" style={{width: '100%', opacity: 0.5}} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
