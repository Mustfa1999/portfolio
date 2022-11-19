import styled from "styled-components";
import colors from "styles/colors";

export const MainSectionWrapper = styled.main`
  align-items: flex-start;
  background-image: url("images/mobileWP.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 5.5rem;
  position: relative;
  width: 100vw;
  height: 100%;

  &::after {
    background: ${colors.black};
    content: "";
    height: 100%;
    opacity: 0.75;
    position: absolute;
    width: 100%;
  }
`;
