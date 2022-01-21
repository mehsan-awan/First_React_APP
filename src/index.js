import React from "react";
import reactDom from "react-dom";
import profile1 from "./images/temp.png"
import profile2 from "./images/tempF.png"
import profile3 from "./images/img-1.jpg"
import SingleComment from "./SingleComment";
import UserCard from "./usercard";

const App = () => {
  return(
    <div className="ui comments">
      <UserCard>
          <SingleComment 
            name="First"
            date="11/12/2011"
            text="Some Text 1"
            profilePic={ profile1 }
            />
       </UserCard>

      <UserCard>
          <SingleComment
            name="Second"
            date="11/12/2020"
            text="Some Text 2"
            profilePic={ profile2 }
            />
      </UserCard>
      <UserCard>
        <SingleComment 
          name="Third"  
          date="11/12/2022"
          text="Some Text 3"
          profilePic={ profile3 }
          />
      </UserCard>
    </div>
  )
}

reactDom.render(
  <App />,
  document.querySelector("#root")
)