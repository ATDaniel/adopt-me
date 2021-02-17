import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  // Whenever you add event listeners, make them arrow functions.
  // Otherwise, 'this' will have the wrong context.
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index, // '+' coerces value into an integer. Same as parseInt()
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div classname="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
