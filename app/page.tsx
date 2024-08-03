import React from 'react';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import About from './components/About';

export default function Page() {
  return (
    <>
      <Intro />
      <About />
      <Projects showFull={false}/>
      <Contact />
      <ScrollToTopButton />
    </>
  );
}
