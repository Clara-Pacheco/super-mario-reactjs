import styled from "styled-components";

export const Container = styled.button`
  width: 230px;
  height: 70px;

  background-color: ${({ theme,isActive }) => isActive ? theme.COLORS.RED:'transparent'};
  border: 1px solid ${({ theme, isActive}) => isActive ? theme.COLORS.RED: theme.COLORS.GREEN};
  border-radius: 5px;

  margin-left: 45px;
`;