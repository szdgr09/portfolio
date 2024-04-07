import React from "react";
import { Box } from '@mui/material';

type IconWrapperProps = {
  icon: JSX.Element,
};

const IconWrapper = ({ icon,  }: IconWrapperProps) => {
  return <Box marginX={1}>{ icon }</Box>;
};

export default IconWrapper;
