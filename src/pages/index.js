import React, { memo } from "react";
import ProfileCard from "../components/ProfileCard";
import TimeCard from "../components/TimeCard";
import { Grid, Box, Paragraph } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";


const IndexPage = () => {
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
  `)

const cardData = data.allDataJson.nodes


  return (
    <Grid
      sx={{
        gridTemplateColumns: [350, 250],
      }}
    >
      <ProfileCard
        sx={{
          gridColumn: 1 / 2,
          gridRow: 1,
        }}
      />
      <Box
        sx={{
          gridColumn: ["1", "2"],
          gridRow: ["2", "1"],
        }}
      ></Box>
     
      
      {cardData.map((card, index) => (
        <TimeCard
          index={index}
          key={card.id}
          title={card.title}
          timeframes={card.timeframes}
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
}

export default IndexPage;
