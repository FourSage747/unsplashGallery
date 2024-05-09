const BASE_URL = 'https://api.unsplash.com';
const API_KEY = '047G75j5mTetX2MYJCCkS4hqBPEaNSRfpLYO0x5TWMA';


export const searchImages = () => {
    return fetch(`${BASE_URL}/photos/?client_id=${API_KEY}`);
}