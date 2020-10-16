import React from 'react';

import Heart from './icons/heart.svg';
import Play from './icons/play.svg';
import Dots from './icons/dots.svg';

const Image = (props) => {
  return (
    <div className="image-container">
      <img className="image" src={props.image} alt="Cover of the Album" />
      <div className="icon-container">
        <img
          src={Heart}
          alt="heart"
          width="25"
        />
        <div className="play-container">
          <img
            className="play"
            src={Play}
            alt="play"
            width="50"
          />
          <div className="play-overlay">
          </div>
        </div>
        <img
          src={Dots}
          alt="dots"
          width="20"
        />
      </div>
    </div>
  )
}

export default Image;