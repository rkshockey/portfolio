import React from 'react';
import {Link, useHistory} from 'react-router-dom'

function Footer (){
    return <footer>
        <Link to="/contact" className='footer-link'>Contact Me</Link>
        <a href="https://www.linkedin.com/in/romy-shockey-840b0a125/" target="_blank">LinkedIn</a>
        <a href="https://www.facebook.com/romy.shockey/" target="_blank">Facebook</a>
    </footer>
}

export default Footer