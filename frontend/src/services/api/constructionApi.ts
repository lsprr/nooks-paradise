import API_DATA_URLS from './config';
import { fetchData } from './apiUtils';

const createFetchFunction = (url: string) => {
    return () => fetchData(url);
};

const fetchFunctions: { [key: string]: () => Promise<any> } = {};
const categoryUrls: { [key: string]: string } = API_DATA_URLS.construction;

for (const endpoint in categoryUrls) {
    fetchFunctions[endpoint] = createFetchFunction(categoryUrls[endpoint]);
}

export const fencing = fetchFunctions.fencing;
export const floors = fetchFunctions.floors;
export const constructionItems = fetchFunctions.constructionItems;
export const paradisePlanning = fetchFunctions.paradisePlanning;

const constructionApi = {
    fencing,
    floors,
    constructionItems,
    paradisePlanning
};

export default constructionApi;
