import React from "react";
import styles from '../index.css'
import { Heading, Paragraph, Box, Image } from "theme-ui";
import Ellipsis from '../assets/svgs/icon-ellipsis.svg'

const TimeCard = () => {
  return (
    <Box
      sx={{
        bg: "orange100",
        height: "200px",
        width: "200px",
        borderRadius: "12px",
      }}
    >
      <Box
        sx={{ bg: "blue300", height: "100px", width: "100px", borderRadius: "12px", p: 50 }}
      >
        <Heading variant='heading2'>Work</Heading><Image src={Ellipsis} alt='ellipsis' sx={{ width: '20px', py: 20, }} />
        <Heading variant='heading1'>32hrs</Heading>
        <Paragraph>
          Last Week - <Heading type='h2'>36hrs</Heading>{" "}
        </Paragraph>
      </Box>
    </Box>
  );
};

export default TimeCard;
