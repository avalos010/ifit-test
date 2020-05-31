import React, { useState } from 'react'
import GearkJunkie from '../images/gear-junkie-logo.svg'
import Mashable from '../images/mashable-logo.svg'
import Wired from '../images/wired-logo.svg'


const Slider = () => {

    const [slides, setSlides] = useState([
        { img: GearkJunkie, text: 'You focus on putting in the work and the technology handles the rest' },
        { img: Wired, text: 'Literally trasports you from from home to wherever you choose to run' },
        { img: Mashable, text: 'Breathes new life into a tires, old running routine' }
    ])

    const handlePrev = () => {
        let slidesCopy = [...slides]
        slidesCopy.push(slidesCopy[0])
        slidesCopy.shift()
        setSlides(slidesCopy)
    }

    const handleNext = () => {
        let slidesCopy = [...slides]
        slidesCopy.unshift(slidesCopy[slidesCopy.length - 1])
        slidesCopy.pop()
        setSlides(slidesCopy)
    }

    return (
        <div className="slider-container d-flex flex-row text-center align-items-center justify-content-center">
            <button onClick={handlePrev} className="prev-btn"><i className="fa fa-angle-left"></i></button>
            {slides && slides.map(({ img, text }, index) => {
                return (
                    <div key={index} className="slider-item d-flex flex-column align-items-center justify-content-center">
                        <img src={img} />
                        <p>"{text}"</p>
                    </div>

                )
            })}
            <button onClick={handleNext} className="next-btn"><i className="fa fa-angle-right"></i></button>


        </div>
    )
}

export default Slider;