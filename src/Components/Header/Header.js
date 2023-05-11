import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.COLORS.BACK};
  display: flex;
  flex-direction: column;

`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  border: 1px solid red;

  > img {
    width: 100px;
    margin-left: 50px;
    margin-right: 50px;
  }

`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding-left: 50px;
  border: 1px solid green;

`;


export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavbarExtendedContainer = styled.div`

`;
