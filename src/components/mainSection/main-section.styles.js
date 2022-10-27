import styled from 'styled-components';
import colors from "styles/colors";

export const StyledMainSection = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: url("images/mobileWP.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${colors.black};
    opacity: 0.75;
  }
`;

// StyledPersonButton