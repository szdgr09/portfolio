import React from "react";
import { StyledPaper, StyledBox } from "./ModuleContainer.styles";
import { motion } from "framer-motion";

const ModuleContainer = ({ children }) => {
  return (
    <StyledBox
      component={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3, delayChildren: 2 },
      }}
      exit={{ x: window.innerWidth, transition: { duration: 0.25 } }}
    >
      <StyledPaper>{children}</StyledPaper>
    </StyledBox>
  );
};

export default ModuleContainer;
