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
        
          margin: 160px auto 30px;
          width: 300px;
          height: 300px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
      
        }
  @media (min-width: 501px) {
   
          margin: 160px auto 30px;
          width: 450px;
          height: 300px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
      
        }
  @media (min-width: 768px){
   
          margin: 160px auto 30px;
          width: 600px;
          height: 450px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
      
        }
  @media (min-width: 1200px){
      width: 600px;
       height: 450px;

      margin-top: 180px;

      display: flex;
      flex-direction: column;
      align-items: start;
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

    @media (min-width: 1200px){
    font-size: 1.4rem;
    text-align: justify;

 }

  }



`;