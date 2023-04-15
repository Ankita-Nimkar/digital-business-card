import React, { Component } from "react";
import Top from "./components/Top.jsx";
import Mid from "./components/Mid.jsx";
import Footer from "./components/Footer.jsx";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Top />
        <Mid />
        <Footer />
      </div>
    );
  }
}

export default App;
