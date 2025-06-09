import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  return (
    <div className="flex justify-between">
      {/**sol */}
      <div className="flex items-center gap-4">
        <img
          src={video.channelThumbnail[0].url}
          alt={video.channelTitle}
          className="rounded-full w-12 h-12"
        />
        <div>
          <h4 className="font-semibold">{video.channelTitle}</h4>
          <p className="text-sm text-gray-400">{video.subscriberCountText}</p>
        </div>
        <button className="ml-auto bg-white text-black px-3 py-1 rounded-full transition hover:bg-gray-400">
          Abone Ol
        </button>
      </div>
      {/**sağ */}

      <div className="flex items-center bg-darkgray rounded-full cursor-pointer">
        <div className="py-2 px-6 border-r">
          <AiFillLike />
        </div>
        <div className="py-2 px-6">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
