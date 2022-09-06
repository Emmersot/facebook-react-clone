import React from "react";
import Friends from "./Friends.js";

const mainFriend = [
  {
    name: "Bill",
    profilePic: "url"
  },
  {
    name: "Bill",
    profilePic: "url"
  },
  {
    name: "Bill",
    profilePic: "url"
  },
  {
    name: "Bill",
    profilePic: "url"
  }
];

function FriendList() {
  return (
    <React.Fragment>
      <div id="friend">
        {mainFriend.map((friend, index) =>
        <Friends 
        name={friend.name}
        url={friend.url}
        key={index}
        />
        )}
      </div>
    </React.Fragment>
  )
}

export default FriendList;