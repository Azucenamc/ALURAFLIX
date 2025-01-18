import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
} from "./Card.styled";

import { useVideoContext } from "../../Contexts/VideoContext";

const Card = ({ video }) => {
  const { deleteVideo, updateVideo } = useVideoContext();

  const handleEdit = () => {
    const updatedVideo = { ...video, title: "Nuevo Título" }; // 
    updateVideo(video.id, updatedVideo);
  };

  return (
    <CardContainer>
      <CardImage src={video.img} alt={video.title} />
      <CardActions>
        <IconButton onClick={() => Borrar(video.id)}>
          <FaTrashAlt />
        </IconButton>

        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
