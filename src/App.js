import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Demo from './Demo';
import { demoPlaylists } from './demoPlaylists';

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

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify
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
          playing: response?.is_playing,
        });
      });

      spotify.getUserPlaylists({limit: 50}).then((playlists) => {
        spotify.getPlaylist(playlists?.items[0].id).then((response) => {
          dispatch({
            type: 'SET_PLAYLIST',
            playlist: response,
          });
        });
      });
    }
    else {
      dispatch({
        type: 'SET_PLAYLIST',
        playlist: demoPlaylists[0],
      });
    }
  }, [token, dispatch]);

  return (
    <Router>
      <Switch>

        <Route path='/demo'>
          <Demo />
        </Route>

        <Route path='/'>
          {
            token ? <Player spotify={spotify}/> : <Login/>
          }
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
