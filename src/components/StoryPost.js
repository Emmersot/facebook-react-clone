import React from "react";
import PropTypes from "prop-types";


function StoryPost(props) {
  const myStyles = {
    backgroundColor: props.color
  }
  return (
    <React.Fragment>  {/*style={`background-color: ${prop.color}`}  can not pass in string for style value*/}
      <div id={`storyPost ${props.color}`} style={myStyles}>
        <h3 id="name">{props.name}</h3>
        <p id={`${props.color}`}>{props.color}</p>
      </div>
    </React.Fragment>
  )
}

StoryPost.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string
};

export default StoryPost;

