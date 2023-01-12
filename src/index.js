// MAIN JSX FILE - RENDERS OUR APP COMPONENT AND ALL ITS CHILDREN
// AND ACTS AS ENTRY POINT FOR WEBPACK
import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';

import styles from './style/style.css';

const DATA = [
  {id: 'task-0', name: 'Eat', completed: true},
  {id: 'task-1', name: 'Sleep', completed: false},
  {id: 'task-2', name: 'Die', completed: false}
];

reactDOM.render(<App tasks={DATA} />, document.getElementById('root'));