import React from 'react';
import Projects from '@/app/components/Projects';
import HomeButton from '@/app/components/HomeButton';

export default function Page() {
  return (
    <>
      <Projects showFull={true}/>
      <HomeButton/>
    </>
  );
}
