

import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
  
  .content {
    grid-area: "content";
    overflow-y: auto;

    width: 100%;
    align-items: center;
    margin-top: 40px;
    padding: 0 110px;

    p {
      color: ${({theme}) => theme.COLORS.WHITE_100};
      text-align: justify;
    }

    .title {

      margin-bottom: 40px;

      a {
        color: ${({theme}) => theme.COLORS.ROSE};
        display: flex;
        align-items: center;
        margin-bottom: 24px;
      }

      h1 {
        color: ${({theme}) => theme.COLORS.WHITE_100};
        margin-bottom: 24px;
      }

      .date { 
        color: ${({theme}) => theme.COLORS.WHITE_100};
        display: flex;
        gap: 10px;

        svg {
          color: ${({theme}) => theme.COLORS.ROSE}
        }
        
        img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }

    .theme {
      display: flex;
      gap: 10px;
      font-size: 12px;
      margin-bottom: 40px;

      a {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE_100};

        padding: 8px 16px;
        border-radius: 8px;
      }
    }
  }
`;