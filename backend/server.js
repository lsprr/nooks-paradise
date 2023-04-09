const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/combined/:filename', (req, res) => {
    const filename = req.params.filename;

    fs.readFile(`./json/data/${filename}.json`, 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('File not found');
        } else {
            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            } catch (e) {
                res.status(500).send('Error parsing JSON file');
            }
        }
    });
});

app.get('/api/data/:filename', (req, res) => {
    const filename = req.params.filename;

    fs.readFile(`./json/data/${filename}.json`, 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('File not found');
        } else {
            try {
                const jsonData = JSON.parse(data);
                res.json(jsonData);
            } catch (e) {
                res.status(500).send('Error parsing JSON file');
            }
        }
    });
});

app.listen(port, () => {
    console.log(`JSON API server listening at http://localhost:${port}`);
});
