import React from "react";
import reactDom from "react-dom";
import profile1 from "./images/temp.png"
import SingleComment from "./SingleComment";

const App = () => {
  return(
    <div className="ui comments">
     <SingleComment />
     <SingleComment />
     <SingleComment />
     <SingleComment />
    </div>
  )
}

reactDom.render(
  <App />,
  document.querySelector("#root")
)