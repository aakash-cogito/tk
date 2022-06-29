import React from "react";
import { sidebarList } from "../../constants/lists/sideNavbar";

const SideNavBar = (props) => {
  const { navHeight } = props;
  return (
    <div
      className="side-navbar border p-1 bg-secondary"
      style={{
        height: navHeight,
        zIndex: navHeight ? 1 : -1,
        display: navHeight ? "block" : "none",
      }}
    >
      <ul className="ul-hide-style">
        {sidebarList.map((data, index) => (
          <li className={`${index > 0 ? "border-top" : ""}`}>
            <a href={data.to}>{data.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
SideNavBar.defaultProps = { navHeight: 0 };
export default SideNavBar;
