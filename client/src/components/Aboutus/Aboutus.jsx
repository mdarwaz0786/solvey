const Aboutus = ({
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
      <div className="row g-3 align-items-stretch">
        {/* CONTENT SECTION */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="text-white">
            {/* TITLE */}
            <h4 className="fw-bold text-warning mb-4">
              {title}
            </h4>
            {/* PARAGRAPHS */}
            <div className="mb-4">
              {paragraphs?.map((text, index) => (
                <p key={index} className="mb-2">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* IMAGE SECTION */}
        <div className="col-lg-6 col-md-12">
          <img
            src={image}
            alt="section"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
