import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4">
          {/* Column 1: Creta Class & App Stores */}
          <div className="col-12 col-md-6 col-lg-2">
            <h5 className="footer-title">Creta Class</h5>
            <div className="app-store-buttons mb-4">
              <a href="#" className="d-block mb-3">
                <img src="https://creta-class.s3.ap-southeast-1.amazonaws.com/website/v2/assets/images/footer/app-store.png" alt="App Store" className="app-store-img" />
              </a>
              <a href="#" className="d-block">
                <img src="https://creta-class.s3.ap-southeast-1.amazonaws.com/website/v2/assets/images/footer/google-play.png" alt="Google Play" className="app-store-img" />
              </a>
            </div>
            
            <h5 className="footer-title mt-4">Certified</h5>
            <div className="certified-grid">
              <div className="certified-badge">
                <img src="https://creta-class.s3.ap-southeast-1.amazonaws.com/website/v2/assets/images/footer/badge1.png" alt="Certified" />
              </div>
              <div className="certified-badge">
                <img src="https://creta-class.s3.ap-southeast-1.amazonaws.com/website/v2/assets/images/footer/badge2.png" alt="Certified" />
              </div>
              <div className="certified-badge">
                <img src="https://creta-class.s3.ap-southeast-1.amazonaws.com/website/v2/assets/images/footer/badge3.png" alt="Certified" />
              </div>
              <div className="certified-badge">
                <img src="https://creta-class.s3.ap-southeast-1.amazonaws.com/website/v2/assets/images/footer/badge4.png" alt="Certified" />
              </div>
            </div>
          </div>

          {/* Column 2 & 3: School (Split into 2 sub-columns for states) */}
          <div className="col-12 col-md-6 col-lg-4">
            <h5 className="footer-title">School</h5>
            <div className="row g-0">
              <div className="col-6">
                <ul className="footer-links list-unstyled">
                  <li><a href="#">India</a></li>
                  <li><a href="#">Maharashtra</a></li>
                  <li><a href="#">Bihar</a></li>
                  <li><a href="#">Gujarat</a></li>
                  <li><a href="#">Karnataka</a></li>
                  <li><a href="#">Andhra Pradesh</a></li>
                  <li><a href="#">Madhya Pradesh</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="footer-links list-unstyled">
                  <li><a href="#">West Bengal</a></li>
                  <li><a href="#">Telangana</a></li>
                  <li><a href="#">Uttar Pradesh</a></li>
                  <li><a href="#">Tamil Nadu</a></li>
                  <li><a href="#">Rajasthan</a></li>
                  <li><a href="#">Kerala</a></li>
                  <li><a href="#">kid store</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Math */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-title">Math</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Numbers and Operations</a></li>
              <li><a href="#">Geometry</a></li>
              <li><a href="#">Logic and Patterns</a></li>
              <li><a href="#">Problem Solving</a></li>
              <li><a href="#">Measurement and Data</a></li>
              <li><a href="#">Attention and Memory</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="footer-title">Contact Us</h5>
            <div className="social-icons mb-4">
              <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="me-3"><i className="fab fa-youtube"></i></a>
              <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="contact-info">
              <p className="mb-1"><i className="fas fa-phone-alt me-2"></i> Mon-Sat: 12:30-20:30</p>
              <p className="contact-phone"><a href="tel:+918059490088">+918059490088</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom mt-5 pt-4 border-top">
          <div className="row align-items-center">
            <div className="col-12 text-center text-white-50 small">
              <p className="mb-2">6 RAFFLES QUAY #14-06 SINGAPORE(048580)</p>
              <p className="mb-0">
                <a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a> | 
                <a href="#" className="text-white-50 text-decoration-none ms-2">Children's Privacy Policy</a> | 
                <span className="ms-2">email: <a href="mailto:ind_service@cretaclassName.com" className="text-white-50 text-decoration-none">ind_service@cretaclassName.com</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="#" className="floating-whatsapp-btn">
        <div className="whatsapp-icon-bg">
          <i className="fab fa-whatsapp"></i>
        </div>
        <span className="whatsapp-label">Contact Us</span>
      </a>
    </footer>
  );
};

export default Footer;
