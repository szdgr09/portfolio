import React from "react";
import { StyledTypography } from "./Navbar.styles";

const HizonNavLink = (props) => {
  const { children, ...rest } = props;
  console.log({ props });
  return <StyledTypography {...rest}>{children}</StyledTypography>;
};

export default HizonNavLink;
