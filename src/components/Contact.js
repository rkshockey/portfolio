import React from 'react'

import mail from '../assets/mail.jpg'
import phone from "../assets/phone.jpg"

function Contact (){
    return <section class="contact">
        <h2>Contact Me</h2>
        <div class="flex">
            <img src={mail} alt="A letter." />
            <div className='text'>
                <p>Email me at</p>
                <p><a href="mailto:rkshockey@gmail.com">rkshockey@gmail.com</a></p>
            </div>
            <img src={phone} alt="A mobile phone" />
            <div className='text'>
                <p>Call me at</p>
                <p><a href="tel:717-891-0118">717-891-0118</a></p>
            </div>
        </div>
    </section>
}

export default Contact