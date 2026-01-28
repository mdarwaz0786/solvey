import missionBg from "../../assets/2.png";
import { Link } from "react-router-dom";

const OurMissionSection = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{
        backgroundImage: `url(${missionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row g-0 align-items-stretch">

        {/* RIGHT CONTENT SECTION */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="p-5 pt-0 text-white">

            {/* TITLE */}
            <h2 className="fw-bold text-warning mb-4">
              OUR MISSION
            </h2>

            {/* DESCRIPTION */}
            <div className="mb-4">
              <p className="mb-2">
                Advancing women’s health in India through innovation and clinical excellence.
              </p>
              <p className="mb-2">Supporting healthcare providers in achieving superior patient outcomes.</p>
              <p className="mb-2">Partnering with the public sector and communities to build a healthier future for women.</p>
            </div>

            {/* BUTTON */}
            <Link to="/our-mission" className="btn btn-light rounded-pill px-4">
              Read More →
            </Link>
          </div>
        </div>

        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 col-md-12">
          <img
            src="/credo.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMissionSection;
