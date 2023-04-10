import { Api } from './apiTypes';
import allApi from './allApi';
import clothingApi from './clothingApi';
import decorationsApi from './decorationsApi';
import collectiblesApi from './collectiblesApi';
import constructionApi from './constructionApi';
import toolsAndGoodsApi from './toolsAndGoodsApi';
import creaturesApi from './creaturesApi';

const api: Api = {
    ...allApi,
    ...clothingApi,
    ...decorationsApi,
    ...collectiblesApi,
    ...constructionApi,
    ...toolsAndGoodsApi,
    ...creaturesApi
};

export default api;
