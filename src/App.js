import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Main.css";
import BeastModal from "./Beast.Modal";
import beastData from "./data.json";
import { Form } from "react-bootstrap";






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: {},
      showModal: false,
      beastData: beastData
    }
  }

  showBeastModal = () => {
    this.setState({ showModal: true })
  }

  hideBeastModal = () => {
    this.setState({ showModal: false })
  }

  selectedBeast = (beastObj) => {
    console.log(beastObj);
    this.setState({ beast: beastObj })
  }

  changeHorn = (e) => {
    e.preventDefault();
    let filterHorn;

    if (e.target.value === '1') {
      filterHorn = beastData.filter(beast => beast.horns === 1)
      console.log("filterHorn", filterHorn)
    }
    else if (e.target.value === '2') {
      filterHorn = beastData.filter(beast => beast.horns === 2)
    }
    else if (e.target.value === '3') {
      filterHorn = beastData.filter(beast => beast.horns === 3)
    }
    else if (e.target.value === '100') {
      filterHorn = beastData.filter(beast => beast.horns === 100)
    }
    else {
      filterHorn = beastData
    }
    this.setState({beastData: filterHorn})

  };

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Label>sort by horn number</Form.Label>
            <Form.Select onChange={this.changeHorn}>
              <option>select menu</option>
              <option value=" ">Sort by horn number</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">One-Hundred</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          showBeastModal={this.showBeastModal}
          selectedBeast={this.selectedBeast}
          beastData={this.state.beastData}
        />
        <BeastModal
          showModal={this.state.showModal}
          hideBeastModal={this.hideBeastModal}
          beast={this.state.beast} />
        <Footer />
      </>
    )
  }
}


export default App;