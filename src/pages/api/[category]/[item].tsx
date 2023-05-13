import type { NextApiRequest, NextApiResponse } from 'next';
import { dataSources } from '@pages/api/[category]';
import { ItemUnion } from '@pages/api/[category]';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const category = Array.isArray(req.query.category) ? req.query.category[0] : req.query.category;
    const item = Array.isArray(req.query.item) ? req.query.item[0] : req.query.item;

    if (!category || !item) {
        return res.status(400).json({ message: 'Category or item not provided' });
    }

    const dataSourceKey = Object.keys(dataSources).find(
        key => key.toLowerCase() === category.toLowerCase(),
    );

    if (dataSourceKey) {
        const data = dataSources[dataSourceKey];
        const foundItem = data.find((i: ItemUnion) => i.name && i.name.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-') === item);

        if (foundItem) {
            res.status(200).json(foundItem);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
}

