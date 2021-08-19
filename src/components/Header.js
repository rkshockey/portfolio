import React from 'react'
import {Link, useHistory} from 'react-router-dom'

function Header (props){
    const { pathname } = useHistory().location
    const { push } = useHistory()

    

    return <div className='top'>
        <header>
            <h2>Romy Shockey</h2>
            <nav class="head-button">
                <Link to='/' className={pathname === '/' ? 'link here' : 'link'} onClick={props.reset}><p>Home</p></Link>
                <Link to='/about' className={pathname === '/about' ? 'link here' : 'link'} onClick={props.reset}><p>About</p></Link>
                <Link to='/contact' className={pathname === '/contact' ? 'link here' : 'link'} onClick={props.reset}><p>Contact</p></Link>
                <Link to='/projects' className={pathname === '/projects' ? 'link here' : 'link'} onClick={props.reset}><p>Projects</p></Link>
            </nav>
        </header>
        <section class="splash">
            <h1>Romy Shockey</h1>
            <Link to='/projects' className='splash-link'><p>Projects</p></Link>
        </section>
    </div>
}

export default Header