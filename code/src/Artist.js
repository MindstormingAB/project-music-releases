import React from 'react';

const Artist = (props) => {
  console.log(props);
  return (
    <p className="artist">
      {props.artist.map(artist => artist.name).join(', ')}
    </p>
  )
};

export default Artist;