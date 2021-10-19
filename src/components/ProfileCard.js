import React from "react";
import { Heading, Paragraph, Box, Image, Card } from "theme-ui";
import ProfilePic from "../assets/image-jeremy.png";

const ProfileCard = ({ value: { frequency, setFrequency } }) => (
  <Card
    sx={{
      gridColumn: "1 / 2",
      gridRow: "span 2",
      bg: "blue300",
      ".active": {
        color: "#FFFFFF",
      },
    }}
  >
    <Card
      sx={{
        display: "flex",
        flexDirection: ["row", "column"],
        bg: "blue100",
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
    </Card>
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
      <FrequencySelector
        frequencyValue="daily"
        setFrequency={setFrequency}
        frequency={frequency}
      />
      <FrequencySelector
        frequencyValue="weekly"
        setFrequency={setFrequency}
        frequency={frequency}
      />
      <FrequencySelector
        frequencyValue="monthly"
        setFrequency={setFrequency}
        frequency={frequency}
      />
    </Box>
  </Card>
);

export default ProfileCard;

const FrequencySelector = ({ frequency, setFrequency, frequencyValue }) => {
  const capitalizedFrequencyValue =
    frequencyValue.charAt(0).toUpperCase() + frequencyValue.slice(1);

  return (
    <Paragraph
      variant={frequencyValue === frequency ? "active" : "frequency"}
      onClick={() => setFrequency(frequencyValue)}
    >
      {capitalizedFrequencyValue}
    </Paragraph>
  );
};
