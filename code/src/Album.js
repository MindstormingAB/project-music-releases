import React from 'react';

const Album = (props) => {
  // console.log(props);
  return (
    <p className="album">{props.album}</p>
  )
};

export default Album