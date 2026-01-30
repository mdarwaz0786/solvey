import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="pq-footer">
        <div className="pq-footer-style-1">
          <div className="pq-footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <div className="pq-footer-block">
                    <img src="logo1.png" className="pq-footer-logo img-fluid" alt="medicate-footer-logo" />
                    <p>Solvey Laboratories Private Limited is a people-centric pharmaceutical company driven by the belief of “Keeping You First, Always.” We are committed to delivering meaningful healthcare solutions that go beyond medicine and create a lasting impact on lives.</p>
                    <div className="pq-footer-social">
                      <ul>
                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                        {/* <li><Link to="#"><i className="fab fa-google-plus-g" /></Link></li> */}
                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                        {/* <li><Link to="#"><i className="fab fa-pinterest" /></Link></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4  col-md-6">
                  <div className="pq-footer-block">
                    <h4 className="footer-title">Our Courses</h4>
                    <div className="menu-useful-links-container">
                      <ul id="menu-useful-links" className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/our-credo">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/product-list">Our Product</Link></li>
                        <li><Link to="/health-empowerment">Our Stories</Link></li>
                        <li><Link to="/career">Career</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4  col-md-6">
                  <div className="pq-footer-block">
                    <h4 className="footer-title">Contact Us</h4>
                    <div className="row">
                      <div className="col-sm-12">
                        <ul className="pq-contact">
                          {/* <li> <a href="tel:+91-0123456789"><i className="fas fa-phone" />
                            <span> +91-0123456789</span>
                          </a></li> */}
                          <li> <a href="mailto:contact@solvey.co.in"><i className="fas fa-envelope" /><span>contact@solvey.co.in</span></a> </li>
                          <li> <i className="fas fa-map-marker" /> <span>
                            𝚂/𝟺, 𝙽𝚎𝚑𝚛𝚞 𝚁𝚘𝚊𝚍 , 𝚂𝚑𝚊𝚜𝚝𝚛𝚒 𝙽𝚊𝚐𝚊𝚛, 𝚂𝚊𝚗𝚝𝚊𝚌𝚛𝚞𝚣 (𝙴), 𝙼𝚞𝚖𝚋𝚊𝚒, 𝙼𝚊𝚑𝚊𝚛𝚊𝚜𝚑𝚝𝚛𝚊 𝟺𝟶𝟶𝟶𝟻𝟻 ( 𝙸𝚗𝚍𝚒𝚊)</span> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pq-copyright-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center "> <span className="pq-copyright"> Copyright 2026 𝐒𝐎𝐋𝐕𝐄𝐘 LABORATORIES PVT. LTD. All Rights
                  Reserved</span> </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;