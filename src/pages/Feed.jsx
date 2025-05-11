import { useContext } from "react";
import SideBar from "../components/SideBar";
import { VideoContext } from "../context/videoContext";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);
  return (
    <div className="flex gap-10">
      <SideBar />
      <div>Videolar</div>
    </div>
  );
};

export default Feed;
