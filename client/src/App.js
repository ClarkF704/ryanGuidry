import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Membership from './components/Membership/Membership';
import p1 from './components/img/pool.jpg';
import Navigation from './components/Navigation/Navigation';
import Background from './components/Background/Background';

class App extends Component {
  
render() {
  let styles = {
    root: {
        backgroundImage: 'url(' + p1 + ')',
        backgroundSize: 'cover',
        overflow: 'hidden'
        
    }}
  
  return (
    <div>
      
       <BrowserRouter>
       
        <div style={styles}>
          <Navigation />
          <Background/>
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/membership" component={Membership}/>
        </Switch>
        </div>
        
        </BrowserRouter>
      
    </div>
  );
}
  
}

export default App;
