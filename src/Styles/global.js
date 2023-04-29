import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body, button, a {
      color: ${({ theme }) => theme.COLORS.TEXT};
      font-family: "Mukta", sans-serif;
      font-size: 1rem; 
      font-weight: 400;
    }

    a {
      text-decoration: none;
    }

    button:hover {
      cursor: pointer;
    }

`;