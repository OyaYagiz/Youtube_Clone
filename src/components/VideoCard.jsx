const VideoCard = ({ video }) => {
  console.log(video)
  return (
    <div className="cursor-pointer">
      {/**resim alanı */}
      <div>
        <img src={video.thumbnails[1].url} alt="" />
      </div>
    </div>
  );
};

export default VideoCard;