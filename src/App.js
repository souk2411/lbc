import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

const App = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        centerMode={true}
        centerSlidePercentage={70}
        emulateTouch={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img src="path_to_your_image_1" alt="Image 1" />
        </div>
        <div>
          <img src="path_to_your_image_2" alt="Image 2" />
        </div>
        <div>
          <img src="path_to_your_image_3" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
