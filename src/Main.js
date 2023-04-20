import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import "./Main.css";



class Main extends React.Component {
  render() {
    return (
      <div className="parent">
        {data.map(beast =>
          <HornedBeast
            title={beast.title}
            image_Url={beast.image_url}
            description={beast.description}
          />)}
      </div>
    )
  }
}

export default Main
