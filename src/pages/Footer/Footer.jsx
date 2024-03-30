import { Box } from "@mui/material";
import { useCallback } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { IconButton } from "@mui/material";

const AnchorIcon = ({ children, ...rest }) => (
  <IconButton
    color='primary'
    sx={{
      "& > svg": {
        fontSize: "2.25rem",
      },
      "&:hover": {
        color: "#00AC9F",
      },
    }}
    {...rest}
  >
    {children}
  </IconButton>
);

const ICONS = [
  {
    icon: <GitHubIcon />,
    // link: "https://github.com/szdgr09",
    link: "https://github.com/szdgr09",
  },
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/",
    // link: "https://www.facebook.com/hervinson.samson/",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/",
    // link: "https://www.instagram.com/hizonsonzon/",
  },
  {
    icon: <MailOutlineIcon />,
    link: "mailto:samson.hervinson@gmail.com",
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/",
    // link: "https://www.linkedin.com/in/hervinson-samson/",
  },
];

const Footer = () => {
  const handleOnClick = useCallback((e, link) => {
    e.preventDefault();
    e.stopPropagation();
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.click();
  }, []);

  return (
    <Box width='100%' sx={{ backgroundColor: "white" }} marginTop={4}>
      <Box
        display='flex'
        padding={3}
        gap={2}
        justifyContent='center'
        paddingBottom={0}
      >
        {ICONS.map((ICON, index) => (
          <AnchorIcon
            key={`index-${index}`}
            onClick={(e) => handleOnClick(e, ICON.link)}
          >
            {ICON.icon}
          </AnchorIcon>
        ))}
      </Box>
      <Box
        component='p'
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
        color='primary.main'
      >
        <IconButton
          color='primary'
          sx={{
            "& > svg": {
              fontSize: "2.25rem",
            },
          }}
          disabled
        >
          <CopyrightIcon color='primary' />
        </IconButton>
        Hervinson Samson 2023
      </Box>
    </Box>
  );
};

export default Footer;
