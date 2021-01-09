import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists({limit: 50}).then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getMyCurrentPlayingTrack().then((response) => {
        dispatch({
          type: 'SET_TRACK',
          track: {
            title: response?.item?.name,
            artist: response?.item?.artists,
            image: response?.item?.album?.images[0]?.url,
          },
        });
      });

      spotify.getUserPlaylists({limit: 50}).then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlist: playlists?.items[0],
        });
      });

      spotify.getPlaylist('').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {
        token ? <Player spotify={spotify}/> : <Login/>
      }
    </div>
  );
}

export default App;
