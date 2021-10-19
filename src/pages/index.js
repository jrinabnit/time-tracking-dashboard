import React from "react";
import styles from "../index.css";
import ProfileCard from "../components/ProfileCard";
import TimeCard from "../components/TimeCard";
import { Grid, Box } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const [frequency, setFrequency] = React.useState("daily");
  const value = { frequency, setFrequency };

  const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          id
          title
          timeframes {
            daily {
              current
              previous
            }
            monthly {
              current
              previous
            }
            weekly {
              current
              previous
            }
          }
        }
      }
    }
  `);

  const cardData = data.allDataJson.nodes;

  return (
    <Grid
      sx={{
        gap: "20px",
        gridTemplateColumns: ["1, 300px", "repeat(4, 350px)"],
        gridTemplateRows: [null, "repeat(2, 250px)"],
      }}
    >
      <ProfileCard value={value} />
      {cardData.map((card, index) => (
        <TimeCard
          index={index}
          key={card.id}
          title={card.title}
          current={card.timeframes[frequency].current}
          previous={card.timeframes[frequency].previous}
          value={value}
        />
      ))}
      <Box sx={{ color: "#000" }}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" >
          Frontend Mentor
        </a>
        . Coded by Jeremy Inabnit
      </Box>
      .
    </Grid>
  );
};

export default IndexPage;
