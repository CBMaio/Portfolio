import React from 'react';
import Main from './Componentes/Main'
import Profile from './Componentes/Section-about-me';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Main/>
      <Profile/>
    </div>
  );
}

export default App;
