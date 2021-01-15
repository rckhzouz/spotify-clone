import React, { useEffect } from 'react'
import { useStateValue } from './StateProvider';
import './Body.css';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRowDemo from './SongRowDemo';

function BodyDemo() {
    const [{ playlist }, dispatch] = useStateValue();

    useEffect(() => {
        document.getElementById('body').scrollTo(0, 0);
      }, [playlist]);

    return (
        <div id='body' className='body'>
            {/* <Header spotify={spotify}/> */}

            <div className='body__info'>
                <img src={playlist?.image} alt='' />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>{playlist?.name}</h2>
                    <p>{playlist?.description}</p>
                </div>
            </div>

            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon className='body__shuffle'/>
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>

                {
                    playlist?.tracks.map((item) => (
                        <SongRowDemo track={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default BodyDemo
