import { MdOutlineMenu } from "react-icons/md";
import { navbarItems } from "styles/constants";
import {
  StyledHeader,
  StyledLogo,
  StyledMenuButton,
  StyledNavbar,
  StyledListItem,
  StyledNavbarAnchor,
} from "components/header/header.styles";

function Header() {
  return (
    <StyledHeader>
      <StyledMenuButton>
        <MdOutlineMenu size="100%" color="white" />
      </StyledMenuButton>

      <StyledLogo src="icons/logo.png" />

      <StyledNavbar>
        {navbarItems.map((item, index) => (
          <StyledListItem key={`navbar item number: ${index}`}>
              {item}
          </StyledListItem>
        ))}
      </StyledNavbar>
    </StyledHeader>
  );
}

export default Header;
