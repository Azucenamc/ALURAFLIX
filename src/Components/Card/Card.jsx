import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
} from "./Card.styled";
import { useVideoContext } from "../../Contexts/VideoContext";
import VideoModal from "../VideoModal/VideoModal";
import EditModal from "../EditModal/EditModal";

const Card = ({ video }) => {
  const { deleteVideo, updateVideo } = useVideoContext();
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEdit = () => {
    setEditModalOpen(true);
  };

  const handleVideoModalOpen = () => {
    setVideoModalOpen(true);
  };

  const handleVideoModalClose = () => {
    setVideoModalOpen(false);
  };

  const handleEditModalClose = (updatedVideo) => {
    if (updatedVideo) {
      updateVideo(video.id, updatedVideo);
    }
    setEditModalOpen(false);
  };

  return (
    <CardContainer>
      <CardImage src={video.img} alt={video.title} onClick={handleVideoModalOpen} />
      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          <FaTrashAlt />
        </IconButton>
        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>
      <VideoModal isOpen={isVideoModalOpen} onClose={handleVideoModalClose} videoUrl={video.video} />
      <EditModal isOpen={isEditModalOpen} onClose={handleEditModalClose} video={video} />
    </CardContainer>
  );
};

export default Card;
