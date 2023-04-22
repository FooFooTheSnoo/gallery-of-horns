import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import "./Main.css";



class Main extends React.Component {
  render() {
    console.log(data);
    return (
      <div className="parent">
        {data.map(beast => {
          
          return  <HornedBeast
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              showBeastModal={this.props.showBeastModal}
              beast={beast}
              selectedBeast={this.props.selectedBeast}
            />
        })
        }
      </div>
    )
  }
}
export default Main
