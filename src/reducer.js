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
    }
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
        default:
            return state;
    }
}

export default reducer;