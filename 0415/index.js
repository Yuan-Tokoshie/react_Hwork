import Clock from './App.js';
import React from 'react';
import ReactDOM from 'react-dom';




ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );

