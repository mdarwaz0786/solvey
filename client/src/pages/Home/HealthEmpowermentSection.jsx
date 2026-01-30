import empowermentBg from "../../assets/3.png";
import { Link } from "react-router-dom";

const HealthEmpowermentSection = () => {
  return (
    <div
      className="container-fluid pb-5 pt-5 ps-4 pe-4"
      style={{
        backgroundImage: `url(${empowermentBg})`,
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
              HEALTH EMPOWEMENT
            </h2>

            {/* DESCRIPTION */}
            <div className="mb-4">
              <p className="mb-2">At Solvey Laboratories Private Limited, we collaborate closely with our patrons and partners to promote and support the health of all people, with a dedicated focus on women and girls. Our initiatives include the continuous training of skilled birth attendants to provide life-saving services when childbirth complications arise. We also advocate for increased access to contraceptives and the provision of sexual and reproductive health services for adolescents.</p>
              <p className="mb-2">We actively campaign against gender-based violence and harmful practices that cause life-threatening injuries to young girls and adolescents. Our mission is to empower women through education, economic opportunities, healthcare, and legal rights. By doing so, we enable them to demand better treatment and services, ensuring they can reach their full potential as human beings.</p>
            </div>

            {/* BUTTON */}
            <Link to="/health-empowerment" className="btn btn-light rounded-pill px-4">
              Read More →
            </Link>
          </div>
        </div>

        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 col-md-12">
          <img
            src="/solvey/healthempowermentimage.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthEmpowermentSection;
