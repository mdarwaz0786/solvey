const Preloader = () => {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-white z-3">
      <img
        src="/logo1.png"
        alt="Loading"
        style={{ width: "180px", height: "180px", objectFit: "contain" }}
      />
      <div className="spinner-border text-primary mt-3" role="status" style={{ width: '40px', height: '40px', fontSize: "1.3rem" }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;
