import clothing1 from '../assets/clothing1.jpg';
import clothing2 from '../assets/clothing2.jpg';
import clothing3 from '../assets/clothing3.jpg';
import clothing4 from '../assets/clothing4.jpg';
import clothing5 from '../assets/clothing5.jpg';
import React, { useEffect, useState } from 'react';

export default function Trending() {
  const picturesArray = [clothing1, clothing2, clothing3, clothing4, clothing5];
  const [index, setIndex] = useState(0);

  // let index = 0;
  // function setIndex() {
  //   // some functionality to change variable index
  // }

  // useEffect(() => {
  //   console.log(index)
  // }, [index]);

  console.log("this is index", index);
  
  function handleNextClick() {
    if (index > -1 && index < 2) {
      setIndex(function(prevState)  {
        return prevState + 1
      })
    }
  }

  function handlePrevClick() {
    if (index > 0 && index <= 2) {
      setIndex(prevState => prevState - 1)
    }
  }
  
return (
  <div>
    <p>Trending</p>
    <p>!!!Marquee Goes Here!!!</p>

    <div class="slideshow-container">
      {/* <button onClick={() => setIndex(prevState => prevState - 1)}>Prev</button>
      <button onClick={() => setIndex(prevState => prevState + 1)}>Next</button> */}
      <button onClick={() => handlePrevClick()}>Prev</button>
      <button onClick={() => handleNextClick()}>Next</button>
      {
        picturesArray.slice(index, index + 3).map((picture, index) => {
          return (
            <div class="mySlides" key={index}>
              <img src={picture} width={200} alt={`clothing item ${index}`}/>
            </div>
          )
        })
      }
    </div>
  </div>
);
}