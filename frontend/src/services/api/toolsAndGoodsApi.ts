import API_DATA_URLS from './config';
import { fetchData } from './apiUtils';

const createFetchFunction = (url: string) => {
    return () => fetchData(url);
};

const fetchFunctions: { [key: string]: () => Promise<any> } = {};
const categoryUrls: { [key: string]: string } = API_DATA_URLS.toolsAndGoods;

for (const endpoint in categoryUrls) {
    fetchFunctions[endpoint] = createFetchFunction(categoryUrls[endpoint]);
}

export const miscellaneous = fetchFunctions.miscellaneous;
export const messageCards = fetchFunctions.messageCards;
export const other = fetchFunctions.other;
export const toolsGoods = fetchFunctions.toolsGoods;

const toolsAndGoodsApi = {
    miscellaneous,
    messageCards,
    other,
    toolsGoods
};

export default toolsAndGoodsApi;
