import React from 'react'
import './SongRow.css';

function SongRowDemo({ track }) {
    return (
        <div className='songRow'>
            <img className='songRow__album' src={track.image} alt='' />
            <div className='songRow__info'>
                <h1>{track.song}</h1>
                <p>{track.artist} - {track.album}</p>
            </div>
        </div>
    )
}

export default SongRowDemo
