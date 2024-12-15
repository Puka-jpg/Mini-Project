import React from "react";
import { useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "https://imgs.search.brave.com/J8JPen8pHgN24SIlh5FrclRi6Zk0DisFkz0ArzTwV-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE1/MDMzNTExL3Bob3Rv/L3BvcnRyYWl0LW9m/LWdvbGRlbi1yZXRy/aWV2ZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUczazV2/T0NGd053U3FueVpQ/elpmLTBwbVVadDU3/WDlhRmt4RUlGNnp2/LUU9",
      breed: "Golden Retriever",
      description:
        "Known for their friendly nature and golden coat, Golden Retrievers are excellent family dogs. Their gentle temperament and intelligence make them perfect companions for both active play and calm cuddles.",
    },
    {
      id: 2,
      url: "https://imgs.search.brave.com/bWA5xIPAdjSF5SSM1fz2rhTLhELKgC7__P6ZlTr6a9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzYyLzkwLzY5/LzM2MF9GXzE2Mjkw/NjkzNF9kREUwek5W/T0FvZHFRWHRWM2hH/dWgzdEhFalRqS0Nr/by5qcGc",
      breed: "Boston Terrier",
      description:
        "With their tuxedo-like coat and lively personality, Boston Terriers are charming 'American Gentlemen'. These compact, friendly dogs combine playful energy with a sweet, affectionate nature, making them perfect city companions.",
    },
    {
      id: 3,
      url: "https://imgs.search.brave.com/IJ5-PqVCukrdLhEDMzpNgD9E5h68sfVvvlvraW6fdk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5wZXRtZC5jb20v/ZmlsZXMvc3R5bGVz/Lzk3OHg1NTAvcHVi/bGljLzIwMjMtMTEv/c2liZXJpYW4taHVz/a3ktd2ludGVyLmpw/Zz93PTIwNDgmcT03/NQ",
      breed: "Siberian Husky",
      description:
        "Born to run and blessed with striking wolf-like features, Siberian Huskies are adventurous and independent spirits. These athletic dogs combine incredible endurance with a friendly, mischievous personality that captivates their owners.",
    },
  ];
  return (
    <div className="gallery-container">
      <div className="gallery-page-heading">
        <h1>Dog Gallery</h1>
        <div className="dog-paw-image">
          <img
            src="https://imgs.search.brave.com/2hsHoCUSoCNxN0o8QIPo0Hi5dCyzWmKJNn6LpgN4Iys/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY4LzkxLzc2/LzM2MF9GXzE2ODkx/NzY2N19GY281aUxp/bkVBRW1VaWN4bTZj/R2xPUDJPWVc2QU0y/Ri5qcGc"
            alt="dog-paw"
            className="dog-paw"
          />
        </div>
      </div>
      <p>Click an image to view..</p>
      {/* Grid of thumbnail images */}
      <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.breed}
            onClick={() => setSelectedImage(image)}
            className="thumbnail"
          />
        ))}
      </div>

      {/* Selected image display */}
      {selectedImage && (
        <div className="selected-image-container">
          <img
            className="selected-image"
            src={selectedImage.url}
            alt={selectedImage.breed}
          />
          <div className="image-description">
            <h4>{selectedImage.breed}</h4>
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Gallery;
