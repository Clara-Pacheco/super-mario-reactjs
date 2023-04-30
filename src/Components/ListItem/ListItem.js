import styled from "styled-components";

export const Container = styled.li`

  margin-right: 30px;

> a {
    &:hover {
      color: ${({ theme })=> theme.COLORS.RED};
    }

    }

`;