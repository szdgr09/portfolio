import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(0.5, 2),
    },
    [theme.breakpoints.up("sm")]: {
      padding: "2rem 3rem",
    },
  };
});
