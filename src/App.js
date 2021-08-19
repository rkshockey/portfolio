import './App.css';
import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [reload, setReload] = useState(true)

  function reset (){
    setReload(!reload)
  }

  return (
    <div className="App">
      <Header reset={reset}/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/projects'>

        </Route>
      </Switch>
      <Footer reset={reset}/>
    </div>
  );
}

export default App;
