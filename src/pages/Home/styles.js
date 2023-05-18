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
    grid-area: content;
    padding: 50px 123px;
    overflow-y: auto;

    .title {
      display: flex;
      justify-content: space-between;
      gap: 746px;

      h1 {
      color: ${({theme}) => theme.COLORS.WHITE_300};
      white-space: nowrap;
      }
    }

    .film {
      width: 100%;
      padding: 32px;
      border-radius: 16px;
      margin-top: 41px;
      background-color: rgba(255, 133, 155, 0.05);

      a {
        color: ${({theme}) => theme.COLORS.WHITE_100};
        font-size: 24px;
        font-weight: 700;
      }

      p {
        color: #999591;
        font-size: 16px;
        font-weight: 400;
        margin: 15px 0;
      }

      .theme {
        display: flex;
        gap: 10px;

        a {
          background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
          color: ${({theme}) => theme.COLORS.WHITE_100};
          font-size: 12px;

          padding: 8px 16px;
          border-radius: 8px;
        }
      }
    }
  }
`; 