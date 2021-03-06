export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    track: {
        title: null,
        artist: null,
        image: null
    },
    browse: [],
    playlist: null,
    spotify: null,
}

const reducer = (state, action) => {


    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_TRACK':
            return {
                ...state,
                track: {
                    title: action.track.title,
                    artist: action.track.artist,
                    image: action.track.image,
                },
                playing: action.playing,
            }
        case 'SET_BROWSE':
            return {
                ...state,
                browse: action.browse,
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist,
            }
        case 'SET_SPOTIFY':
            return {
                ...state,
                spotify: action.spotify,
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing,
            }
        default:
            return state;
    }
}

export default reducer;