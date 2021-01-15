import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from './StateProvider';
import SidebarPlaylists from './SidebarPlaylists';
import SidebarPlaylistsDemo from './SidebarPlaylistsDemo';

function Sidebar() {
    const [{ playlists, token }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <img 
                className='sidebar__logo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''
            />
            <SidebarOption index={null} Icon={HomeIcon} title='Home'/>
            <SidebarOption index={null} Icon={SearchIcon} title='Search'/>
            <SidebarOption index={null} Icon={LibraryMusicIcon} title='Your Library'/>

            <br/>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />

            {
                token ? <SidebarPlaylists /> : <SidebarPlaylistsDemo />
            }
            
        </div>
    )
}

export default Sidebar
