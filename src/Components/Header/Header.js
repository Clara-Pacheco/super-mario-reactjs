import styled from "styled-components";

export const Container = styled.div`
  width: 100wv;
  height: 100px;

  padding-left: 150px;
  padding-right: 150px;

  list-style: none;

  @media (max-width: 500px) {
    
    max-width: 500px;
    height: 100px;

    padding: 10px;    
  }

  > div {
    display: flex;
    align-items: center;
    

    > img {
      width: 80px;
      margin-right: 40px;

      @media (max-width: 500px) {
        width: 50px;
        margin-right: 35px; 
        margin-left: 20px;   
  }

    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

`;
