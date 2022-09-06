import React from "react";
import PropTypes from "prop-types";

function Friends(props) {
  return (
    <React.Fragment>
      <div id="friend">
        <img src={`${props.url}`}/>
        <h3 id="name">{props.name}</h3>
      </div>
    </React.Fragment>
  )
}

Friends.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default Friends;