import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 8px;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 1rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;
