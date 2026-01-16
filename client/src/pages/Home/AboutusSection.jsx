const AboutusSection = () => {
  return (
    <div className="container-fluid p-5" style={{ background: "#cf2e2e" }}>
      <div className="row g-0 align-items-stretch">

        {/* RIGHT CONTENT SECTION */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="p-5 pt-0 text-white">

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
            <a href="#" className="btn btn-light rounded-pill px-4">
              Read More →
            </a>
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
