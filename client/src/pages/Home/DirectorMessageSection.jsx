import directorMessageBg from "../../assets/2.png";

const DirectorMessageSection = () => {
  return (
    <div
      className="container-fluid pb-5 pt-5 ps-4 pe-4"
      style={{
        backgroundImage: `url(${directorMessageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row g-5 align-items-stretch">

        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 col-md-12">
          <img
            src="/credo.jpg"
            alt="image"
          />
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="text-white">

            {/* TITLE */}
            <h4 className="fw-bold text-warning mb-4">
              DIRECTOR'S MESSAGE
            </h4>

            {/* DESCRIPTION */}
            <div className="mb-4">
              <p className="mb-2">
                As a Solvey Laboratories Pvt Ltd director, I am proud to say that our high-quality and best-selling pharmaceutical goods have earned us a reputation as one of Gujarat's most well-known third-party pharma manufacturing company.  we now provide a huge collection of various types of pharmaceutical and healthcare products all over India. We have been always well-reputed and trusted by our clients to provide them with a fully genuine, quality range of healthcare medicines. even the quality, safety and efficacy of all our products are guaranteed by leading health organizations like GMP and WHO. In this way, our business scope has extended all over the country .
              </p>

              <p className="mb-2">Furthermore, over the years, our team members have worked hard to perfect the art of research and invention while creating formulas for our loyal consumers.</p>
            </div>

            {/* BUTTON */}
            <a href="#" className="btn btn-light rounded-pill px-4">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessageSection;