import React from "react";
import LeftFloat from "./LeftFloat.js";
import LiveFeed from "./LiveFeed.js";
import FriendList from "./FriendList.js";
import Story from "./Story.js";
import Header from "./Header.js";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="leftCol">
        <LeftFloat />
      </div>
      <div className="centerCol">
        <Story />
        <LiveFeed />   {/*will contain make post and post*/}
      </div>
      <div className="rightCol">
        <FriendList />
      </div>
    </React.Fragment>
  );
}

export default App;
