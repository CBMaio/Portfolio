import React from 'react';
import Main from './Componentes/Main'
import SectionSkills from './Componentes/Section-habilidades';
import AboutMeBox from './Componentes/AboutMe';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
      <>
       <Router>
         <Switch>
            <Route path="/"  exact component={Main}/>
             <Route path="/skills" component={SectionSkills}/>
             <Route path="/aboutMe" component={AboutMeBox}/>
         </Switch>
        </Router>
      </>
   );
}

export default App;
