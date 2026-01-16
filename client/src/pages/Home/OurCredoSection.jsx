const OurCredoSection = () => {
  return (
    <div className="container-fluid p-5" style={{ background: "#4054B2" }}>
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
            <a href="#" className="btn btn-light rounded-pill px-4">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCredoSection;
