function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Like well-made animations, Creta Class is well designed to cater to kids' feature. My son is 4 years old, and he is immersed in its interesting and simple exercises.",
      name: "Lisa",
      image: "/images/lisa.png" // Placeholder
    },
    {
      id: 2,
      text: "Like well-made animations, Creta Class is well designed to cater to kids' feature. My son is 4 years old, and he is immersed in its interesting and simple exercises.",
      name: "Jimmy",
      image: "/images/jimmy.png" // Placeholder
    }
  ];

  return (
    <section className="testimonials-section my-5">
      <div className="container text-center">
        {/* Top Badge */}
        <div className="testi-top-badge d-inline-block">
          <img src="/images/trophy-gold.png" alt="Trophy" className="testi-trophy-img" />
          <p className="testi-badge-text">
            Creta Class Has Industry-Leading <br />
            Renewals Of Above 80%
          </p>
        </div>

        {/* Heading */}
        <h2 className="testi-main-title">Don't Just Take Our Word For It</h2>

        {/* Decorative Trophy Sketch */}
        <div className="testi-decoration testi-sketch-trophy">
          <img src="/images/sketch-trophy.svg" alt="" />
        </div>

        {/* Testimonials Grid */}
        <div className="row justify-content-center mt-5 position-relative">
          {testimonials.map((t) => (
            <div key={t.id} className="col-12 col-lg-5 mb-4">
              <div className="testi-card">
                {/* Green Quote Mark (Top Left) */}
                <div className="testi-quote-mark top-left">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M12.5 15.8333C12.5 14.9167 13.25 14.1667 14.1667 14.1667H17.5V17.5C17.5 21.1833 14.5167 24.1667 10.8333 24.1667V20.8334C10.8333 19.9167 11.5833 19.1667 12.5 19.1667V15.8333ZM25.8333 15.8333C25.8333 14.9167 26.5833 14.1667 27.5 14.1667H30.8333V17.5C30.8333 21.1833 27.85 24.1667 24.1667 24.1667V20.8334C24.1667 19.9167 24.9167 19.1667 25.8333 19.1667V15.8333Z" fill="#32D74B" fillOpacity="0.6"/>
                  </svg>
                </div>

                <div className="d-flex align-items-center justify-content-between w-100">
                  <div className="testi-text-side text-start">
                    <p className="testi-text">{t.text}</p>
                  </div>
                  
                  <div className="testi-author-details mt-4 mt-md-0">
                    <div className="testi-profile-wrapper">
                      <img src={t.image} alt={t.name} className="testi-profile-img" />
                      <div className="testi-pin-dot"></div>
                    </div>
                    <span className="testi-name">- {t.name}</span>
                  </div>
                </div>

                {/* Green Quote Mark (Bottom Right) */}
                <div className="testi-quote-mark bottom-right">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M27.5 24.1667C27.5 25.0833 26.75 25.8333 25.8333 25.8333H22.5V22.5C22.5 18.8167 25.4833 15.8333 29.1667 15.8333V19.1667C29.1667 20.0833 28.4167 20.8333 27.5 20.8333V24.1667ZM14.1667 24.1667C14.1667 25.0833 13.4167 25.8333 12.5 25.8333H9.16667V22.5C9.16667 18.8167 12.15 15.8333 15.8333 15.8333V19.1667C15.8333 20.0833 15.0833 20.8333 14.1667 20.8333V24.1667Z" fill="#32D74B" fillOpacity="0.6"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Atom Sketch */}
        <div className="testi-decoration testi-sketch-atom">
          <img src="/images/atom-blue.svg" alt="" />
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
