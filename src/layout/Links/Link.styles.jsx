import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  listStyle: "none",
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
