const Video = ({
  src,
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
  return (
    <div className="container-fluid p-0">
      <video
        className="w-100 h-100 object-fit-cover"
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
