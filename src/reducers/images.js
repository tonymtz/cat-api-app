import { getImage, addFav, getFavs, removeFav } from '../lib/api-services';

const initState = {
    image: null,
    loading: false
};

export const IMAGE_LOAD = 'IMAGE_LOAD';
export const IMAGE_REFRESH = 'IMAGE_REFRESH';
export const IMAGE_FAV = 'IMAGE_FAV';
export const FAVS_LOAD = 'FAVS_LOAD';
export const UPDATE_LOADING = 'UPDATE_LOADING';

export const updateLoading = (loading) => ({ type: UPDATE_LOADING, payload: loading });
export const loadImage = (image) => ({ type: IMAGE_LOAD, payload: image });
export const loadFavs = (favs) => ({ type: FAVS_LOAD, payload: favs });

export const fetchImage = () => {
    return (dispatch) => {
        dispatch(updateLoading(true));

        getImage().then((data) => dispatch(loadImage(data.image)));
    };
};

export const fetchFavs = () => {
    return (dispatch) => {
        dispatch(updateLoading(true));

        getFavs().then((data) => dispatch(loadFavs(data.images)));
    };
};

export const favImage = (imageId) => {
    return (dispatch) => {
        dispatch(updateLoading(true));

        addFav(imageId).then(() => {
            getImage().then((data) => dispatch(loadImage(data.image)));
        });
    };
};

export const unfavImage = (imageId) => {
    return (dispatch) => {
        dispatch(updateLoading(true));

        removeFav(imageId).then(() => {
            getFavs().then((data) => dispatch(loadFavs(data.images)));
        });
    };
};

export default (state = initState, action) => {
    switch (action.type) {
        case IMAGE_LOAD:
            return { ...state, image: action.payload, loading: false };
        case FAVS_LOAD:
            return { ...state, favs: action.payload, loading: false };
        case UPDATE_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};