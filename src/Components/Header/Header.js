import styled from "styled-components";

export const Container = styled.div`
  width: 100wv;
  height: 100px;

  padding-left: 150px;
  padding-right: 150px;

  list-style: none;

  > div {
    display: flex;
    align-items: center;
    

    > img {
      width: 80px;
      margin-right: 40px;

    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;


  border: 2px solid green;

`;
