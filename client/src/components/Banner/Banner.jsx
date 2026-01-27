const Banner = ({ src, alt = "banner", height = "300px" }) => {
  return (
    <div className="container-fluid p-0">
      <img
        src={src}
        alt={alt}
        className="w-100"
        style={{ height: height, objectFit: "cover" }}
      />
    </div>
  );
};

export default Banner;
