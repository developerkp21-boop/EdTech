import { useState } from 'react';

function Skills() {
    const [activeTab, setActiveTab] = useState('s3');

    return (
        <section className="skills-section my-5">
            <div className="container">
                {/* Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-8 text-center">
                        <h1 className="skills-title">Cultivate Thinking Skills From All Aspects</h1>
                        <p className="skills-subtitle">
                            Our Expert Advisors Can Help You Find The Right Workplace Solution For You And Your Team
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="row justify-content-center mb-0">
                    <div className="col-12 col-lg-8">
                        <div className="skills-tabs d-flex justify-content-center">
                            <div 
                                className={`skill-tab ${activeTab === 's2' ? 'active' : ''}`}
                                onClick={() => setActiveTab('s2')}
                            >
                                <span className="tab-code">S2</span>
                                <span className="tab-age">3-4 Years Old</span>
                            </div>
                            <div 
                                className={`skill-tab ${activeTab === 's3' ? 'active' : ''}`}
                                onClick={() => setActiveTab('s3')}
                            >
                                <span className="tab-code">S3</span>
                                <span className="tab-age">5-6 Years Old</span>
                            </div>
                            <div 
                                className={`skill-tab ${activeTab === 's4' ? 'active' : ''}`}
                                onClick={() => setActiveTab('s4')}
                            >
                                <span className="tab-code">S4</span>
                                <span className="tab-age">7-8 Years Old</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="skills-card">
                            <div className="row align-items-center">
                                {/* Left Column: Image */}
                                <div className="col-12 col-lg-6">
                                    <div className="skills-image-container">
                                        <div className="skills-image-wrapper">
                                            <img src="/images/Rectangle.svg" alt="Student thinking" className="skills-student-img"/>
                                            {/* Decorative overlay frame based on mockup */}
                                            <div className="skills-frame-overlay"></div>
                                        </div>
                                        {/* <div className="skills-dimension-badge">505.34 × 475.4</div> */}
                                    </div>
                                </div>

                                {/* Right Column: Skills List */}
                                <div className="col-12 col-lg-6">
                                    <div className="skills-list">
                                        {/* Skill 1 */}
                                        <div className="skill-item">
                                            <div className="skill-icon-img-wrapper">
                                                <img src="/images/image 11.svg" alt="" />
                                            </div>
                                            <div className="skill-content">
                                                <h4>Number Sense and Operations</h4>
                                                <p>Fluently compose and decompose numbers within 10</p>
                                                <p>Understand addition and subtraction within 10</p>
                                            </div>
                                        </div>

                                        {/* Skill 2 */}
                                        <div className="skill-item">
                                            <div className="skill-icon-img-wrapper">
                                                <img src="/images/image 12.svg" alt="" />
                                            </div>
                                            <div className="skill-content">
                                                <h4>Geometry</h4>
                                                <p>Recognize 2D and 3D shapes</p>
                                                <p>Identify defining attributes of shapes (edges, vertices, cross sections, nets, etc.)</p>
                                            </div>
                                        </div>

                                        {/* Skill 3 */}
                                        <div className="skill-item">
                                            <div className="skill-icon-img-wrapper">
                                                <img src="/images/Group 7.svg" alt="" />
                                            </div>
                                            <div className="skill-content">
                                                <h4>Logic and Patterns</h4>
                                                <p>Use analogical reasoning to solve Sudoku puzzles and understand the concept of cycles</p>
                                            </div>
                                        </div>

                                        {/* Skill 4 */}
                                        <div className="skill-item">
                                            <div className="skill-icon-img-wrapper">
                                                <img src="/images/image 14.svg" alt="" />
                                            </div>
                                            <div className="skill-content">
                                                <h4>Problem Solving</h4>
                                                <p>Learn tangram puzzles and practice creating shapes using tangram pieces</p>
                                                <p>Measure by iterating length units</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;
