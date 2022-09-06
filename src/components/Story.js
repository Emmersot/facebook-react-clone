import React from "react";
import StoryPost from "./StoryPost.js";

const mainStory = [
  {
    name: "Bill",
    color: "blue"
  },
  {
    name: "Bill",
    color: "red"
  },
  {
    name: "Bill",
    color: "green"
  },
  {
    name: "Bill",
    color: "orange"
  }
];

function Story() {
  return (
    <React.Fragment>
      <div id="story">
        {mainStory.map((storyPost, index) =>
        <StoryPost 
        name={storyPost.name}
        color={storyPost.color}
        key={index}
        />
        )}
      </div>
    </React.Fragment>
  )
}

export default Story;
