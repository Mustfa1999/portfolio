import {
  MainSectionWrapper,
  AvatarPhoto,
  ReactIcon,
  EllipsePath,
  IonicContainer,
} from "components/mainSection/main-section.styles";
import { avatarIons } from "utils/constants";

function MainSection() {

  return (
    <MainSectionWrapper>
      <IonicContainer>
        <AvatarPhoto src="images\avatar.jpg" />

        {avatarIons.map((ion) => {
          return (
            <EllipsePath
              key={ion.id}
              rotateZ={ion.rotateZ}
              rotateY={ion.rotateY}
              start={ion.start}
              end={ion.end}
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

        {/* 
        <EllipsePath rotateZ={70} rotateY={80} start={15} end={5} delay={0}>
          <ReactIcon src="icons\reactIcon.png" delay={0} />
        </EllipsePath>

        <EllipsePath rotateZ={-70} rotateY={80} start={5} end={15} delay={0.5}>
          <ReactIcon src="icons\nodeIcon.png" delay={0.5} />
        </EllipsePath>

        <EllipsePath rotateZ={30} rotateY={80} start={5} end={15} delay={1}>
          <ReactIcon src="icons\fastAPI.png" delay={1} />
        </EllipsePath>

        <EllipsePath rotateZ={-30} rotateY={80} start={5} end={15} delay={1.5}>
          <ReactIcon src="icons\angularIcon.png" delay={1.5} />
        </EllipsePath> */}
      </IonicContainer>
    </MainSectionWrapper>
  );
}

export default MainSection;
