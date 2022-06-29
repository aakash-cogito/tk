import React from "react";
import { headerText } from "../../constants/StaticText/headerText";
import HamburgerIcon from "../icons/Hamburger";
import SideNavBar from "./SideNavBar";

const Head = (props) => {
  const [navHeight, setNavHeight] = React.useState(0);
  const handleNavbar = () => {
    setNavHeight((state) => (state == 0 ? "inherit" : 0));
  };
  return (
    <>
      <div className="d-flex position-relative">
        <div onClick={handleNavbar}>
          <HamburgerIcon />
        </div>
        <div className="d-flex flex-column">
          <div className="mx-2 font-size-14">{headerText.companyName}</div>
          <div className="d-flex justify-content-end position-relative bottom-4">
            <div className="font-size-8 text-uppercase">{headerText.beta}</div>
          </div>
        </div>
        <SideNavBar navHeight={navHeight} />
      </div>
    </>
  );
};
Head.defaultProps = {};
export default Head;
