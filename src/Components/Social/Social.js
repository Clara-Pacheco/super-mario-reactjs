import styled from "styled-components";

export const Container = styled.div`
  width: 10px;
  height: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right:30px;
  margin-top: 10px;


  > a {
      > img {
        width: 30px;
        height: 30px;

        &:hover {
          transform: scale(1.1)
        }

       }
    } 



`;