import React from "react";
import "font-awesome/css/font-awesome.min.css";
import BackgroundSlideshow from "react-background-slideshow";
import "./navbar.css";
import axios from "axios";

class Navbar extends React.Component {
  state = {
    navItems: [],
    images: [],
    titles: [],
    subtitles: [],
  };
  componentDidMount() {
    this.titleUpdater();
    axios
      .get("https://voda-react-assessment.herokuapp.com/slider")
      .then((response) => {
        const images = [];
        const titles = [];
        const subtitles = [];
        response.data.map((data) => {
          return images.push(data.image);
        });
        response.data.map((data) => {
          return titles.push(data.title);
        });
        response.data.map((data) => {
          return subtitles.push(data.subtitle);
        });
        this.setState({
          images: images,
          titles: titles,
          subtitles: subtitles,
        });
      });
    axios
      .get("https://voda-react-assessment.herokuapp.com/menu")
      .then((response) => {
        this.setState({ navItems: response.data });
      });
  }
  titleUpdater = () => {
    if (this.state.images) {
      setTimeout(() => {
        document.getElementById("title").innerHTML = "Slide 1";
        document.getElementById("subtitle").innerHTML = "Text For Slide 1";
      }, 0);
      setTimeout(() => {
        document.getElementById("title").innerHTML = "Slide 2";
        document.getElementById("subtitle").innerHTML = "Text For Slide 2";
      }, 4000);
      setTimeout(() => {
        document.getElementById("title").innerHTML = "Slide 3";
        document.getElementById("subtitle").innerHTML = "Text For Slide 3";
      }, 8000);
      setTimeout(() => {
        this.titleUpdater();
      }, 12000);
    }
  };
  render() {
    let titles = null;
    titles = this.state.navItems.map((title) => {
      return (
        <a
          key={title.title}
          href="/"
          className="nav-item home"
          style={{ textDecoration: "none" }}
        >
          {title.title}
        </a>
      );
    });

    return (
      <div className="Header">
        <div
          className="carousel"
          style={{ zIndex: "10", position: "absolute" }}
        >
          <BackgroundSlideshow
            images={this.state.images}
            animationDelay={2500}
          />
        </div>
        <div
          className="nav"
          style={{ position: "absolute", zIndex: "100", width: "100%" }}
        >
          <div className="nav-items">{titles}</div>
          <div className="pageHeading" id="title"></div>
          <p className="description" id="subtitle">
            text for slide 1
          </p>
        </div>
      </div>
    );
  }
}

export default Navbar;
