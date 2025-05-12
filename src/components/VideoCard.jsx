import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  // Eğer veriler eksikse, kartı çizme
  if (!video || !video.title || !video.videoId || !video.thumbnail) return null;

  const thumbnailUrl =
    isHover && video.richThumbnail
      ? video.richThumbnail[0]?.url
      : video.thumbnail[video.thumbnail.length - 1]?.url;

  const channelImage = video.channelThumbnail?.[0]?.url;

  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`cursor-pointer ${
        isRow ? "flex flex-row gap-4" : "flex flex-col"
      } mb-6`}
    >
      {/* Video Kapak Görseli */}
      <div className={`${isRow ? "w-2/5" : "w-full"}`}>
        <img
          className="rounded-lg w-full h-full object-cover"
          src={thumbnailUrl}
          alt={video.title}
        />
      </div>

      {/* Detaylar */}
      <div className="flex gap-4 mt-3">
        {/* Kanal Logosu */}
        {channelImage && (
          <img
            className="w-12 h-12 rounded-full"
            src={channelImage}
            alt={video.channelTitle}
          />
        )}

        <div className="flex flex-col">
          <h4 className="font-semibold text-base line-clamp-2">
            {video.title}
          </h4>
          <p className="text-sm text-gray-600">{video.channelTitle}</p>
          <div className="flex gap-3 text-sm text-gray-500 mt-1">
            <span>{millify(video.viewCount)} görüntülenme</span>
            <span>• {video.publishedTimeText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
