import React, { useState, useEffect } from "react";
import "./slider.css";

function SlideShow({ image, auto }) {
  const [imageIndex, setImageIndex] = useState(0);

  let currentSlideIndex = imageIndex ? imageIndex : 0;
  const handleLeftClick = () => {
    if (imageIndex === 0) {
      setImageIndex(image.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (imageIndex === image.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const autoMoveSlider = () => {
    if (currentSlideIndex === image.length - 1) {
      currentSlideIndex = 0;
      setImageIndex(currentSlideIndex);
    } else {
      currentSlideIndex = currentSlideIndex + 1;
      setImageIndex(currentSlideIndex);
    }
  };
  const renderIndicators = () => {
    return image.map((d, index) => {
      return (
        <span
          key={index}
          style={{
            marginRight: "15px",
            color: "gray",
            fontSize: "15px",
            cursor: "pointer",
          }}
          className={imageIndex === index ? "indicator-active" : ""}
          onClick={() => setImageIndex(index)}
        >
          .
        </span>
      );
    });
  };
  useEffect(() => {
    if (auto && image) {
      const autoMove = setInterval(autoMoveSlider, 3000);
      return () => clearInterval(autoMove);
    }
  }, [auto, image, imageIndex]);

  return image ? (
    <div className="slideshow-wrapper">
      <div className="controls-slider-left" onClick={handleLeftClick}>
        <p className="slider--arrow"></p>
        <p className="slider--arrow"></p>
      </div>
      <div className="controls-slider-right" onClick={handleRightClick}>
        <p className="slider--arrow"></p>
        <p className="slider--arrow"></p>
      </div>

      <div className="slideshow-image">
        <img
          src={image[imageIndex].pic}
          alt="latest movies"
          className="slideshow-image-tag"
        />
      </div>
      <div className="slideshow-indicator">
        {image && image.length > 0 ? renderIndicators() : ""}
      </div>
    </div>
  ) : (
    <p>loading</p>
  );
}

export default SlideShow;
