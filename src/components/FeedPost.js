import React from "react";
import PropTypes from "prop-types";

function FeedPost(props) {
  return (
    <React.Fragment>
      <div id="feedPost">
        <p>{props.name}</p>
        <p>{props.post}</p>
      </div>
    </React.Fragment>
  )
}

FeedPost.propTypes = {
  name: PropTypes.string,
  post: PropTypes.string
};

export default FeedPost;