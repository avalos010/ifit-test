import React, { useState } from 'react'
import Stopwatch from '../images/stopwatch.svg'
import Distance from '../images/distance.svg'
import Playlist from '../images/icon-playlist.svg'

const Library = () => {

    const [items, setItems] = useState([
        { title: 'Lorem Ipsum', time: '30:53', distance: '5miles', workouts: 3 },
        { title: 'Ipsum Lorem', time: '20:30', distance: '8miles', workouts: 6 },
        { title: 'Lorem Ipsum', time: '30:53', distance: '5miles', workouts: 5 },
        { title: 'Ipsum Lorem', time: '20:30', distance: '8miles', workouts: 7 },
        { title: 'Lorem Ipsum', time: '30:53', distance: '5miles', workouts: 8 },
        { title: 'Ipsum Lorem', time: '20:30', distance: '8miles', workouts: 10 },
        { title: 'Lorem Ipsum', time: '30:53', distance: '5miles', workouts: 15 },
        { title: 'Ipsum Lorem', time: '20:30', distance: '8miles', workouts: 8 },


    ])
    return (
        <div className="library-container d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto">
            {items.map((item, i) => (
                <div key={i} className="library-item d-flex flex-column">
                    <div className="library-item-img">
                        <img src={`https://i.picsum.photos/id/${i}/288/164.jpg`} alt="main-library-item-image" />
                        <div className="library-img-overlay d-flex flex-column justify-content-center align-items-center">
                            <p className="mt-n2">{item.workouts}</p>
                            <p className="mt-n2">workouts</p>
                            <img className="mt-n2" width={22} height={22} src={Playlist} alt="playlist-icon" />
                        </div>
                    </div>

                    <div className="d-flex flex-row justify-content-between mx-auto library-item-header-container mt-2">
                        <p className="font-weight-bold">{item.title}</p>
                        <img width={28} height={28} src={`https://i.picsum.photos/id/${i}/28/28.jpg`} />

                    </div>

                    <div className="d-flex flex-row library-item-details jusify-content-between mt-n3">
                        <div className="d-flex flex-row align-items-center ml-3">
                            <img className="mt-n3 mr-1" src={Stopwatch} alt="stopwatch-icon" />
                            <p>{item.time}</p>
                        </div>
                        <div className="d-flex flex-row align-items-center ml-2">
                            <img className="mt-n3 mr-1" src={Distance} alt="distance-icon" />
                            <p>{item.distance}</p>
                        </div>
                    </div>
                    <p className="library-details-btn ml-3 font-weight-bold">See Details</p>
                </div>
            ))}

        </div>
    )
}

export default Library