import vissionBg from "../../assets/1.png";
import { Link } from "react-router-dom";

const OurVissionSection = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{
        backgroundImage: `url(${vissionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row g-0 align-items-stretch">

        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 col-md-12">
          <img
            src="/credo.jpg"
            alt="image"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="p-5 pt-0 text-white">

            {/* TITLE */}
            <h2 className="fw-bold text-warning mb-4">
              OUR VISSION
            </h2>

            {/* DESCRIPTION */}
            <div className="mb-4">
              <p className="mb-2">
                To be a company dedicated to transforming the health and future of Indian People by fostering strategic partnerships with the medical fraternity.
              </p>
            </div>

            {/* BUTTON */}
            <Link to="/our-vision" className="btn btn-light rounded-pill px-4">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVissionSection;
