import React from "react";
import { StyledPaper, StyledBox } from "./ModuleContainer.styles";
import { motion } from "framer-motion";

const ModuleContainer = ({ children }) => {
  return (
    <StyledBox
      component={motion.div}
      initial={{ x: -300 }}
      animate={{ x: 0, transition: { duration: 0.25 } }}
      ext={{ x: window.innerWidth, transition: { duration: 0.25 } }}
    >
      <StyledPaper>{children}</StyledPaper>
    </StyledBox>
  );
};

export default ModuleContainer;
