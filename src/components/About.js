import React from 'react'
import aboutimage from '../images/about.png'

function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt=""/>
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Putin said he supported the Cabinet’s proposal 
                to introduce a non-working period starting October 
                30 and extending through the following week, when 
                four of seven days already are state holidays.</p>
                <button>READ MORE</button>
            </div> 
        </div>
    )
}

export default About
