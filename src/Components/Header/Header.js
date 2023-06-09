import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${( props ) => (props.extendNavbar ? '100vh' : ' 80px')};
  background-color: ${({ theme }) => theme.COLORS.BACK};
  display: flex;
  flex-direction: column;

  @media (min-width: 760px){
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;

  > img {
    width: 100px;
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (max-width: 760px){
    display:none;
  }

`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding-left: 50px;

  @media (max-width: 1400px){
    display:none;
  }

`;


export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 45px;
  cursor: pointer;

  padding: 10px;
  margin-left: 10px;

  @media (min-width: 760px) {
    display: none;
  }

`;


export const NavbarExtendedContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;


  @media (min-width: 760px) {
    display: none;
  }
`;
