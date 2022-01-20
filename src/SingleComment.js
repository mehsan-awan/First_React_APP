import React from 'react';
import profile1 from "./images/temp.png";


const SingleComment = () => {
    return(
          <div className="comment">
            
            <a href="/" className="avatar">
              <img src={profile1} alt="profile picture" />
            </a>
    
            <div className="content">
              <a href="/" className="author">
                User1
              </a>
    
              <div className="metadata">
                <span className="date">
                  Today at 5:00PM
                </span>
              </div>
    
              <div className="text">
                Comment Text 1
              </div>
            </div>
    
          </div>
          
      )
}


export default SingleComment;