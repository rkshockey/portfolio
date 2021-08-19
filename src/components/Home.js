import React from 'react'
import mother from '../assets/mother.jpg'
import books from "../assets/books.jpg"
import gaming from "../assets/gaming.jpg"
import ocean from "../assets/ocean.jpg"
import hiking from "../assets/hiking.jpg"
import drink from "../assets/drink.jpg"

function Home (){
    return <section class="gallery">
        <div class="gallery-item">
            <img src={mother} alt="A carved wooden figure of a mother holding a baby." />
            <p>Motherhood</p>
        </div>
        <div class="gallery-item">
            <img src={books} alt="A woman reading a book between two tall stacks of books." />
            <p>Reading</p>
        </div>
        <div class="gallery-item">
            <img src={gaming} alt="A gaming controler." />
            <p>Gaming</p>
        </div>
        <div class="gallery-item">
            <img src={ocean} alt="Sunset over the ocean." />
            <p>Ocean</p>
        </div>
        <div class="gallery-item">
            <img src={hiking} alt="A family hiking with the sun behind them." />
            <p>Hiking</p>
        </div>
        <div class="gallery-item">
            <img src={drink} alt="A glass with clear liquid, mint and lime in it." />
            <p>Nights Out</p>
        </div>
    </section>
}

export default Home