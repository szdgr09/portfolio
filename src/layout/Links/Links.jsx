import { Box, Typography, Button, useTheme } from '@mui/material';
import { StyledBox } from './Link.styles';
import { motion } from 'framer-motion';

const LINKS = [
  {
    title: 'About',
    id: 'about',
  },
  {
    title: 'Work experiences',
    id: 'experiences',
  },
  {
    title: 'Skills',
    id: 'skills',
  },
  {
    title: 'Contact',
    id: 'contact',
  },
];

const Links = () => {
  const theme = useTheme();

  return (
    <StyledBox
      component='ul'
      display='flex'
      gap={4}
      margin={0}
      sx={{ listStyle: 'none' }}
    >
      {LINKS.map((link) => (
        <Box component='li' key={link.id}>
          <Button
            variant='link'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              document
                .getElementById(link.id)
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Typography
              variant='h5'
              fontWeight='bold'
              component={motion.div}
              whileHover={{
                scale: 1.05,
                color: theme.palette.info.main,
              }}
            >
              {link.title}
            </Typography>
          </Button>
        </Box>
      ))}
    </StyledBox>
  );
};

export default Links;
