import React from "react";
import "./Display.css";
const Display = (props) => {
  const Seassion = GetSeasion(props.lat, new Date().getMonth());
  const { text, iconName } = seasionConfig[Seassion];
  return (
    <div className={`display-seasion ${Seassion}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};
const seasionConfig = {
  summer: {
    text: "this is hot seassion",
    iconName: "sun",
  },
  winter: {
    text: "this chilly",
    iconName: "snowflake",
  },
};

const GetSeasion = (lat, months) => {
  if (months > 2 && months < 9) {
    return lat > 0 ? "winter" : "summer";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
};

export default Display;
