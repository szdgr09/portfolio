import React from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const experiences = [
  {
    time: "June 2022 - Present",
    jobTitle: "Philippine Savings Bank -  Systems Analyst",
    init: "PSB",
  },
  {
    time: "November 2021 - June 2022",
    jobTitle: "Azoo Inc. — Software Developer",
    isCurrent: false,
    init: "AI",
  },
  {
    time: "January 2021 - November 2021",
    jobTitle: "IT Managers Incs - Software Developer",
    isCurrent: false,
    init: "ITM",
  },
  {
    time: "January 2020 - July 2020",
    jobTitle:
      "Inovus Philippines Technology - Research and Development Engineer",
    isCurrent: false,
    init: "IPT",
  },
  {
    time: "July 2017 - July 2019",
    jobTitle: "Artesyn Embedded Power - Test Technician",
    isCurrent: false,
    init: "AE",
  },
];

const Skills = () => {
  return (
    <>
      <Box display='flex'>
        <List sx={{ width: "100%", maxWidth: 480 }}>
          {experiences.map((exp, i) => (
            <ListItem alignItems='flex-start' key={`list-${i}`}>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    backgroundColor: "white",
                  }}
                  children={
                    <Typography variant='h6' fontWeight='600' color='primary'>
                      {exp.init}
                    </Typography>
                  }
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant='h6'>{exp.time}</Typography>}
                secondary={
                  <Typography
                    sx={{ display: "inline" }}
                    variant='h7'
                    color='text.secondary'
                    fontWeight='bold'
                  >
                    {exp.jobTitle}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default Skills;
