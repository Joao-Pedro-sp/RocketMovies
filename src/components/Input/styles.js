import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 64px;

  border-radius: 10px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;
    background: transparent;
    border: 0;

    color: ${({theme}) => theme.COLORS.WHITE_300};

    &:placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`;