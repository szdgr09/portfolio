import React, { Fragment, useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { SvgIcon, Typography } from "@mui/material";
import { StyledBox } from "./Drawer.styles";

const LINKS = [
  {
    title: "About",
    id: "about",
  },
  {
    title: "Work experiences",
    id: "experiences",
  },
  {
    title: "Skills",
    id: "skills",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);

  const list = useCallback(
    () => (
      <Box
        role="presentation"
        border={2}
        width={200}
        borderRadius={2}
        mt={4}
        mr={3}
      >
        <List>
          {LINKS.map((link, index) => (
            <ListItem key={link.id} disablePadding>
              <ListItemButton
                onClick={(e) => {
                  setOpen(true);
                  e.preventDefault();
                  e.stopPropagation();
                  let el = document.getElementById(link.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      color="text.primary"
                      variant="h5"
                      fontWeight="600"
                    >
                      {link.title}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    ),
    []
  );

  return (
    <StyledBox>
      <Fragment key={"right"}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(true);
          }}
        >
          <SvgIcon htmlColor="white">
            <MenuIcon />
          </SvgIcon>
        </Button>
        <Drawer
          PaperProps={{
            height: "fit-content",
            sx: {
              background: "transparent",
              boxShadow: "none",
            },
          }}
          anchor={"right"}
          open={open}
          onClose={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(false);
          }}
          ModalProps={{
            disableRestoreFocus: true,
          }}
        >
          {list()}
        </Drawer>
      </Fragment>
    </StyledBox>
  );
};

export default TemporaryDrawer;
