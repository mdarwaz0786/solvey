const Contactus = ({
  backgroundImage,
  title,
  paragraphs = [],
  image,
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
      <div className="row g-3 align-items-stretch mb-5">
        {/* LEFT CONTENT */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="text-white">
            <h4 className="fw-bold text-warning mb-4">
              {title}
            </h4>
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
            alt="contact"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <hr />
      {/* Contact Form */}
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 col-md-10">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-center fw-bold mb-4">
              Contact Enquiry
            </h3>
            <form>
              {/* NAME */}
              <div className="mb-0">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              {/* EMAIL */}
              <div className="mb-0">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              {/* MOBILE */}
              <div className="mb-0">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your mobile number"
                />
              </div>
              {/* SUBJECT */}
              <div className="mb-0">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>
              {/* MESSAGE */}
              <div className="mb-0">
                <label className="form-label">Message</label>
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              {/* BUTTON */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-warning px-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
