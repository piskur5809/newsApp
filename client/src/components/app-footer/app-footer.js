import React from 'react';
import './app-footer.css'

const Footer = ()=>{
    return (<div className ="footer wraper ">
    <div className="footer-content">
       <ContactUs/> 
    </div>
</div>)
};

const ContactUs =()=>{
    return (<a className="footer-contact" href="mailto: piskur5809@gmail.com">Contact Us</a>)
}

export default Footer;