import React from "react";
import faker from "faker";
const ComentDetails = (props) => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div class="metadata">
          <span class="date">{props.time}</span>
        </div>
        <div class="text">{props.comment}</div>
      </div>
    </div>
  );
};
export default ComentDetails;
