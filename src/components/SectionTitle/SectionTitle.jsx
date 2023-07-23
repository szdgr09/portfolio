import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Typography } from "@mui/material";

const cardVariants = {
  offscreen: {
    // x: 300,
    y: 600,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

const SectionTitle = ({ label }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 1 }}
      >
        <m.div variants={cardVariants}>
          <Typography
            variant="h3"
            fontWeight={700}
            color="secondary"
            paddingY={2}
          >
            {label}
          </Typography>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default React.memo(SectionTitle);
