import React, { useEffect, useState } from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

function FooterDemo() {
    const [{ playing }, dispatch] = useStateValue();

    const pauseOrPlay = () => {
        if (playing) {
            dispatch({
                type: 'SET_PLAYING',
                playing: false
            });
        }
        else {
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            });
        }
    }

    return (
        <div className='footer'> 
            <div className='footer__left'>
                <img className='footer__albumLogo' src={'https://i.scdn.co/image/ab67616d0000b27310678e3a1e1309ec52e193dd'} alt='' />
                <div className='footer__songInfo'>
                    <h4>{'Escaping Time'}</h4>
                    <p>{'Benjamin Martins'}</p>
                </div>
            </div>

            <div className='footer__center'>
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                {playing ? <PauseCircleOutlineIcon onClick={pauseOrPlay} fontSize='large' className='footer__icon'/> : <PlayCircleOutlineIcon onClick={pauseOrPlay} fontSize='large' className='footer__icon' />}
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green'/>
            </div>

            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>

                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>

                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default FooterDemo
