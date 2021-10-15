import React from "react";
import { Heading, Paragraph, Box, Image } from "theme-ui";
import Ellipsis from "../assets/svgs/icon-ellipsis.svg";
import WorkImg from "../assets/svgs/icon-work.svg";
import PlayImg from "../assets/svgs/icon-play.svg";
import StudyImg from "../assets/svgs/icon-study.svg";
import ExerciseImg from "../assets/svgs/icon-exercise.svg";
import SocialImg from "../assets/svgs/icon-social.svg";
import SelfCareImg from "../assets/svgs/icon-self-care.svg";

const TimeCard = ({ title, timeframes, index, value: { frequency } }) => {
  const styles = [
    {
      bg: "red100",
      src: WorkImg,
    },
    {
      bg: "blue600",
      src: PlayImg,
    },
    {
      bg: "red200",
      src: StudyImg,
    },
    {
      bg: "green100",
      src: ExerciseImg,
    },
    {
      bg: "violet100",
      src: SocialImg,
    },
    {
      bg: "orange100",
      src: SelfCareImg,
    },
  ];

  const dailyCurr = timeframes.daily.current;
  const weeklyCurr = timeframes.weekly.current;
  const monthlyCurr = timeframes.monthly.current;
  const dailyPrev = timeframes.daily.previous;
  const weeklyPrev = timeframes.weekly.previous;
  const monthlyPrev = timeframes.monthly.previous;

  return (
    <Box
      sx={{
        borderRadius: "12px",
        ...styles[index],
      }}
    >
      <Image
        src={styles[index].src}
        sx={{
          height: 90,
          pl: "70%",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 0,
          bg: "blue300",
          borderRadius: "12px",
          mt: -30,
          alignSelf: "end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 30,
            pt: 40,
          }}
        >
          <Heading variant="heading3">{title}</Heading>
          <Image
            src={Ellipsis}
            alt="ellipsis"
            sx={{
              height: 5,
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: ["row", "column"],
            justifyContent: "space-between",
            alignItems: ["end", "start"],
            px: 30,
            pt: [10, 20],
            pb: 40,
          }}
        >
          <Heading variant="heading1">
            {frequency === "daily" && dailyCurr}
            {frequency === "weekly" && weeklyCurr}
            {frequency === "monthly" && monthlyCurr} hrs
          </Heading>
          <Paragraph>
            {frequency === "daily" && "Yesterday"}
            {frequency === "weekly" && "Last Week"}
            {frequency === "monthly" && "Last Month"} -{" "}
            {frequency === "daily" && dailyPrev}
            {frequency === "weekly" && weeklyPrev}
            {frequency === "monthly" && monthlyPrev}hrs
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};

export default TimeCard;
