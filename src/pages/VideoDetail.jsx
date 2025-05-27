import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import ReactPlayer from "react-player";
const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  //1) arama parametresi
  const [searchParams] = useSearchParams();

  //2) url'den "v" isimli paramatreye eriş
  const id = searchParams.get("v");

  //3) id'si bilinen videonun bilgilerini api'den al
  useEffect(() => {
    api.get(`/video/info?id=${id}&exdend=1`).then((res) => setVideo(res.data));
  }, []);
  return (
    <div className="detail-page h-screen overflow-auto">
      {/**video içeriği */}
      <div className="h-[50vh] lg:h-[60]">
        <ReactPlayer
          controls
          light
          width={"100%"}
          height={"100%"}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>

      {/**alakalı videolar */}
      <div className="bg-blue-300 h-[300px]">2</div>
    </div>
  );
};

export default VideoDetail;
