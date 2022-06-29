import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Router = (props) => {
  const { routesArray } = props;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routesArray.map((data) => (
            <Route path={data.path} element={data.element} key={data.path} />
          ))}
          <Route path="*" element={<Navigate to={""} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
Routes.defaultProps = {
  routesArray: [],
};
export default Router;
