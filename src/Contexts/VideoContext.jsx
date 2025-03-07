import { createContext, useContext, useEffect, useState } from "react";
import {
  getVideos,
  saveVideo as addVideoService,
  deleteVideo as deleteVideoService,
  updateVideo as updateVideoService,
} from "../Services/api";

const VideosContext = createContext();

export const useVideoContext = () => {
  return useContext(VideosContext);
};

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const videoData = await getVideos();
        console.log("Videos recibidos: ", videoData); // Verifica los datos aquí
        setVideos(videoData);
        setLoading(false);
      } catch (error) {
        console.error("Error al buscar videos", error);
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  const addVideo = async (newVideo) => {
    try {
      const addedVideo = await addVideoService(newVideo);
      setVideos((prevVideos) => [...prevVideos, addedVideo]);
    } catch (error) {
      console.error("Error al agregar vídeo", error);
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      await deleteVideoService(videoId);
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== videoId)
      );
    } catch (error) {
      console.error("Error al eliminar vídeo", error);
    }
  };

  const updateVideo = async (videoId, updatedVideo) => {
    try {
      const updatedData = await updateVideoService(videoId, updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoId ? { ...video, ...updatedData } : video
        )
      );
    } catch (error) {
      console.error("Error al actualizar vídeo", error);
    }
  };

  const videoCategory = {};

  videos.forEach((video) => {
    const category = video.categoria;
    if (!videoCategory[category]) {
      videoCategory[category] = [];
    }
    videoCategory[category].push(video);
  });

  return (
    <VideosContext.Provider
      value={{
        videos,
        loading,
        videoCategory,
        addVideo,
        deleteVideo,
        updateVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
