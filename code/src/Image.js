import React from 'react';

const Image = (props) => {
  // console.log(props);
  return (
    <img className="image" src={props.image} alt="Cover of the Album"></img>
  )
}

export default Image;