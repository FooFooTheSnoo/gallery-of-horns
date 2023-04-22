import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import "./Main.css";



class Main extends React.Component {
  render() {

    const hornedBeastArr = [];

    data.map(beast => {
        (
          <HornedBeast
            title={beast.title}
            image_Url={beast.image_url}
            description={beast.description}
          />)

    })
  }
}
export default Main
