import styled from "styled-components";
import { mq } from "styles/media-query";
import fonts from "styles/fonts";
import colors from "styles/colors";

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  background: ${colors.blurred.purple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  z-index: 50;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);

  ${mq.desktop`
    justify-content: space-between;
  `}
`;

export const StyledLogo = styled.img`
  position: absolute;
  left: calc((100% - 3.5rem) / 2);
  top: calc((100% - 3.5rem) / 2);
  width: 3.5rem;
  height: 3.5rem;
  
  ${mq.desktop`
    position: relative;
    left: 0;
    top: 0;
    margin-left: 2rem;
  `}
`;

export const StyledMenuButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;

  ${mq.desktop`
    display: none;
  `}
`;

export const StyledNavbar = styled.ul`
  display: none;
  font-family: ${fonts.cantataOne};
  list-style-type: none;
  margin: 0;
  margin-right: 2rem;
  padding: 0;

  ${mq.desktop`
    display: flex;
  `}
`;

export const StyledListItem = styled.li`
  margin-left: 2rem;
  padding: 0.7rem;
  background: ${colors.black};
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: ease-in 0.2s;
  color: ${colors.white};
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0px 0px 5px white;

  &:hover {
    transform: scale(1.2) rotate(5deg);
    color: ${colors.purple};
    background: ${colors.white};

  }
`;

