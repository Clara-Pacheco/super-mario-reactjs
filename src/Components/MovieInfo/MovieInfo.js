import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 450px;

  margin-top: 180px;

  border: 2px solid blue;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;

  > img {
    width: 245px;
    height: 245px;

    margin-bottom: 30px;

  }

  > p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    text-align: justify;
  }



`;