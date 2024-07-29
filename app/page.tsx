import React from 'react';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the ScrollToTopButton component

export default function Page() {
  return (
    <>
      <Intro />
      <Timeline />
      <Contact />
      <ScrollToTopButton /> {/* Add the ScrollToTopButton component */}
    </>
  );
}
