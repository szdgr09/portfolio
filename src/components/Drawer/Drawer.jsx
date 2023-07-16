import * as React from "react";
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

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      border={2}
      width={200}
      borderRadius={2}
      mt={4}
      mr={3}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About", "Project", "Skills", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={
                  <Typography
                    color="text.primary"
                    variant="h5"
                    fontWeight="600"
                  >
                    {text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledBox>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <SvgIcon htmlColor="white">
            <MenuIcon />
          </SvgIcon>
        </Button>
        <Drawer
          PaperProps={{
            height: "fit-content",
            sx: {
              background: "transparent",
            },
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </StyledBox>
  );
}
