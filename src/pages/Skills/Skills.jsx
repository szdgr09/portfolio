import React from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const experiences = [
  {
    time: "June 2022 — Present",
    company: "Philippine Savings Bank",
    jobTitle: "Systems Analyst",
    descriptions: [
      "Provide production support and resolve complex technical issues to minimize downtime.",
      "Partner with cross-functional teams to design and deploy innovative solutions aligned with business goals.",
      "Analyze datasets to identify patterns and provide actionable insights.",
      "Develop internal and external applications and create reusable, secure boilerplate apps using ReactJS and .Net Core.",
      "Research and assess emerging technologies to improve innovation and efficiency.",
      "Migrate web applications from IIS (on-premise) to Docker containers, enhancing scalability and reliability.",
      "Document technical specifications including system architecture, ERDs, and process workflows.",
      "Train and assist junior developers.",
    ],
    init: "PSB",
  },
  {
    time: "November 2021 — June 2022",
    company: "Azoo Inc. ",
    jobTitle: "Software Developer",
    descriptions: [
      "Specialized in developing and maintaining property management systems.",
      "Designed and implemented web modules based on detailed UI/UX requirements.",
      "Transformed visual designs into interactive applications in collaboration with UI/UX designers.",
      "Collaborated with back-end teams to enhance functionality and integrate advanced features.",
      "Implemented and integrated GraphQL APIs.",
      "Occasionally contributed to back-end tasks, including API development.",
    ],
    isCurrent: false,
    init: "AI",
  },
  {
    time: "January 2021 — November 2021",
    company: "IT Managers Incs",
    jobTitle: "Software Developer",
    isCurrent: false,
    descriptions: [
      "Specialized in developing import and export management systems for the Japanese automobile industry.",
      "Gathered business requirements and translated them into technical specifications.",
      "Focused on front-end development and REST API integration.",
    ],
    init: "ITM",
  },
  {
    time: "January 2020 — July 2020",
    jobTitle: "Research and Development Engineer",
    company: "Inovus Philippines Technology",
    descriptions: [
      "Conducted engineering and experimental tests to support research.",
      "Designed PCB layouts and schematic diagrams using Proteus and Protel.",
      "Documented bills of materials and project costs.",
      "Created technical drawings using AutoCAD.",
    ],
    isCurrent: false,
    init: "IPT",
  },
  {
    time: "July 2017 — July 2019",
    company: "Artesyn Embedded Power",
    description: "",
    jobTitle: "Test Technician",
    isCurrent: false,
    descriptions: [
      "Designed automated functional tests to increase factory productivity.",
      "Debugged and optimized test product software to minimize bugs and improve accuracy.",
      "Migrated legacy software (Visual Basic 6.0) to newer platforms (C#).",
      "Designed modular automated testing equipment aligned with updated test programs.,",
    ],
    init: "AE",
  },
];

const Skills = () => {
  return (
    <>
      <Box display="flex">
        <List
          sx={{
            // width: "100%",
            // maxWidth: "minContent",
            display: "inline-block",
          }}
        >
          {experiences.map((exp, i) => (
            <ListItem alignItems="flex-start" key={`list-${i}`}>
              <ListItemText
                sx={{
                  padding: 2,
                  "&:hover": {
                    animation: "neuromophism 0.5s ease 0s 1 normal forwards",
                  },

                  "&:hover p": {
                    color: (theme) => theme.palette.common.white,
                  },

                  "@keyframes neuromophism": {
                    to: {
                      borderRadius: 2,
                      background: `rgba(0, 172, 159, 0.2)`,
                      boxShadow: `2px 4px 0px rgba(0, 172, 159, 0.5)`,
                      backdropFilter: "blur(5px)",
                    },
                  },
                }}
                primary={
                  <>
                    <Typography
                      sx={{ letterSpacing: "0.1rem" }}
                      variant="h6"
                      color="text.secondary"
                      fontWeight="600"
                    >
                      {`${exp.jobTitle?.toUpperCase()} — ${exp.company?.toUpperCase()}`}
                    </Typography>
                    <Typography variant="h7">{exp.time}</Typography>
                  </>
                }
                secondary={
                  <>
                    <>
                      <Typography
                        component="p"
                        sx={{ letterSpacing: "0.08rem", marginTop: 2 }}
                        variant="subtitle1"
                        color="text.secondary"
                      >
                        {exp.descriptions?.map((desc, i) => (
                          <p key={`desc-${i}`}>&#8226; {desc}</p>
                        ))}
                      </Typography>
                    </>
                  </>
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
