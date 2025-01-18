import React from "react";
import ReactPlayer from "react-player";
import { Modal, ModalContent, CloseButton } from "./VideoModal.styled";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
