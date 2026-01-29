import aboutBg from "../../assets/1.png";
import { Link } from "react-router-dom";

const AboutusSection = () => {
  return (
    <div
      className="container-fluid pb-5 pt-5 ps-4 pe-4"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row g-5 align-items-stretch">
        {/* RIGHT CONTENT SECTION */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="text-white">

            {/* TITLE */}
            <h2 className="fw-bold text-warning mb-4">
              ABOUT US
            </h2>

            {/* DESCRIPTION */}
            <div className="mb-4">
              <p className="mb-2">
                Solvey Laboratories Pvt. Ltd. is a Mumbai-based healthcare company established with a vision to provide Premium quality healthcare products to a global clientele.
                Our extensive range of tablets, capsules, and syrups addresses all major health concerns. Our mission is to serve patients with the best possible medicinal aids, enhancing their well-being through cost effective solutions.
              </p>
            </div>

            {/* BUTTON */}
            <Link to="#" className="btn btn-light rounded-pill px-4">
              Read More →
            </Link>
          </div>
        </div>

        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 col-md-12">
          <img
            src="/1.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
