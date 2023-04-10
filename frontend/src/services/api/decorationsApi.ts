import API_DATA_URLS from './config';
import { fetchData } from './apiUtils';

const createFetchFunction = (url: string) => {
    return () => fetchData(url);
};

const fetchFunctions: { [key: string]: () => Promise<any> } = {};
const categoryUrls: { [key: string]: string } = API_DATA_URLS.decorations;

for (const endpoint in categoryUrls) {
    fetchFunctions[endpoint] = createFetchFunction(categoryUrls[endpoint]);
}

export const artwork = fetchFunctions.artwork;
export const ceilingDecor = fetchFunctions.ceilingDecor;
export const housewares = fetchFunctions.housewares;
export const interiorStructures = fetchFunctions.interiorStructures;
export const rugs = fetchFunctions.rugs;
export const wallMounted = fetchFunctions.wallMounted;
export const wallpaper = fetchFunctions.wallpaper;

const decorationsApi = {
    artwork,
    ceilingDecor,
    housewares,
    interiorStructures,
    rugs,
    wallMounted,
    wallpaper
};

export default decorationsApi;
