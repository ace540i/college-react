import React from 'react';
import './styles/App.css';
import Scorecard from './components/Scorecard';
import Warnings from './components/Warnings';
import ProgressTracker from './components/ProgressTracker';
import ToDos from './components/ToDos';

const App = () => (
  <div className="dashboard">
    <h1>College Roadmap</h1>
    <Scorecard />
    <Warnings />
    <ProgressTracker />
    <ToDos />
  </div>
);

export default App;
