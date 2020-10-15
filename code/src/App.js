import React from 'react';
import data from './data.json';

import Header from './Header';
import ReleasesList from './ReleasesList';

const releasesData = data.albums.items;

export const App = () => {
  return (
    <>
      <Header />
      <ReleasesList data={releasesData} />
    </>
  );
};