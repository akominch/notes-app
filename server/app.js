import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { serverPort } from './config.json';

import * as db from './utils/DataBaseUtils';

const app = express();

db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );
// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data));
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data));
});

app.listen(serverPort);
