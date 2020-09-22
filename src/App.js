import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'
import Specials from "./Specials"
import HomeComponent from "./HomeComponent"
import MenuListComponent from './MenuListComponent'
import NavbarComponent from "./NavbarComponent"
import DishDetailComponent from "./DishDetailComponent"
import AboutComponent from './AboutComponent'
import RateusComp from "./RateusComp"
import Footer from "./Footer"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
          <div className="App">
          <NavbarComponent />
          <Switch>
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/about" component={AboutComponent} />
            <Route path="/menu" exact component={MenuListComponent} />
            <Route path="/menu/:name" component={DishDetailComponent} />
            <Route path="/rateus" component={RateusComp} />
            <Route path="/specials" component={Specials} />
          </Switch>
          </div>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
