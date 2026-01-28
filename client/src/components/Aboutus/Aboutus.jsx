const Aboutus = ({
  backgroundImage,
  title,
  paragraphs = [],
  image,
}) => {
  return (
    <div
      className="container-fluid p-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row g-0 align-items-stretch">
        {/* CONTENT SECTION */}
        <div className="col-lg-6 col-md-12 d-flex align-items-center">
          <div className="p-5 pt-0 text-white">
            {/* TITLE */}
            <h2 className="fw-bold text-warning mb-4">
              {title}
            </h2>
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
