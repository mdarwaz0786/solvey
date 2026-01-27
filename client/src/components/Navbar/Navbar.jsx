import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const aboutRoutes = [
    "/our-credo",
    "/our-vision",
    "/our-mission",
    "/our-values",
  ];

  const isAboutActive = aboutRoutes.some(path => location.pathname.startsWith(path));

  return (
    <>
      <header id="pq-header" className="pq-header-default">
        <div class="pq-top-header">
          <div class="container">
            <div class="row flex-row-reverse">
              <div class="col-md-6 text-right">
                <div class="pq-header-social text-right">
                  <ul>
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="pq-header-contact ">
                  <ul>
                    <li>
                      <a href="tel:+910123456789"><i class="fas fa-phone"></i>
                        <span> +91-0123456789</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@peacefulthemes.com"><i
                        class="fas fa-envelope"></i><span>contact@solvey.co.in</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pq-bottom-header pq-has-sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="/">
                    <img
                      className="img-fluid logo"
                      src="/logo1.png" alt="solvay"
                      style={{ height: "70px", width: "auto" }}
                    />
                  </a>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div id="pq-menu-contain" className="pq-menu-contain">
                      <ul id="pq-main-menu" className="navbar-nav ml-auto">
                        <li className={`menu-item ${location.pathname === "/" ? "current-menu-item" : ""}`}>
                          <li className="menu-item">
                            <Link to="/">Home</Link>
                          </li>
                        </li>
                        <li className={`menu-item ${isAboutActive ? "current-menu-item" : ""}`}>
                          <a href="#">About Us</a><i className="fa fa-chevron-down pq-submenu-icon" />
                          <ul className="sub-menu">
                            <li className="menu-item ">
                              <Link to="/our-credo">Our Credo</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/our-vision">Vision</Link>
                            </li>
                            <li className="menu-item ">
                              <Link to="/our-mission">Mission</Link>
                            </li>
                            <li className="menu-item ">
                              <Link to="/our-values">Values</Link>
                            </li>
                          </ul>
                        </li>
                        <li className={`menu-item ${location.pathname === "/health-empowerment" ? "current-menu-item" : ""}`}>
                          <a href="#">Our Stories</a><i className="fa fa-chevron-down pq-submenu-icon" />
                          <ul className="sub-menu" style={{ width: "250px" }}>
                            <li className="menu-item ">
                              <Link to="/health-empowerment">Womens Health Empowerment</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item ">
                          <a href="#">Products</a><i className="fa fa-chevron-down pq-submenu-icon" />
                          <ul className="sub-menu">
                            <li className="menu-item">
                              <a href="#">Product Gallery</a>
                              <a href="#">Price List</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#">Career</a>
                        </li>
                        <li className="menu-item ">
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pq-menu-search-block">
                    <a href="#" id="pq-seacrh-btn"><i className="ti-search" /></a>
                    <div className="pq-search-form">
                      <form role="search" method="get" className="search-form" action="https://peacefulqode.co.in/themes/medicate/html/.html">
                        <label>
                          <span className="screen-reader-text">Search for:</span>
                          <input type="search" className="search-field" placeholder="Search …" name="search" />
                        </label>
                        <button type="submit" className="search-submit"><span className="screen-reader-text">Search</span></button>
                      </form>
                    </div>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;