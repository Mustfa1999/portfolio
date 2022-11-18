import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { navbarItems } from "styles/constants";
import {
  StyledHeader,
  StyledLogo,
  StyledMenuButton,
  StyledNavbar,
  StyledListItem,
  StyledDrawer,
} from "components/header/header.styles";

function Header() {
  const handleMenuButtonClick = () => {
    const menuButton = document.getElementById("menu-button");
    if (menuButton.style.transform == "none") {
      menuButton.style.transform = "translate(-100%)";
    } else {
      menuButton.style.transform = "none";
    }
  };

  const getNavbarComponents = (element) => {
    return navbarItems.map((item, index) => (
      <StyledListItem key={`${element} item number: ${index}`}>
        {item}
      </StyledListItem>
    ));
  };

  return (
    <StyledHeader>
      <StyledMenuButton onClick={handleMenuButtonClick}>
        <MdOutlineMenu size="100%" color="white" />
      </StyledMenuButton>

      <StyledLogo src="icons/logo.png" />

      <StyledNavbar>{getNavbarComponents("navbar")}</StyledNavbar>
      <StyledDrawer id="menu-button">
        {getNavbarComponents("drawer")}
      </StyledDrawer>
    </StyledHeader>
  );
}

export default Header;
