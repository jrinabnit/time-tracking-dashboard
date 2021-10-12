import * as React from "react";
import ProfileCard from "../components/ProfileCard";
import TimeCard from "../components/TimeCard"


const IndexPage = () => {
  // graphql static query here to fetch data



  return (
    <>
      <ProfileCard />
      <TimeCard />
{/* {map through data and display the 6 items in a grid} */}
      
      
      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  );
};
export default IndexPage;
