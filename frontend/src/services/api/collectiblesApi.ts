import API_DATA_URLS from './config';
import { fetchData } from './apiUtils';

const createFetchFunction = (url: string) => {
    return () => fetchData(url);
};

const fetchFunctions: { [key: string]: () => Promise<any> } = {};
const categoryUrls: { [key: string]: string } = API_DATA_URLS.collectibles;

for (const endpoint in categoryUrls) {
    fetchFunctions[endpoint] = createFetchFunction(categoryUrls[endpoint]);
}

export const achievements = fetchFunctions.achievements;
export const fossils = fetchFunctions.fossils;
export const gyroids = fetchFunctions.gyroids;
export const music = fetchFunctions.music;
export const photos = fetchFunctions.photos;
export const posters = fetchFunctions.posters;
export const reactions = fetchFunctions.reactions;
export const recipes = fetchFunctions.recipes;
export const seaCreatures = fetchFunctions.seaCreatures;
export const seasonsAndEvents = fetchFunctions.seasonsAndEvents;
export const specialNPCs = fetchFunctions.specialNPCs;
export const translations = fetchFunctions.translations;
export const villagers = fetchFunctions.villagers;

const collectiblesApi = {
    achievements,
    fossils,
    gyroids,
    music,
    photos,
    posters,
    reactions,
    recipes,
    seaCreatures,
    seasonsAndEvents,
    specialNPCs,
    translations,
    villagers
};

export default collectiblesApi;
