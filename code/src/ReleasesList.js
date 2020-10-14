import React from 'react';

import Release from './Release';

const ReleasesList = (props) => {
  // console.log(props);
  return (
    <section className="releases-list">

      {props.data.map(release => {
        return (
          <Release
            key={release.id}
            image={release.images}
            album={release.name}
            artist={release.artists}
          />
        )
      })}

      {/* <Release />
      <Release />
      <Release />
      <Release />
      <Release />
      <Release />
      <Release />
      <Release /> */}
    </section>
  )
};

export default ReleasesList;