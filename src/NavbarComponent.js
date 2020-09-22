import React from 'react';
import {Navbar , Nav } from 'react-bootstrap'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ContactsIcon from '@material-ui/icons/Contacts';
import {Link, withRouter} from "react-router-dom"
import "./NavbarComponent.css"
import {DISHES} from './dishes'

function NavbarComponent(){
  const queryString = window.location.pathname;
  const nedad = queryString.split("/");
  console.log(nedad[1])
  console.log(queryString);
  var imgs;
  if(queryString === "/menu/Uthappizza" || queryString === "/menu/Zucchipakoda" || queryString === "/menu/Vadonut" || queryString === "/menu/ElaiCheese%20Cake"){
   imgs = <img src="../assets/images/circle-cropped.png" />
  }
  else{
    imgs = <img src="assets/images/circle-cropped.png" />
  }
  console.log(imgs);
  var kkkk = <h3>Hi</h3>
    return <div className="nav-class">
        <Navbar className="color-nav" expand="lg">
          {imgs}
        <Navbar.Brand className="nav-br" href="#home">Panchathanthiram</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="navbar-list">
                <Link to="/">
                    <div>
                        <HomeIcon />
                        <Nav.Link href="#home">Home</Nav.Link>
                    </div>  
                </Link>    
                <Link to="/about">
                    <div>
                        <InfoIcon />
                        <Nav.Link href="#link">About</Nav.Link>
                    </div>
                </Link>
                <Link to="/menu" >
                  <div>
                    <RestaurantMenuIcon />
                    <Nav.Link href="#link">Menu</Nav.Link>
                  </div>
                </Link>
                <Link to="/rateus" >
                  <div>
                    <ContactsIcon />
                    <Nav.Link href="#link">Contacts</Nav.Link>
                  </div>
                </Link>
            </div>  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>;
}


export default NavbarComponent;