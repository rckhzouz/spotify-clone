import React, { useEffect } from 'react';
import './SidebarOption.css';
import { useStateValue } from './StateProvider';

function SidebarOption({ title, Icon, index }) {
    const [{ spotify }, dispatch] = useStateValue();

    const handleClick = (event) => {
        if (index == null) {
            return;
        }

        spotify.getUserPlaylists({limit: 50}).then((playlists) => {
            spotify.getPlaylist(playlists?.items[index].id).then((response) => {
              dispatch({
                type: 'SET_PLAYLIST',
                playlist: response,
              });
            });
        });
    }

    return (
        <div onClick={((e) => handleClick(e))} className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon'/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
