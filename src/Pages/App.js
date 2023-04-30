import styled from "styled-components";

export const Container = styled.div`
  > main {
    height: 100vh;

    margin-right: 150px;
    margin-left: 150px;

    border: 3px solid white;
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

