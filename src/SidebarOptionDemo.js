import React from 'react'
import { useStateValue } from './StateProvider';
import { demoPlaylists } from './demoPlaylists';

function SidebarOptionDemo({ title, Icon, index }) {
    const [{  }, dispatch] = useStateValue();
    let playlist = {}

    const handleClick = e => {
        if (index == null) {
            return;
        }

        playlist = demoPlaylists[index];

        dispatch({
            type: 'SET_PLAYLIST',
            playlist: playlist,
        });
    }

    return (
        <div onClick={((e) => handleClick(e))} className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon'/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOptionDemo
