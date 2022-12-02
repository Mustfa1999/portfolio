import {
  IonicAvatarWrapper,
  AvatarPhoto,
  ReactIcon,
  EllipsePath,
  IonicContainer,
  AnimatedTitle,
} from "components/ionicAvatar/ionic-avatar.styles";
import { avatarIons } from "utils/constants";
import Typewriter from "typewriter-effect";

function IonicAvatar() {
  const changeTitleColor = (newColor) => {
    const element = document.getElementById("animated-title");
    element.style.textShadow = `0rem 0rem 1.5rem ${newColor}`;
  };

  return (
    <IonicAvatarWrapper>
      <AnimatedTitle id="animated-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to my portfolio!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Ask me about ")

              .callFunction(() => changeTitleColor("cyan"))
              .typeString("React")
              .pauseFor(1000)
              .deleteChars(5)

              .callFunction(() => changeTitleColor("green"))
              .typeString("Node JS")
              .pauseFor(1000)
              .deleteChars(7)

              .callFunction(() => changeTitleColor("yellow"))
              .typeString("Fast API")
              .pauseFor(1000)
              .deleteChars(8)

              .callFunction(() => changeTitleColor("red"))
              .typeString("Angular")
              .pauseFor(1000)

              .deleteAll()
              .callFunction(() => changeTitleColor("white"))
              .typeString("Mustafa Alhasanat's Portfolio")
              .start();
          }}
        />
      </AnimatedTitle>

      <IonicContainer>
        <AvatarPhoto src="images\avatar.jpg" />

        {avatarIons.map((ion) => {
          return (
            <EllipsePath
              key={ion.id}
              rotateZ={ion.rotateZ}
              rotateY={ion.rotateY}
              delay={ion.delay}
            >
              <ReactIcon
                key={`${ion.id} icon`}
                src={process.env.PUBLIC_URL + ion.src}
                delay={ion.delay}
                shadow={ion.shadow}
              />
            </EllipsePath>
          );
        })}
      </IonicContainer>
    </IonicAvatarWrapper>
  );
}

export default IonicAvatar;
