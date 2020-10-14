import React from 'react';
import data from './data.json';

import Header from './Header';
import ReleasesList from './ReleasesList';

import './index.css';

// console.log(data);

const releasesData = data.albums.items;
// console.log(releasesData);

export const App = () => {
  return (
    <>
      <Header />
      <ReleasesList data={releasesData} />
    </>
  );
};