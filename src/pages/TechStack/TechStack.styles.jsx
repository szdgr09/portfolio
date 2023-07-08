import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  //   padding: theme.spacing(2),
  paddingTop: 0,

  borderRadius: theme.spacing(1),
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  display: "flex",
  borderColor: theme.palette.common.white,
  flexDirection: "column",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  margin: 0,
  borderBottom: "none",
  background: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0, 0.5, 0, 0.5),
}));
