import credoBg from "../../assets/3.png";
import { Link } from "react-router-dom";

const OurCredoSection = () => {
  return (
    <div
      className="container-fluid pb-5 pt-5 ps-4 pe-4"
      style={{
        backgroundImage: `url(${credoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row g-5 align-items-stretch">

        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 col-md-12">
          <img
            src="/solvey/credoimage.jpg"
            alt="image"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="text-white">

            {/* TITLE */}
            <h2 className="fw-bold text-warning mb-4">
              OUR CREDO
            </h2>

            {/* DESCRIPTION */}
            <div className="mb-4">
              <p className="mb-2">
                <strong>Solvey</strong> believes in putting people first
                (<em>"KEEPING YOU FIRST, ALWAYS"</em>).
              </p>

              <p className="mb-2">
                <strong>Primary Focus:</strong> Our efforts are dedicated to transforming
                the lives of women in India, who are at the core of our business.
              </p>

              <p className="mb-2">
                <strong>Team and Future: </strong>
                The company has a dedicated team of skilled professionals and aims to become a leading organization known for "timeless trust and boundless care".
              </p>

              <p className="mb-2">
                <strong>Values: </strong> The company operates based on values such as integrity, empathy, respect, determination, and excellence.
              </p>
            </div>

            {/* BUTTON */}
            <Link to="/our-credo" className="btn btn-light rounded-pill px-4">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCredoSection;
