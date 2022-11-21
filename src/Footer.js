import React from "react";
import './Footer.css'
import RLogo from './Pictures/RLogo.jpg'

const Footer =()=>{ return(<div>
    <footer className="foot">
    <div>
        <h2>Royal Concepts</h2>
        <img src={RLogo} alt="logo"/>
    </div>
    <div>
        <h3>Contacts</h3>
        <h4>09066944736</h4>
        <h4>08140893088</h4>
    </div>
    <div className="author">
    </div>
</footer>
<h6 style={{width:'100%', textAlign:'center', paddingBottom:'0px', marginBottom:'0px'}}>All rights reserved.  Designed by Trigger_sAA</h6>
</div>
)};

export default Footer;