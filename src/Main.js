import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
  render (){
    return(
      <>
      <p>Hello World</p>
      <HornedBeast name={'Sparky'}/>
      <HornedBeast name={'spanky'}/>
      </>
    )
  }
}

export default Main
