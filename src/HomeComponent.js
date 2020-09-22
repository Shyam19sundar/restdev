import React from 'react';
import "./HomeComponent.css"

function HomeComponent(){
    /* width="100%" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"*/
    return (
        <div class="container" id="Main-content">
        <div class="jumbotronnn">
          <img src="/assets/images/title.jpg"  alt="Picture of Restaurant " />
        </div>
    
        <div class="row" id="home-tiles">
          <div class="col-md-4 col-sm-6"  >
            <a href="/menu">
              <div id="menu-title">
                <span>Menu</span>
              </div>
            </a>
          </div>
          <div class="col-md-4 col-sm-6 "  >
            <a href="/specials">
              <div id="specials-title">
                <span>Specials</span>
              </div>
            </a>
          </div>
          <div class="col-md-4 col-sm-12 ">
            <a href="https://goo.gl/maps/ML6nb15pf3z22pG19" target="_blank">
              <div id="map-title">
              <iframe className="map-i" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0773384512477!2d79.01622241428666!3d10.728518363011096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baabe2803211597%3A0x6371e96c202331c!2sSASTRA%20Deemed%20to%20be%20University!5e0!3m2!1sen!2sin!4v1600451369738!5m2!1sen!2sin" ></iframe>
              <span>Map</span>
              </div>
            </a>
          </div>
    
        </div>
      </div>
    
    )}


export default HomeComponent;