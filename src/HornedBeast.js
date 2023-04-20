import React from "react";
import { Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Main.css";


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: 0
    }
  }

  incrementFavorited = () => {
    this.setState({
      favorited: this.state.favorited + 1
    })
  }

  render() {

    return (
      <>
        <div className="parent">
          <Card className="display" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_Url} alt={this.props.title} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.state.favorited}💖's
              </Card.Text>
              <Button variant="primary" onClick={this.incrementFavorited}> Love this!</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    )
  }
}

export default HornedBeast
