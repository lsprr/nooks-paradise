const express = require('express');
const cors = require('cors');
const {
    achievements,
    construction,
    creatures,
    items,
    reactions,
    recipes,
    seasonsAndEvents,
    translations,
    villagers,
    npcs
} = require('animal-crossing');

const app = express();
app.use(cors());

/*
* This function takes an array of items as input and returns an object
* where the items are grouped by their sourceSheet property
*/
function groupBySourceSheet(items) {
    return items.reduce((accumulator, currentItem) => {
        const category = currentItem.sourceSheet.replace(/([a-z])([A-Z])/g, '$1 $2');

        if (!accumulator[category]) {
            accumulator[category] = [];
        }

        accumulator[category].push(currentItem);
        return accumulator;
    }, {});
}

app.get('/api/achievements', (req, res) => {
    res.json(groupBySourceSheet(achievements));
});

app.get('/api/construction', (req, res) => {
    res.json(groupBySourceSheet(construction));
});

app.get('/api/creatures', (req, res) => {
    res.json(groupBySourceSheet(creatures));
});

app.get('/api/items', (req, res) => {
    res.json(groupBySourceSheet(items));
});

app.get('/api/reactions', (req, res) => {
    res.json(groupBySourceSheet(reactions));
});

app.get('/api/recipes', (req, res) => {
    res.json(groupBySourceSheet(recipes));
});

app.get('/api/seasonsAndEvents', (req, res) => {
    res.json(groupBySourceSheet(seasonsAndEvents));
});

app.get('/api/translations', (req, res) => {
    res.json(groupBySourceSheet(translations));
});

app.get('/api/villagers', (req, res) => {
    res.json(groupBySourceSheet(villagers));
});

app.get('/api/npcs', (req, res) => {
    res.json(groupBySourceSheet(npcs));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
