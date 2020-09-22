import React from 'react';
import {Link, withRouter} from "react-router-dom"
import "./Footer.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

function Footer(){
    return( 
    <div className="totfooter">
        <footer className="card-footer">
            <div className="rowss">
                <div className="rows1">
                <h3>Links:</h3><br/>
                    <div className="hoverd">
                        <div>
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hoverd">
                        <div>
                            <Link to="/about">
                                <span>About</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hoverd">
                        <div>
                            <Link to="/menu">
                                <span>Menu</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hoverd">
                        <div>
                            <Link to="/rateus">
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>
                    <hr class="d-block d-sm-none"/>
                </div>
                <div className="rows2">
                    <h3>Address:</h3>
                    <p>SASTRA DEEMED UNIVERSITY<br/>
                    Thirumalaisamudram,<br/>
                    Thanjavur,<br/>TamilNadu,<br/>India</p>
                    <hr class="d-block d-sm-none"/>
                </div>
                <div id="testimonials" className="rows3">
                    <h3>Details:</h3><br/>
                    <div className="personal">
                        <PhoneIcon />
                        <h5>95005769</h5>
                    </div>
                    <div className="personal">
                        <EmailIcon />
                        <h5>we5plusu@gmail.com</h5>
                    </div>
                    <div className="personal" style={{paddingRight : "20px"}}>
                        <InstagramIcon fontSize="large" className="footer-icons"/>
                        <TwitterIcon fontSize="large" className="footer-icons"/>
                        <LinkedInIcon fontSize="large" className="footer-icons"/>
                    </div>
                </div>
            </div>
            <div class="text-centerr">&copy; Copyright Shyam_Sundar_Dev 2020</div>
        </footer>
    </div>
)}


export default Footer;