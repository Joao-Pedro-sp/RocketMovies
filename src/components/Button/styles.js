import { styled } from "styled-components"

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.ROSE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  height: 48px;
  border: 0;
  padding: 14px 56px;
  border-radius: 8px;
  font-weight: 400;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
  }
`;