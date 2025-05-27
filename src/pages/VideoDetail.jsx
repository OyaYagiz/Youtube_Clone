import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const VideoDetail = () => {
  //1) arama parametresi
  const [searchParams] = useSearchParams();

  //2) url'den "v" isimli paramatreye eriş
  const id = searchParams.get("v");

  //3) id'si bilinen videonun bilgilerini api'den al
  useEffect(() => {}, []);
  return <div>VideoDetail</div>;
};

export default VideoDetail;
