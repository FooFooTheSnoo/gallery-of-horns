import React from "react";

class HornedBeast extends React.Component{
  render (){
    // console.log(this.props.name);
    return(
      <>
      
      <h2>{this.props.title}</h2>
      <img src={this.props.image_Url} alt={this.props.title} height={250}/>
      <p>{this.props.description}</p>

      </> 
    )
  }
}

export default HornedBeast
