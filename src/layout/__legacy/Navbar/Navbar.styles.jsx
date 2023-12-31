import { styled, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: "1024px",
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.appBar.primary,
  display: "flex",
  position: "relative",
  borderRadius: theme.spacing(2),
}));

export const StyledTableCell = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: theme.spacing(5),
}));

export const StyledTh = styled("th")(({ theme }) => ({
  color: theme.palette.common.white, // TODO contrast
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "inherit", // TODO contrast
  paddingLeft: theme.spacing(0.25),
  paddingRight: theme.spacing(0.25),
  // textDecoration: "none",
}));

export const StyledTable = styled("table")(({ theme }) => ({
  margin: "auto",
  width: "fit-content",
  marginLeft: "auto",
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => {
  return {
    color: theme.palette.common.white,
    textDecoration: "none",
  };
});
