import React, { Component } from 'react';// import logo from './logo.svg';
import './style/App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/projects" component={Projects}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

// En caso de problemas o dudas con el router visitar https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html 