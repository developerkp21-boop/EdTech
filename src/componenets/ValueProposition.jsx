function ValueProposition() {
  return (
    <>
      <div className="value-proposition-section my-5">
        <div className="container">
          {/* Header */}
          <div className="row text-center mb-5">
            <div className="col-12">
              <h1 className="vp-title">
                Adaptive learning path + best teachers = Math mastery
              </h1>
              <p className="vp-subtitle">The guaranteed formula to be a Math wizard</p>
            </div>
          </div>

          {/* Cards Section - 3 Cards + 1 Image in One Row */}
          <div className="row g-4">
            {/* Card 1 - Professional Curriculum */}
            {/* Card 1 - Professional Curriculum */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="vp-card vp-card-pink">
                <div className="d-flex align-items-center">
                  <div className="vp-card-icon ">
                    <img src="images/image 16.svg" alt="" />
                  </div>
                  <h3 className="vp-card-title mb-0">
                    Professional Curriculum Helps Parents Rest Easy
                  </h3>
                </div>
                <ul className="vp-card-list">
                  <li>Systematic curriculum for kids ages 3-8</li>
                  <li>Interactive AI content fosters and maintains kids' interest in learning</li>
                  <li>Immersive classes with interactive learning experiences</li>
                </ul>
              </div>
            </div>

            {/* Card 2 - Personal Mentoring */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="vp-card vp-card-yellow">
                <div className="d-flex align-items-center">
                  <div className="vp-card-icon">
                    <img src="images/image 17.svg" alt="" />
                  </div>
                  <h3 className="vp-card-title mb-0">
                    Personal Mentoring Service
                  </h3>
                </div>
                <ul className="vp-card-list">
                  <li>Your Mentor provides 1-on-1 mentoring at any time</li>
                  <li>Daily reports keep you up to date on your child's learning</li>
                  <li>Instant feedback keeps kids encouraged and motivated</li>
                </ul>
              </div>
            </div>

            {/* Card 3 - Math Learning App */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="vp-card vp-card-blue">
                <div className="d-flex align-items-center ">
                  <div className="vp-card-icon">
                    <img src="images/image 4.svg" alt="" />
                  </div>
                  <h3 className="vp-card-title mb-0">
                    A Math Learning App Kids Crave
                  </h3>
                </div>
                
                <ul className="vp-card-list">
                  <li>Progressive learning pathways scientifically developed for each child</li>
                  <li>Progressive learning pathways scientifically developed for each child</li>
                </ul>
              </div>
            </div>

            {/* Column 4 - Student Image */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="vp-image-container">
                <img 
                  src="/images/KID 02-01.svg" 
                  alt="Happy student celebrating" 
                  className="vp-student-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('vp-image-placeholder');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ValueProposition;
