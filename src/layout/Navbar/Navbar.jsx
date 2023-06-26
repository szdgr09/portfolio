import React from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { StyledBox, StyledTableCell } from "./Navbar.styles";
import { NavLink } from "react-router-dom";

const navs = [
  {
    label: "Home",
    to: "/",
    icon: HomeIcon,
  },
  {
    label: "Skills",
    to: "/skills",
    icon: AccessibilityNewIcon,
  },
  {
    label: "Tech. & Tools",
    to: "/technologies",
    icon: AutoStoriesIcon,
  },
  {
    label: "Contact",
    to: "/contact",
    icon: EmailIcon,
  },
];

const Navbar = () => {
  return (
    <StyledBox>
      <table
        style={{ margin: "auto", width: "fit-content", marginLeft: "auto" }}
      >
        <thead>
          <tr>
            {/* {navs.map((nav, i) => (
              <th style={{ color: "white" }} key={`${nav.label}-${i}`}>
                <StyledTableCell>
                  <HomeIcon />
                  <Typography
                    variant="h5"
                    to={nav.to}
                    color="white"
                    paddingLeft={0.5}
                    component={NavLink}
                  >
                    {nav.label}
                  </Typography>
                </StyledTableCell>
              </th>
            ))} */}
            <th style={{ color: "white" }}>
              <StyledTableCell>
                <HomeIcon />
                <Typography variant="h5" color="white" paddingLeft={0.5}>
                  Home
                </Typography>
              </StyledTableCell>
            </th>
            <th style={{ color: "white" }}>
              <StyledTableCell>
                <AccessibilityNewIcon />
                <Typography variant="h5" color="white" paddingLeft={0.5}>
                  Skills
                </Typography>
              </StyledTableCell>
            </th>
            <th style={{ color: "white" }}>
              <StyledTableCell>
                <AutoStoriesIcon />
                <Typography variant="h5" color="white" paddingLeft={0.5}>
                  Tech. & Tools
                </Typography>
              </StyledTableCell>
            </th>
            <th style={{ color: "white" }}>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <EmailIcon />
                <Typography variant="h5" color="white" paddingLeft={0.5}>
                  Contact
                </Typography>
              </Box>
            </th>
          </tr>
        </thead>
      </table>
    </StyledBox>
  );
};

export default Navbar;
