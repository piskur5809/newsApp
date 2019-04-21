import React from 'react';

const Footer = ()=>{
    return (<div className ="bg-primary ">
    <div className="footer d-flex justify-content-between align-items-center ">
       <ContactUs/> 
    </div>
</div>)
};

const ContactUs =()=>{
    return (<input type="email" value="piskur5809@gmail.com" readOnly="default"></input>)
}


export default Footer;