

import React from "react";
import BellIcon from "../icons/BellIcon";
import CircleIcon from "../icons/CircleIcon";

const Options = (props) => {
  return (
    <>
      <div className="d-flex">
        <div className="mx-1"><BellIcon /></div>
        <div className="mx-1"><CircleIcon /></div>
      </div>
    </>
  );
};
Options.defaultProps = {};
export default Options;
