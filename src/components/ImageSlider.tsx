import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  CircleDot,
  Circle,
} from "lucide-react";
import "../styles/ImageSlider.css";

type Image = {
  name: string;
  link: string;
};
type ImageSliderProps = {
  images: Image[];
};
// function expects a single argument with a property imageUrls, which must conform to the ImageSliderProps type
export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        marginTop: "1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "100%",
              height: "100%",
              display: index === imageIndex ? "block" : "none", 
            }}
          >
            <img
              src={image.name} 
              alt={`Slide ${index + 1}`} 
              className="slider-images"
            />
          </a>
        ))}
      </div>

      <button
        onClick={showPrevImage}
        className="slider-button"
        style={{ left: 0 }}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={showNextImage}
        className="slider-button"
        style={{ right: 0 }}
      >
        <ChevronRight />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="image-slider-dot-button"
            onClick={() => setImageIndex(index)}
          >
            {index == imageIndex ? (
              <CircleDot />
            ) : (
              <Circle />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
