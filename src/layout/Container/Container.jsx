import React from "react";
import { StyledGrid } from "./Container.styles";

const Container = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Container;
