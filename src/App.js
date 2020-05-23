import React from "react";
import Homepage from "./container/homepage/homepage";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Homepage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
