import React from "react";
import styles from "../index.css";
import ProfileCard from "../components/ProfileCard";
import TimeCard from "../components/TimeCard";
import { Grid } from "theme-ui";
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
        // gridTemplateColumns: [350, 300],
        gridTemplateColumns: ["1, 350px", "repeat(4, 350px)"],
        gridTemplateRows: [  , "repeat(2, 250px)"],
      }}
    >
      <ProfileCard
        value={value}
        sx={{
          gridColumn: 1 / 2,
          gridRow: "1 / span 2",
        }}
      />

      {cardData.map((card, index) => (
        <TimeCard
          index={index}
          key={card.id}
          title={card.title}
          timeframes={card.timeframes}
          value={value}
        />
      ))}

      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </Grid>
  );
};

export default IndexPage;
