import styled, { keyframes } from "styled-components";
import colors from "styles/colors";
import { mq } from "styles/media-query";

const orbital = keyframes`
  0% {
    transform: rotateZ(0) translateX(12rem) rotateZ(0) rotateY(-70deg) rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg) translateX(12rem) rotateZ(-360deg) rotateY(-70deg) rotateZ(180deg);
  }
`;

const hidden = (start, end) => keyframes`
  0% {
    z-index: ${start};
  }
  50% {
    z-index: ${end};
  }
  100% {
    z-index: ${start};
  }
`;

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

export const IonicContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 30;
  padding-top: 8rem;
  margin-top: calc(((100vh - 5.5rem) / 2) - 15rem);
`;

export const AvatarPhoto = styled.img`
  position: absolute;
  border-radius: 100%;
  width: 12rem;
  height: 12rem;
  z-index: 10;
  box-shadow: 0px 0px 35px white;
  
  ${mq.desktop`
  `}
`;

export const EllipsePath = styled.div`
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  /* border: 0.1rem solid white; */
  position: absolute;
  top: 2rem;
  transform-style: preserve-3d;
  transform: rotateZ(${(props) => props.rotateZ}deg)
    rotateY(${(props) => props.rotateY}deg);
  animation: ${(props) => hidden(props.start, props.end)} 4s ease-in
    ${(props) => props.delay}s infinite;
`;

export const ReactIcon = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  animation: ${orbital} 4s linear ${(props) => props.delay}s infinite;
  box-shadow: 0px 0px 25px ${(props) => props.shadow};
`;
