import styled from "styled-components";

export const Container = styled.button`

  width: 280px;
  padding: 10px 0;
  margin-right: 25px;
  margin-top: 10px;

  background-color: ${({ theme,isActive }) => isActive ? theme.COLORS.RED:'transparent'};
  border: 1px solid ${({ theme, isActive}) => isActive ? theme.COLORS.RED: theme.COLORS.GREEN};
  border-radius: 3px;

  transform: skew(-10deg);

  font-size: 14px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3px;

  @media (max-width: 500px) {
    
    width: 250px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 25px auto 20px;

    position: relative;
    top: 330px;
      
  }
  @media (min-width: 501px) {
    
    width: 350px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 25px auto 0;

    position: relative;
    top:200px; 
       
  }
  @media (min-width: 768px) {

    width: 400px;
    height: 70px;

    position: relative;
    top:0; 
  
  }
  @media (min-width: 1201px) {

    width: 280px;
    height: 70px;
    padding: 10px 0;
    margin-right: 25px;
    margin-top: 10px;

    background-color: ${({ theme,isActive }) => isActive ? theme.COLORS.RED:'transparent'};
    border: 1px solid ${({ theme, isActive}) => isActive ? theme.COLORS.RED: theme.COLORS.GREEN};
    border-radius: 3px;

    transform: skew(-10deg);

    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.3px;

    position: relative;
    top: 0;

    display: inline;
    
  }
`;