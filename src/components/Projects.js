import React from 'react'
import pokeTop from '../assets/PokeTop.PNG'

const row1 = [
    {
        name: 'PokeTop',
        link: 'https://poke-top.vercel.app/',
        pic: pokeTop,
        text: 'A fun side project making a Pokemon Tabletop RPG. WIP'
    }
]

function Projects (){
    return <section class="projects">
    <h2>My Projects</h2>
    <div class="between">
        {row1.map(item => <div className='gallery=item'>
            <a href={item.link}><img src={item.pic} alt={item.name} /></a>
            <p>{item.text}</p>
        </div>)}
    </div>
    <div class="around">
    </div>
    <p className='more'>You can always see more of my work at <a href='https://github.com/rkshockey/' target='_blank'>GitHub</a></p>
</section>
}

export default Projects