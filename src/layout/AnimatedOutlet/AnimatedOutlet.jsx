import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AnimatedOutlet = () => {
  const location = useLocatio();

  return (
    <>
      <Outlet />
    </>
  );
};

export default AnimatedOutlet;
