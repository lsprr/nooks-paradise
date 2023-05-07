import type { NextApiRequest, NextApiResponse } from 'next';
import { Achievement } from 'animal-crossing/lib/types/Achievement';
import { Construction } from 'animal-crossing/lib/types/Construction';
import { Creature } from 'animal-crossing/lib/types/Creature';
import { Item } from 'animal-crossing/lib/types/Item';
import { Reaction } from 'animal-crossing/lib/types/Reaction';
import { Recipe } from 'animal-crossing/lib/types/Recipe';
import { SeasonsAndEvents } from 'animal-crossing/lib/types/SeasonsAndEvents';
import { Villager } from 'animal-crossing/lib/types/Villager';
import { Npc } from 'animal-crossing/lib/types/NPC';

import {
    achievements,
    construction,
    creatures,
    items,
    reactions,
    recipes,
    seasonsAndEvents,
    villagers,
    npcs,
} from 'animal-crossing';

type ResponseData = {
    data: Achievement[] | Construction[] | Creature[] | Item[] | Reaction[] | Recipe[] | SeasonsAndEvents[] | Villager[] | Npc[];
    totalCount: number;
    currentPage: number;
    itemsPerPage: number;
};

type DataSource = {
    achievements: Achievement[];
    construction: Construction[];
    creatures: Creature[];
    items: Item[];
    reactions: Reaction[];
    recipes: Recipe[];
    seasonsAndEvents: SeasonsAndEvents[];
    villagers: Villager[];
    npcs: Npc[];
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