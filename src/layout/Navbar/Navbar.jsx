import React, { useCallback, useMemo, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { StyledBox, StyledTableCell, StyledTh } from "./Navbar.styles";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { StyledTypography, StyledTable, StyledNavLink } from "./Navbar.styles";
import { SvgIcon } from "@mui/material";
import { useTheme } from "@emotion/react";

const Navbar = () => {
  const theme = useTheme();

  const handleNavBarStyle = useCallback(
    ({ isActive }) => {
      return {
        color: theme.palette.common.white,
        textDecoration: isActive ? "underline" : "none",
        transform: isActive ? "scale(1.05)" : "scale(1)",
        textDecorationColor: isActive
          ? theme.palette.secondary.main
          : "transparent",
      };
    },
    [theme]
  );

  const navs = useMemo(
    () => [
      {
        label: "Home",
        to: "/",
        icon: HomeIcon,
        color: theme.palette.tertiary.red,
      },
      {
        label: "Skills",
        to: "/skills",
        icon: AutoStoriesIcon,
        color: theme.palette.tertiary.blueGreen,
      },
      {
        label: "Experiences",
        to: "/experiences",
        icon: AccessibilityNewIcon,
        color: theme.palette.tertiary.yellow,
      },

      {
        label: "Contact",
        to: "/contact",
        icon: EmailIcon,
        color: theme.palette.tertiary.blue,
      },
    ],
    [theme]
  );

  return (
    <StyledBox
      component={motion.div}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      <StyledTable>
        <thead>
          <tr>
            {navs.map((nav, i) => (
              <StyledTh key={`${nav.label}-${i}`}>
                <StyledNavLink to={nav.to} style={handleNavBarStyle}>
                  <StyledTableCell
                    component={motion.div}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <SvgIcon htmlColor={nav.color}>
                      <nav.icon />
                    </SvgIcon>

                    <StyledTypography variant="h5">
                      {nav.label}
                    </StyledTypography>
                  </StyledTableCell>
                </StyledNavLink>
              </StyledTh>
            ))}
          </tr>
        </thead>
      </StyledTable>
    </StyledBox>
  );
};

export default Navbar;
