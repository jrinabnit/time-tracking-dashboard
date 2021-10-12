import React from "react";
import styles from '../index.css'
import { Heading, Paragraph, Box, Image } from "theme-ui";
import ProfilePic from '../assets/image-jeremy.png'
const ProfileCard = () => {


  return (
  <Box sx={{ 
      bg: 'blue300',
      width: '300px',
      borderRadius: '16px',
      }}>
    <Box sx={{ 
        bg: 'blue100',
        borderRadius: '16px',



        }}>
    <Image src={ProfilePic} sx={{
            borderRadius: '50px',
            border: '2px solid white', 
            width: '100px',
            height: 'auto',
        }} />
        <Heading variant='heading2'>Report for</Heading><br/>
        <Heading variant='heading1'>Jeremy Robson</Heading>
    </Box>
        
  
  <Paragraph>Daily</Paragraph>
  <Paragraph>Weekly</Paragraph>
  <Paragraph>Monthly</Paragraph>
  </Box>
  )
};

export default ProfileCard;
