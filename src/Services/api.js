import axios from "axios";

const api = axios.create({
  baseURL: "https://67852c161ec630ca33a78e42.mockapi.io/",
});

export const getVideos = async () => {
  try {
    const response = await api.get("/video");
    return response.data;
  } catch (error) {
    console.error("Error al buscar", error);
    throw new Error("No se pudieron obtener los videos. Intente de nuevo.");
  }
};

export const saveVideo = async (video) => {
  try {
    const response = await api.post("/video", video);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/video/${videoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al borrar vídeo", error);
    throw error;
  }
};

export const updateVideo = async (videoId, updatedVideo) => {
  try {
    const response = await api.put(`/video/${videoId}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.error("Errr al actualizar vídeo", error);
    throw error;
  }
};

export default api;
