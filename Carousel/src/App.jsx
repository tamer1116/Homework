
import { useState } from 'react';
import './App.css'

function App() {
  const images = ['https://media.vanityfair.com/photos/58b9e521a50ee02e65e431ab/4:3/w_1280,h_960,c_limit/rick-grimes-amc-the-walking-dead.jpg', 'https://www.wallpapers.net/the-walking-dead-hd-wallpaper/download/1280x960.jpeg', 'https://www.hollywoodreporter.com/wp-content/uploads/2016/10/twd_-_s06_-_e614_-_norman_reedus_-_still_-_h_-_2016.jpg?w=1296'];
  const [currentIndex, setCurrentIndex] = useState(0);


  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToBackSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className='app'>
        <h1> Carousel </h1>
        <div >
          <button className='ok' onClick={goToBackSlide}>Back</button>
          <img className='pp' src={images[currentIndex]} />
          <button className='ok1' onClick={goToNextSlide}>Next</button>
        </div>
      </div>
    </>
  )
}

export default App
