import React from 'react';
import Tooltip from './Tooltip';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Tooltip position="top" content="Top Tooltip">
        <button>Hover me</button>
      </Tooltip>
      <Tooltip position="right" content="Right Tooltip">
        <button>Hover me</button>
      </Tooltip>
      <Tooltip position="left" content="Left Tooltip">
        <button>Hover me</button>
      </Tooltip>
      <Tooltip position="bottom" content="Bottom Tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
};

export default App;
