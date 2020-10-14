import React from 'react';

import Image from 'Image';
import Artist from 'Artist';
import Album from 'Album';

const Release = (props) => {
  // console.log(props);
  return (
    <article className="release">
      <Image image={props.image[1].url} />
      <Album album={props.album} />
      <Artist artist={props.artist} />
    </article>
  )
};

export default Release;