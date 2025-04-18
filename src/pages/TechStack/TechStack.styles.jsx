import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: 0,
  width: "160px",

  borderRadius: theme.spacing(0.5),
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  display: "flex",
  borderColor: theme.palette.common.white,
  flexDirection: "column",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  width: "100%",
  margin: 0,
  borderBottom: `1px solid ${theme.palette.common.white}`,
  paddingTop: 4,
  paddingBottom: 4,
  color: theme.palette.common.white,
}));

export const StyledCardBox = styled(Box)(({ theme }) => ({
  background: "rgba(46, 109, 180, 0.15)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  "-webkit-backdrop-filter": "blur(5px)",
  borderRadius: "8px",
  border: "1px solid rgba(46, 109, 180, 0.99)",
  margin: theme.spacing(2, 1),
}));
