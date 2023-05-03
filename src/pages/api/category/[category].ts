import type { NextApiRequest, NextApiResponse } from 'next';
import {
    achievements,
    construction,
    creatures,
    items,
    reactions,
    recipes,
    seasonsAndEvents,
    translations,
    villagers,
    npcs,
} from 'animal-crossing';

type ResponseData = any;

type DataSource = {
    achievements: any;
    construction: any;
    creatures: any;
    items: any;
    reactions: any;
    recipes: any;
    seasonsAndEvents: any;
    translations: any;
    villagers: any;
    npcs: any;
    [key: string]: any;
};

const dataSources: DataSource = {
    achievements,
    construction,
    creatures,
    items,
    reactions,
    recipes,
    seasonsAndEvents,
    translations,
    villagers,
    npcs,
};

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const page = Number(req.query.page) || 1;
    const itemsPerPage = Number(req.query.limit) > 0 ? Number(req.query.limit) : Infinity;
    const searchWord = String(req.query.category);
    const dataSourceKey = Object.keys(dataSources).find(
        key => key.toLowerCase() === searchWord.toLowerCase(),
    );

    if (dataSourceKey) {
        const data = dataSources[dataSourceKey];
        const indexOfLastItem = page * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const paginatedData = data.slice(indexOfFirstItem, indexOfLastItem);

        res.status(200).json({
            data: paginatedData,
            totalCount: data.length,
            currentPage: page,
            itemsPerPage: itemsPerPage,
        });
    } else {
        res.status(404).redirect('/404');
    }
}