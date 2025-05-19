import { useContext } from "react";
import SideBar from "../components/SideBar";
import { VideoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);

  const filteredVideos = videos.filter((item) => {
    if (item.type === "video" && item.video && item.video.videoId) {
      return true;
    }
    if (item.type === "video" && item.videoId) {
      return true;
    }
    return false;
  });

  return (
    <div className="flex">
      <SideBar />

      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : (
          filteredVideos.map((item) => {
            const videoData = item.video ? item.video : item;
            return <VideoCard video={videoData} key={videoData.videoId} />;
          })
        )}
      </div>
    </div>
  );
};

export default Feed;
