import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav/';
import Footer from './components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Search from './routes/Search';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Link to="/">
          <h1>Today's random cat</h1>
        </Link> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/" component={NotFound}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
