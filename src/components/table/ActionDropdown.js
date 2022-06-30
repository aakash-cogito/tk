import React from "react";

const ActionDropdown = (props) => {
  const [actionStatus, setActionStatus] = React.useState(false);
  const handleActionStatus = () => {
    setActionStatus((state) => !state);
  };
  return (
    <>
      <div className="position-relative">
        <div className="hover-pointer py-1 px-3" onClick={handleActionStatus}>
          :
        </div>
        <div
          className="position-absolute right-0 top-25 "
          style={{
            display: actionStatus ? "block" : "none",
          }}
        >
          <div className="border py-1 px-1 bg-light action-option position-relative">
            <div className="hover-pointer py-1 px-2 hover-background">Edit</div>
            <div className="hover-pointer py-1 px-2 hover-background">View</div>
            <div className="hover-pointer py-1 px-2 hover-background">Delete</div>
          </div>
          <div className="action-background" onClick={handleActionStatus}></div>
        </div>
      </div>
    </>
  );
};
export default ActionDropdown;
