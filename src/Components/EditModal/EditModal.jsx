import React, { useState } from "react";
import { Modal, ModalContent, CloseButton, Label, Input, Textarea, SaveButton } from "./EditModal.styled";

const EditModal = ({ isOpen, onClose, video }) => {
  const [newTitle, setNewTitle] = useState(video.title || "");
  const [newUrl, setNewUrl] = useState(video.video || "");
  const [newDescription, setNewDescription] = useState(video.description || "");

  const handleSave = () => {
    const updatedVideo = { ...video, title: newTitle, video: newUrl, description: newDescription };
    onClose(updatedVideo);
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={() => onClose()}>X</CloseButton>
        <h2>Edit Video</h2>
        <Label>
          Title:
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Label>
        <Label>
          URL:
          <Input
            type="text"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
        </Label>
        <Label>
          Description:
          <Textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </Label>
        <SaveButton onClick={handleSave}>Save</SaveButton>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
