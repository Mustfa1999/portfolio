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

export const IonicAvatarWrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 30;
`;

export const IonicContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 30;
  padding-top: 8rem;
  margin-top: 5rem;

  ${mq.desktop`
    margin-top: calc(((100vh - 5.5rem) / 2) - 15rem);
  `}
`;

export const AnimatedTitle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  z-index: 30;
  margin-top: 3rem;
  margin-left: 1rem;
  font-weight: bold;
  font-size: 2rem;
  transition: 0.3s ease-in;
  color: ${colors.white};
  text-shadow: 0rem 0rem 1.5rem ${colors.white};
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
