import React from 'react'

import mother from "../assets/mother.jpg"
import mother2 from "../assets/mother2.jpg"
import books from "../assets/books.jpg"
import books2 from "../assets/books2.jpg"
import hiking from "../assets/hiking.jpg"
import hiking2 from "../assets/hiking2.jpg"

function About (){
    return <section class="about">
    <h2>About Me</h2>
        <div class="left">
            <div>
                <img src={mother} alt="A carved wooden figure of a mother holding a baby." />
                <img src={mother2} alt="A baby's hand wrapping around an adult's finger" class="mobile" />
            </div>
            <p>I initially took an interest in coding in the hope that a more mentally-oriented job would be a better fit for me - I have a deep love of solving puzzles, and so far that has been what most of my coding experience has felt like. You just have to find a way to put the pieces together.</p>
        </div>
        <div class="right">
            <p>I have a great love of reading and learning, and I look forward to continuing to hone this craft. Every new topic or skill excites me, because I always think of way it could be applied to projects I am working on.</p>
            <div>
                <img src={books} alt="A woman reading a book between two tall stacks of books." />
                <img src={books2} alt="An open book beside a cup of tea and a pile of books" class="mobile" />
            </div>
        </div>
        <div class="left">
            <div>
                <img src={hiking} alt="A family hiking with the sun behind them." />
                <img src={hiking2} alt="A woman standing by a waterfall" class="mobile" />
            </div>
            <p>On a personal level, I love music and the outdoors, and I'm devoted to my toddler daughter. She's been a big part of my motivation to get this far, I want to work hard and set a good example for her. She ought to grow up believing you can find your place if you set your mind to it.</p>
        </div>
    </section>
}

export default About