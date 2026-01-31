function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white  py-3 px-5 fixed-top">
      <div className="container px-5">
        {/* LEFT: Logo */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <img src="/images/logo.png" alt="" />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CENTER + RIGHT */}
        <div className="collapse navbar-collapse" id="mainMenu">
          {/* CENTER MENU */}
          <ul className="navbar-nav me-auto ms-4 gap-3">
            <li className="nav-item">
              <a className="nav-link btn  px-3 py-1 " href="#">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link btn  px-3 py-1 " href="#">
                Math
              </a>
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">
            <span className="text-success fw-semibold d-none d-lg-flex align-items-center">
              <span className="telephone me-2">
                <i className="bi bi-telephone-fill me-2"></i>
              </span>

              <div>
                <span className="text-muted telephone-time">
                  Mon-Sat:12:30-20:30
                </span>
                
                <span className="telephone-number"> +918806400888</span>
              </div>
            </span>

            <a href="#" className="btn bookbtn">
              <i class="bi bi-stars me-2"></i> Book a FREE Trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
