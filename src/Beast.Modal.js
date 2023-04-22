import React from "react";
import  Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class BeastModal extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
      < Modal show={this.props.showModal} onHide={this.props.hideBeastModal }>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body><img src={this.props.beast.image_url} alt={this.props.beast.title}/></Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={this.props.hideBeastModal}>Close</Button>
      </Modal.Footer>
    </Modal > 
    </>
  
    )
  }
}
export default BeastModal