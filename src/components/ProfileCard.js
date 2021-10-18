import React from "react";
import { Heading, Paragraph, Box, Image } from "theme-ui";
import ProfilePic from "../assets/image-jeremy.png";

const ProfileCard = ({ value: { frequency, setFrequency } }) => {
  return (
    <Box
      sx={{
        gridColumn: "1 / 2",
        gridRow: "span 2",
        bg: "blue300",
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
            mx: 30,
            my: 30,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Paragraph
            sx={{
              mx: [0, 30],
            }}
          >
            Report for
          </Paragraph>
          <Heading
            variant="heading2"
            sx={{
              mx: [0, 30],
              pb: [0, 100],
            }}
          >
            Jeremy Robson
          </Heading>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["row", "column"],
          justifyContent: "space-between",
          my: 20,
          mx: 30,
          ".active": {
            color: "#FFFFFF",
          },
        }}
      >
        <Paragraph variant="frequency" onClick={() => setFrequency("daily")}>
          Daily
        </Paragraph>
        <Paragraph variant="frequency" onClick={() => setFrequency("weekly")}>
          Weekly
        </Paragraph>
        <Paragraph variant="frequency" onClick={() => setFrequency("monthly")}>
          Monthly
        </Paragraph>

      </Box>
    </Box>
  );
};
 
export default ProfileCard;


// const FrequencySelector({ frequency }) {
//   <Paragraph {} variant="frequency" onClick={() => setFrequency("daily")}>
//           Daily
//   </Paragraph>
// }