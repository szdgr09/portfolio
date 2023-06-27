import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { StyledBox, StyledTableCell, StyledTh } from "./Navbar.styles";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { StyledTypography, StyledTable } from "./Navbar.styles";

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
                <StyledTableCell>
                  <nav.icon />
                  <StyledTypography
                    variant="h5"
                    to={nav.to}
                    component={NavLink}
                  >
                    {nav.label}
                  </StyledTypography>
                </StyledTableCell>
              </StyledTh>
            ))}
          </tr>
        </thead>
      </StyledTable>
    </StyledBox>
  );
};

export default Navbar;
