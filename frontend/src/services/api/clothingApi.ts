import API_DATA_URLS from './config';
import { fetchData } from './apiUtils';

const createFetchFunction = (url: string) => {
    return () => fetchData(url);
};

const fetchFunctions: { [key: string]: () => Promise<any> } = {};
const categoryUrls: { [key: string]: string } = API_DATA_URLS.clothing;

for (const endpoint in categoryUrls) {
    fetchFunctions[endpoint] = createFetchFunction(categoryUrls[endpoint]);
}

export const accessories = fetchFunctions.accessories;
export const bags = fetchFunctions.bags;
export const bottoms = fetchFunctions.bottoms;
export const clothingOther = fetchFunctions.clothingOther;
export const dressUp = fetchFunctions.dressUp;
export const headwear = fetchFunctions.headwear;
export const shoes = fetchFunctions.shoes;
export const socks = fetchFunctions.socks;
export const tops = fetchFunctions.tops;
export const umbrellas = fetchFunctions.umbrellas;

const clothingApi = {
    accessories,
    bags,
    bottoms,
    clothingOther,
    dressUp,
    headwear,
    shoes,
    socks,
    tops,
    umbrellas
};

export default clothingApi;
