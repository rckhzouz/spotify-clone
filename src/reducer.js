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
}

const reducer = (state, action) => {
    console.log(action);

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
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;