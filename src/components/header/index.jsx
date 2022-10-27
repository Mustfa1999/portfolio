import {
  StyledHeader,
  StyledLogo,
  StyledMenuButton,
} from "components/header/header.styles";
import { MdOutlineMenu } from "react-icons/md";

function Header() {
  return (
    <StyledHeader>
      <StyledMenuButton>
        <MdOutlineMenu size="100%" color="white" />
      </StyledMenuButton>

      <StyledLogo src="icons/logo.png" />
    </StyledHeader>
  );
}

export default Header;
