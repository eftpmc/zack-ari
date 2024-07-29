"use client"
import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Projects from './Projects';
import ThemeSwitcher from './ThemeSwitcher';
import { GripVertical } from 'lucide-react';

const layout = [
  { i: 'projects', x: 0, y: 0, w: 6, h: 3 }, // Adjusted for 3 rows
  { i: 'themeSwitcher', x: 6, y: 0, w: 6, h: 3 }, // Adjusted for 3 rows
];

const GridLayoutComponent = () => {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={100} // Adjusted for 3 rows
      width={1200}
      draggableHandle=".draggable-handle"
      isResizable={false}
    >
      <div key="projects" className="bg-base-100 p-2 h-full w-full">
        <div className="draggable-handle p-2 cursor-move rounded-t flex items-center">
          <GripVertical className="mr-2" />
        </div>
        <Projects />
      </div>
      <div key="themeSwitcher" className="bg-base-100 p-2 h-full w-full">
        <div className="draggable-handle p-2 cursor-move rounded-t flex items-center">
          <GripVertical className="mr-2" />
        </div>
        <ThemeSwitcher />
      </div>
    </GridLayout>
  );
};

export default GridLayoutComponent;