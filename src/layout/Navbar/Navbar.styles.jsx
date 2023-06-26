import { styled, Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "1024px",
  padding: theme.spacing(1, 0),
  backgroundColor: theme.palette.appBar.primary,
  display: "flex",
  position: "relative",
}));

export const StyledTableCell = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: theme.spacing(5),
}));
