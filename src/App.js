import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Main.css";
import BeastModal from "./Beast.Modal";
 





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: {},
      showModal: false
    }
  }

  showBeastModal = () => {
    this.setState({ showModal: true })
  }

  hideBeastModal = () => {
    this.setState({showModal: false})
  }

  selectedBeast=(beastObj) => {
    console.log(beastObj);
    this.setState({beast: beastObj})
  }

  render() {
    return (
      <>
        <Header />
        <Main
          showBeastModal={this.showBeastModal} 
          selectedBeast={this.selectedBeast}/>
        <BeastModal
          showModal={this.state.showModal}
          hideBeastModal={this.hideBeastModal} 
          beast={this.state.beast}/>
        <Footer />
      </>
    )
  }
}

export default App;