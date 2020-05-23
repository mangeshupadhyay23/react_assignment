import React from "react";
import "./section 1.css";
import axios from "axios";

class ImageSection extends React.Component {
  state = {
    images: [],
  };
  componentDidMount() {
    axios
      .get("https://voda-react-assessment.herokuapp.com/home")
      .then((response) => {
        this.setState({ images: response.data[0].sections[0].images });
        console.log(this.state.images);
      });
  }
  render() {
    let images = null;
    if (this.state.images) {
      images = this.state.images.map((image) => {
        return (
          <img
            src={image.img}
            alt={image.title}
            key={image.title}
            style={{ width: "20%" }}
          />
        );
      });
    }
    return <div className="imageList">{images}</div>;
  }
}

export default ImageSection;
