import styled from "styled-components";

export const StyledButton = styled.button`
  width: 11.26rem;
  height: 3.375rem;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.5rem;
  text-align: center;
  background-color: transparent;
  color:rgb(255, 255, 255);
  border: 0.125rem solid #f5f5f5;
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background:rgba(99, 4, 96, 0.9);
    border: 0.125rem solidrgb(15, 51, 96);
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color:rgb(63, 84, 109);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
