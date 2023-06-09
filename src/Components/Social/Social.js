import styled from "styled-components";

export const Container = styled.div`
  width: 10px;
  height: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right:40px;
  margin-top: 10px;


  > a {
      > img {
        width: 25px;
        height: 25px;

        &:hover {
          transform: scale(1.1);
        }
       }

       @media (max-width: 500px) {
          display:none;
        
      }
       @media (max-width: 768px) {
          display:none;
        
      }

    } 



`;