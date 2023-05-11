import styled from "styled-components";

export const Container = styled.li`
  position: relative;

  margin-right: 100px;
  list-style: none;

> a {

  @media (max-width: 500px) {
        font-size: 1.4rem;    
  }
    
    &::after {
        content:'';
        position: absolute;
        left: 0;
        bottom: -2px;

        width: 100%;
        height: 1px;
        background-color: ${({theme })=>theme.COLORS.RED};
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s
   
      }

      &:hover {
      color: ${({ theme })=> theme.COLORS.RED};
        &::after {
          transform: scaleX(1);
          transform-origin: left;
          transition: transform 0.5s
      }
    }

    }

`;