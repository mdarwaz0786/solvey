const Career = ({
  backgroundImage,
  title,
  paragraphs = [],
  image,

  careerTitle,
  careerParagraphs = [],

  socialTitle,
  socialParagraphs = [],
}) => {
  return (
    <div
      className="container-fluid pb-5 pt-5 ps-4 pe-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <div className="row g-5 align-items-stretch mb-5">
        {/* LEFT CONTENT */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="text-white">
            <h2 className="fw-bold text-warning mb-4">
              {title}
            </h2>
            <div className="mb-4">
              {paragraphs?.map((text, index) => (
                <p key={index} className="mb-2">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className="col-lg-6 col-md-12">
          <img
            src={image}
            alt="career"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <hr />
      {/* ================= CAREER APPLY SECTION ================= */}
      <div className="row mt-5 mb-5">
        {/* LEFT TEXT */}
        <div className="col-lg-6 mb-4 mb-lg-0 text-white">
          <h3 className="fw-bold mb-3 text-warning">
            {careerTitle}
          </h3>
          {careerParagraphs?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        {/* RIGHT FORM */}
        <div className="col-lg-6">
          <div className="p-4 bg-white rounded shadow">
            <form>
              <div className="mb-0">
                <label className="form-label">Name</label>
                <input type="text" placeholder="Enter Name" className="form-control" />
              </div>
              <div className="mb-0">
                <label className="form-label">Email</label>
                <input type="email" placeholder="Enter Email" className="form-control" />
              </div>
              <div className="mb-0">
                <label className="form-label">Mobile</label>
                <input type="text" placeholder="Enter Mobile" className="form-control" />
              </div>
              <div className="mb-0">
                <label className="form-label">Subject</label>
                <input type="text" placeholder="Enter Subject" className="form-control" />
              </div>
              <div className="mb-0">
                <label className="form-label">Upload Resume</label>
                <input type="file" className="form-control" />
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      {/* ================= SOCIAL RESPONSIBILITIES SECTION ================= */}
      <div className="row mt-5">
        <div className="col-12 text-white">
          <h3 className="fw-bold mb-4 text-warning">
            {socialTitle}
          </h3>
          {socialParagraphs?.map((item, index) => (
            <div key={index} className="mb-0">
              <h6 style={{ color: "#fff" }}>
                {item.title}
              </h6>
              <p>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
