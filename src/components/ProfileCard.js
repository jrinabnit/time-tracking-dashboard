import React from "react";
import { Heading, Paragraph, Box, Image } from "theme-ui";
import ProfilePic from "../assets/image-jeremy.png";

const ProfileCard = ({ value: { frequency, setFrequency } }) => {
  const [active, setActive] = React.useState("daily");
  const activeValue = { active, setActive };

  const frequencyOptions = [
    { period: "Daily", value: "daily" },
    { period: "Weekly", value: "weekly" },
    { period: "Monthly", value: "monthly" },
  ];

  return (
    <Box
      sx={{
        gridColumn: "1 / 2",
        gridRow: "span 2",
        bg: "blue300",
        borderRadius: "16px",
        ".active": {
          color: "#FFFFFF",
        },
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
        {frequencyOptions.map((option, index) => (
          <FrequencySelector
            key={option.id}
            frequencyOption={option.period}
            frequencyValue={option.value}
            setFrequency={setFrequency}
            frequency={frequency}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProfileCard;

const FrequencySelector = ({
  frequency,
  setFrequency,
  frequencyOption,
  frequencyValue,
}) => (
  <Paragraph
    variant={frequencyValue === frequency ? "active" : "frequency"}
    onClick={() => setFrequency(frequencyValue)}
  >
    {frequencyOption}
  </Paragraph>
);
