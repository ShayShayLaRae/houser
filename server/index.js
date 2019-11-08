require('dotenv').config();
const ctrl = require('./controller');
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();
app.use(express.json());

app.post('/api/wizard', ctrl.addHouse);
app.get('/api/wizard', ctrl.getHouses);
app.delete('/api/wizard/:id', ctrl.deleteHouse);

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection);
    console.log('Database Connected');

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} It's ALIVE!`));
})
