import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: header;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  h1 {
    color: ${({theme}) => theme.COLORS.ROSE};
    margin-left: 123px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 123px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;

    color: ${({theme}) => theme.COLORS.WHITE_100};

    > a {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > strong {
      font-size: 18px;
      white-space: nowrap;
    }
  }
`;