import styled from "styled-components";
// import { mq } from "styles/media-query";
import colors from "styles/colors";

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  height: 4rem;
  background: ${colors.blurred.purple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  z-index: 50;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
`;

export const StyledLogo = styled.img`
  position: absolute;
  left: calc((100% - 3.5rem) / 2);
  top: calc((100% - 3.5rem) / 2);
  width: 3.5rem;
  height: 3.5rem;
`;

export const StyledMenuButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
`;

