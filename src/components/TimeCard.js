import React from "react";
import styles from "../index.css";
import { Heading, Paragraph, Box, Image } from "theme-ui";
import Ellipsis from "../assets/svgs/icon-ellipsis.svg";
import WorkImg from "../assets/svgs/icon-work.svg";
import PlayImg from "../assets/svgs/icon-play.svg";
import StudyImg from "../assets/svgs/icon-study.svg";
import ExerciseImg from "../assets/svgs/icon-exercise.svg";
import SocialImg from "../assets/svgs/icon-social.svg";
import SelfCareImg from "../assets/svgs/icon-self-care.svg";


const TimeCard = ({title, timeframes, index}) => {

const styles = [
  {
    bg: "red100",
    src: {WorkImg},
  },
  {
    bg: "blue600",
    src: {PlayImg},
  },
  {
    bg: "red200",
    src: {StudyImg}
  },
  {
    bg: "green100",
    src: {ExerciseImg}
  },
  {
    bg: "violet100",
    src: {SocialImg}
  },
  {
    bg: "orange100",
    src: {SelfCareImg}
  },
]

const dailyCurr = timeframes.daily.current
const weeklyCurr = timeframes.weekly.current
const monthlyCurr = timeframes.monthly.current
const dailyPrev = timeframes.daily.previous
const weeklyPrev = timeframes.weekly.previous
const monthlyPrev = timeframes.monthly.previous

  return (
    <Box
      sx={{
        borderRadius: "12px",
        minWidth: ["250px"],
        maxHeight: ["250px"],
        ...styles[index],
      }}
    >
      <Image
        sx={{
          pl: "70%",
          mb: "-15%",
        }}
        
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 0,
          bg: "blue300",
          borderRadius: "12px",
          mt: 30,
          alignSelf: "end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 20,
          }}
        >
          <Heading variant="heading2">{title}</Heading>
          <Image src={Ellipsis} alt="ellipsis" />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: ["row", "column"],
            justifyContent: "space-between",
            
            p: 20,
          }}
        >
          <Heading variant="heading1">
          {dailyCurr}
          
          
          </Heading>
          <Paragraph>
          Last Week - {dailyPrev}
          {/* {3 options} */}
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};

export default TimeCard;
