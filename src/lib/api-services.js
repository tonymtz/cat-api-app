const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.API_KEY;

export const getImage = () => {
    return fetch(`${baseUrl}/images?api_key=${apiKey}`)
        .then(res => res.json());
};

export const getFavs = () => {
    return fetch(`${baseUrl}/images/fav/?api_key=${apiKey}`)
        .then(res => res.json());
};

export const addFav = (imageId) => {
    return fetch(`${baseUrl}/images/fav/${imageId}?api_key=${apiKey}`, {
        method: 'POST'
    })
        .then(res => res.json());
};

export const removeFav = (imageId) => {
    return fetch(`${baseUrl}/images/fav/${imageId}?api_key=${apiKey}`, {
        method: 'DELETE'
    })
        .then(res => res.json());
};
