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

  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;