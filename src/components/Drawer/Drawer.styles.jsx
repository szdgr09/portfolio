import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export { StyledBox };
