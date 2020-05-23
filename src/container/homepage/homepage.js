import React from "react";
import "./homepage.css";
import Navbar from "../navbar/navbar";
import Sections from "../sections/sections";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <section>
          <Navbar />
        </section>
        <section>
          <Sections />
        </section>
      </div>
    );
  }
}

export default Homepage;
