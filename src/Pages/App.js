import styled from "styled-components";

export const Container = styled.div`
  > main {
    height: 100vh;

    margin-right: 150px;
    margin-left: 150px;

    border: 3px solid white;

    display: flex;
    justify-content: space-between;

    > img {
      width: 680px;
      height: 750px;

      margin-top: 80px;
      margin-right: 100px;
    }
  }
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

`;

