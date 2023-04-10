import API_DATA_URLS from './config';
import { fetchData } from './apiUtils';

const createFetchFunction = (url: string) => {
    return () => fetchData(url);
};

const fetchFunctions: { [key: string]: () => Promise<any> } = {};
const categoryUrls: { [key: string]: string } = API_DATA_URLS.creatures;

for (const endpoint in categoryUrls) {
    fetchFunctions[endpoint] = createFetchFunction(categoryUrls[endpoint]);
}

export const fish = fetchFunctions.fish;
export const insects = fetchFunctions.insects;

const creaturesApi = {
    fish,
    insects,
};

export default creaturesApi;
