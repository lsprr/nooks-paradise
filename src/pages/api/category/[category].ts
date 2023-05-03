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
    const searchWord = String(req.query.category);
    const dataSourceKey = Object.keys(dataSources).find(
        key => key.toLowerCase() === searchWord.toLowerCase(),
    );

    if (dataSourceKey) {
        res.status(200).json(dataSources[dataSourceKey]);
    } else {
        res.status(404).redirect('/404');
    }
}