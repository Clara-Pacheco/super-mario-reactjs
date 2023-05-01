import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 450px;

  margin-top: 180px;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;

  @media (max-width: 500px) {
          width: 300px;
          height: 250px;

          margin: 160px auto 30px;
          width: 300px;
          height: 300px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
      
        }


  > img {
    width: 280px;
    height: 450px;

    margin-bottom: 30px;
  }

  > p {
    font-size: 1.3rem;
    margin-bottom: 50px;
    text-align: justify;
  }



`;