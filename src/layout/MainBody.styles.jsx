import { Box, styled } from "@mui/material";

export const StyledInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.mainBody.primary,
  height: "100%",
  position: "relative",
  // overflow: "hidden",
}));
