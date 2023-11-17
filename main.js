const express = require("express");
const app = express();
const port = 3000;
const { Client } = require("pg");
var pg = require('pg');
const klient = new Client({
user: "xlbhzbfg",
host: "ella.db.elephantsql.com",
database: "xlbhzbfg", //læg mærke til at user og database er det samme på shared database
password: "C930ISwG6S2oVNB0JWq5tzqMxGytTJys",
port: 5432,
ssl: {
rejectUnauthorized: false,
},
});
const qry = 'SELECT food_item from food';
klient.connect();
app.get("/food", async (req, res) => {
try {
let queryData = await klient.query(qry);
res.json({
"ok": true,
"foods": queryData.rows,
})
} catch (error) {
res.json({
"ok": false,
"message": error.message,
})
};
})
app.listen(port, () => {
console.log(`Appl. lytter på http://localhost:${port}`);
});