import styled from "styled-components";

export const Container = styled.div`
  
  overflow-y: hidden;

  > main {
    height: 100%;

    margin-right: 150px;
    margin-left: 150px;

    display: flex;
    justify-content: space-between;

      @media (max-width: 500px) {
      
        display: flex;
        flex-direction: column;
        margin: auto;
      }
      /* @media (max-width: 768px) {
      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
 
        margin-right: 0px;
        margin-left: 0px;
      } */

    &::after {
      content: '';
      width: inherit;
      height: inherit;
      position: fixed;
      inset: 0;
      background: linear-gradient(109deg, rgba(10, 12, 16, 0.999) 15%, rgba(10, 12, 16, 0.5) 50%, rgba(10, 12, 16, 0.99) 85%);

      z-index:-1;
    }

    > img {
      width: 680px;
      height: 750px;

      margin-top: 80px;
      margin-right: 100px;

        @media (max-width: 500px) {
          margin: 350px auto;
          width: 300px;
          height: 300px;
      
        }
        /* @media (max-width: 768px) {
          padding: 10px;
          margin: 30px auto;
          width: 500px;
          height: 500px;
      
        } */
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


