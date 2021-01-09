import React from 'react';
import SidebarOption from './SidebarOption';
import './SidebarPlaylists.css';
import { useStateValue } from './StateProvider';

function SidebarPlaylists() {
    const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className='sidebarPlaylists'>
            {playlists?.items?.map((playlist, index) => (
                <SidebarOption index={index} title={playlist.name} />
            ))}
        </div>
    )
}

export default SidebarPlaylists
