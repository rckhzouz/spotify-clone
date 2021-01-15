import React from 'react'
import SidebarOptionDemo from './SidebarOptionDemo'
import { demoPlaylists } from './demoPlaylists';

function SidebarPlaylistsDemo() {
    return (
        <div className='sidebarPlaylists'>
            {demoPlaylists.map((playlist, i) => (
                <SidebarOptionDemo index={i} title={playlist.name} />
            ))}
        </div>
    )
}

export default SidebarPlaylistsDemo
