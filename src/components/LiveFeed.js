import React from "react";
import FeedPost from "./FeedPost.js";


const mainFeed = [
  {
    name: "Bill",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc tellus, vulputate a lectus maximus, convallis viverra ante. In rhoncus viverra metus nec sollicitudin. Quisque condimentum lectus sed hendrerit elementum. Integer commodo, mi id viverra mollis, tellus quam dignissim sem, non interdum tellus risus eget lacus. Fusce pellentesque ullamcorper justo, quis dignissim nunc gravida vel. Praesent consequat rhoncus ornare. Phasellus magna lorem, vulputate venenatis accumsan ut, sodales non enim. Praesent non justo urna."
  },
  {
    name: "Bill",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nunc tellus, vulputate a lectus maximus, convallis viverra ante. In rhoncus viverra metus nec sollicitudin. Fusce pellentesque ullamcorper justo, quis dignissim nunc gravida vel. Praesent consequat rhoncus ornare. Phasellus magna lorem, vulputate venenatis accumsan ut, sodales non enim. Praesent non justo urna."
  },
  {
    name: "Bill",
    post: "Quisque condimentum lectus sed hendrerit elementum. Integer commodo, mi id viverra mollis, tellus quam dignissim sem, non interdum tellus risus eget lacus."
  }
];

function LiveFeed() {
  return (
    <React.Fragment>
      <div id="liveFeed">
        {mainFeed.map((feedPost, index) =>
        <FeedPost 
          name={feedPost.name}
          post={feedPost.post}
          key={index}
        />
        )}
      </div>
    </React.Fragment>
  )
}

export default LiveFeed;