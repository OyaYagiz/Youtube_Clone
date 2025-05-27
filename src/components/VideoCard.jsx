import millify from "millify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [isHover, setIsHover] = useState(false);
  const [currentThumbIndex, setCurrentThumbIndex] = useState(0);
  const navigate = useNavigate();
  console.log(video);

  // Hover sırasında animasyon için kullanılacak thumbnail dizisi
  // Kategorilerde movingThumbnails var, trending'de videoThumbnails olabilir.
  const hoverThumbnails = video.movingThumbnails?.length
    ? video.movingThumbnails
    : video.videoThumbnails?.length
    ? video.videoThumbnails
    : [];

  // Animasyon döngüsü (hover sırasında)
  useEffect(() => {
    let interval;
    if (isHover && hoverThumbnails.length > 1) {
      let i = 0;
      interval = setInterval(() => {
        setCurrentThumbIndex(i);
        i = (i + 1) % hoverThumbnails.length;
      }, 300);
    } else {
      setCurrentThumbIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHover, hoverThumbnails]);

  // Hover durumuna göre gösterilecek thumbnail URL
  const thumbnailUrl = isHover
    ? hoverThumbnails[currentThumbIndex]?.url
    : video.thumbnailUrl ||
      video.thumbnails?.[0]?.url ||
      (video.videoId
        ? `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
        : null);

  if (!thumbnailUrl) return null; // Resim yoksa render etme
  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="cursor-pointer w-full max-w-sm"
    >
      <img
        className="rounded-lg w-full aspect-video object-cover"
        src={thumbnailUrl}
        alt={video.title}
      />

      {/* Video bilgileri */}
      <div className="flex gap-4 mt-5">
        {(video.authorThumbnails?.[1]?.url ||
          video.author?.avatar?.[0]?.url) && (
          <img
            className="w-14 h-14 rounded-full"
            src={
              video.authorThumbnails?.[1]?.url || video.author?.avatar?.[0]?.url
            }
            alt="logo"
          />
        )}
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
          <p>{video.author?.title}</p>
          <div className="flex gap-3 text-sm text-gray-500">
            <p className="flex gap-1">
              <span>
                {millify(Number(video.viewCount || video.stats?.views) || 0)}
              </span>
              <span> Görüntüleme</span>
            </p>
            <p>{video.publishedText || video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
