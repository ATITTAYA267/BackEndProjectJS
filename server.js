const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const db = new sqlite3.Database('./Database/TonChaNoy.sqlite');


app.listen(port,() => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});