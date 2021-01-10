import React, { useEffect } from 'react';
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

function Footer() {
    const [{ track, playing, spotify }, dispatch] = useStateValue();

    const pauseOrPlay = () => {
        if (playing) {
            dispatch({
                type: 'SET_PLAYING',
                playing: false
            });
            spotify.pause();
        }
        else {
            dispatch({
                type: 'SET_PLAYING',
                playing: true
            });
            spotify.play();
        }
    }

    return (
        <div className='footer'> 
            <div className='footer__left'>
                <img className='footer__albumLogo' src={track?.image} alt='' />
                <div className='footer__songInfo'>
                    <h4>{track?.title}</h4>
                    <p>{
                        track?.artist?.map((artist) => (artist.name)).join(', ')
                    }</p>
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

export default Footer;
 