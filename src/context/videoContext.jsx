import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import api from "../utils/api";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const type = selectedCategory.type;
    if (type === "menu") return;

    setIsLoading(true);

    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/v2/trending"
        : type === "category"
        ? "/search"
        : "";

    const params = type === "category" ? { q: selectedCategory.name } : {};

    //Api isteği at ve durumu state aktar
    api
      .get(url, { params })
      .then((res) => setVideos(res.data.contents || res.data.data))
      .catch((error) => setError(error?.message || "Hata oluştu"))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
