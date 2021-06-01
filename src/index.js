//import module
import React from "react";
import ReactDom from "react-dom";
import Display from "./Display";
import Loading from "./Loading";

//crate component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div className="ui container comments">hi there!</div>;
// };

class App extends React.Component {
  state = { lat: null, errorMesaage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMesaage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("hello world did update");
  }

  renderContent() {
    if (this.state.errorMesaage && !this.state.lat) {
      return <div>This is error massage: {this.state.errorMesaage}</div>;
    }
    if (!this.state.errorMesaage && this.state.lat) {
      return <Display lat={this.state.lat} />;
    }
    return <Loading message="Please accept add your location" />;
  }
  render() {
    console.log(this.renderContent());
    return <div className="border-red">{this.renderContent()}</div>;
  }
}
//shoeing display of the i ndex.js
ReactDom.render(<App />, document.querySelector("#root"));
