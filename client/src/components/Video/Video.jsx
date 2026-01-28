const Video = ({
  src,
  height = "300px",
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  return (
    <div className="container-fluid p-0">
      <video
        className="w-100"
        style={{ height: height, objectFit: "cover" }}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
      />
    </div>
  );
};

export default Video;
