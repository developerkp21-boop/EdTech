function Hero() {
  return (
    <>
    <img className="hero-verctor" src="/images/Vector.svg" alt="" />
        <img className="paper-plane" src="/images/Group.svg" alt="" />
      <div className="container hero my-5">
        
        <div className="row px-lg-5">
          <div className="col-12 col-lg-6 py-3 px-lg-5 Postition-relative">
            <h1 className="hero-h1 my-5">
              Making Kids Fall in Love with Math!
            </h1>
            <p className="hero-p mb-4">Book your FREE class with age group</p>

            <div className="row gap-4 mb-5 px-2">
              <div className="age-group">
                S2 <br /> <span>3-4 Year Old</span>
              </div>
              <div className="age-group">
                {" "}
                S3 <br />
                <span>3-4 Year Old </span>
              </div>
              <div className="age-group">
                {" "}
                S4 <br />
                <span>3-4 Year Old </span>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12 getcall-section">
                {/* Country Code */}
                <div className="country-code">
                  +91 <span className="arrow">▼</span>
                </div>

                {/* Phone Input */}
                <input
                  type="text"
                  className="phone-input"
                  placeholder="9876543323"
                />

                {/* Button */}
                <button className="btn">GET A CALL BACK</button>
              </div>
            </div>
            <p className="text-center hero-download-app text-muted">
              Download our app ? <a href="#">Download</a>
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <img src="/images/KID-01.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
