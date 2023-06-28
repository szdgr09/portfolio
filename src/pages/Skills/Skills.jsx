import React from "react";
import { Box, Grid, Paper } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { deepOrange } from "@mui/material/colors";
import ModuleContainer from "../../layout/ModuleContainer/ModuleContainer";
import HizonAppBar from "../../layout/HizonAppBar/HizonAppBar";

const experiences = [
  {
    time: "June 2023 - Present",
    jobTitle: "Philippine Savings Bank — Systems Analyst",
    isCurrent: true,
  },
  {
    time: "November 2021 - June 2022",
    jobTitle: "Azoo Inc. — Software Developer",
    isCurrent: false,
  },
  {
    time: "January 2021 - November 2021",
    jobTitle: "IT Managers Incs - Software Developer",
    isCurrent: false,
  },
  {
    time: "January 2020 - July 2020",
    jobTitle: "R&D Engr. - Inovus Philippines Technology",
    isCurrent: false,
  },
  {
    time: "July 2017 - July 2019",
    jobTitle: "Test Technician - Artesyn Embedded Power",
    isCurrent: false,
  },
];

const Skills = () => {
  return (
    <>
      <ModuleContainer>
        <HizonAppBar title="Work Experiences" hasSubtitle={false} />
        <Box display="flex" justifyContent="center">
          <List sx={{ width: "100%", maxWidth: 480 }}>
            {experiences.map((exp, i) => (
              <ListItem alignItems="flex-start" key={`list-${i}`}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: deepOrange[500] }} children="P" />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="h6">{exp.time}</Typography>}
                  secondary={
                    <Typography
                      sx={{ display: "inline" }}
                      variant="h7"
                      color="text.secondary"
                      fontWeight="bold"
                    >
                      {exp.jobTitle}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </ModuleContainer>
    </>
  );
};

export default Skills;
