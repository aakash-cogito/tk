import React from "react";
import CenterComponent from "./CenterComponent";
import Head from "./Head";
import Options from "./Options";

const Header = (props) => {
  return (
    <>
      <div className={"text-light bg-dark px-2 pt-1"}>
        <div className="mx-2 d-flex justify-content-between">
          <Head />
          <CenterComponent />
          <Options />
        </div>
      </div>
    </>
  );
};
Header.defaultProps = {};
export default Header;
