import React from "react";
import styles from "../index.css";
import { Heading, Paragraph, Box, Image } from "theme-ui";
import ProfilePic from "../assets/image-jeremy.png";


function handleClick(){
  
}

const ProfileCard = () => {
  return (
    <Box
      sx={{
        bg: "blue300",
        maxWidth: ['350px', '250px'],
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: ["row", "column"],
          bg: "blue100",
          borderRadius: "16px",
        }}
      >
        <Image
          src={ProfilePic}
          sx={{
            borderRadius: "50px",
            border: "2px solid white",
            width: "80px",
            height: "auto",
            m: [20, 30]
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            my: 20,
        
          }}
        >
          <Paragraph
            sx={{
              mx: [10, 30],
            }}
          >
            Report for
          </Paragraph>
          <Heading variant="heading2" 
            sx={{ 
              mx: [10, 30],
              mb: [0, 40],
              }}>
            Jeremy Robson
          </Heading>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["row", "column"],
          justifyContent: "space-evenly",
          m: 30,
        }}
      >
        <Paragraph sx={{ my: 2 }} onClick={handleClick} >Daily</Paragraph>
        <Paragraph sx={{ my: 2 }}>Weekly</Paragraph>
        <Paragraph sx={{ my: 2 }}>Monthly</Paragraph>
      </Box>
    </Box>
  );
};

export default ProfileCard;
