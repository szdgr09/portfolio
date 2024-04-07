import React from "react";
import { Typography } from "@mui/material";

const SnackBarMessages = ({ message }) => {
  return <Typography variant='subtitle1'>{message}</Typography>;
};

export default React.memo(SnackBarMessages);
