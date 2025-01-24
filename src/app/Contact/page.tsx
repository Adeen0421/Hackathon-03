// pages/contact.js

import React from 'react';
import "./module.css"

const Contact = () => {
    return (
        <div className={'container'}>
        <div className='dmp'>
            <div className={'infoSection'}>
                <h2 className={'heading'}>Information About us</h2><br/>
                <p className={'description1'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.    Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                
                </p>
               
                </div>

           
         
                </div>
    
            <div className={'formSection'}>
                <h2 className={'heading'}>Get In Touch</h2>
                <p className={'description'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor.
                </p>
                <form className={'form'}>
                    <div className={'row'}>
                        <input type="text" placeholder="Your Name*" className={'input'} required />
                        <input type="email" placeholder="Your E-mail*" className={'input'} required />
                    </div>
                    <input type="text" placeholder="Subject*" className={'input'} required />
                    <textarea placeholder="Type Your Message*" className={'textarea'} rows={5} required></textarea>
                    <button type="submit" className={'button'}>Send Mail</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
