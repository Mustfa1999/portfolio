import { MdOutlineMenu } from "react-icons/md";
import { navbarItems } from "utils/constants";
import {
  HeaderWrapper,
  Logo,
  MenuButton,
  Navbar,
  ListItem,
  Drawer,
} from "components/header/header.styles";

function Header() {
  const handleMenuButtonClick = () => {
    const menuButton = document.getElementById("menu-button");
    if (menuButton.style.transform === "none") {
      menuButton.style.transform = "translate(-100%)";
    } else {
      menuButton.style.transform = "none";
    }
  };

  const getNavbarComponents = (element) => {
    return navbarItems.map((item, index) => (
      <ListItem key={`${element} item number: ${index}`}>
        {item}
      </ListItem>
    ));
  };

  return (
    <HeaderWrapper>
      <MenuButton onClick={handleMenuButtonClick}>
        <MdOutlineMenu size="100%" color="white" />
      </MenuButton>

      <Logo src="icons/logo.png" />

      <Navbar>{getNavbarComponents("navbar")}</Navbar>
      <Drawer id="menu-button">
        {getNavbarComponents("drawer")}
      </Drawer>
    </HeaderWrapper>
  );
}

export default Header;
