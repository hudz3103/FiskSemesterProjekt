const express = require("express");
const cors = require("cors"); //Importere Cors
const app = express();
const port = 3000;
const { Client } = require("pg");
var pg = require("pg");

const klient = new Client({
  user: "xlbhzbfg",
  host: "ella.db.elephantsql.com",
  database: "xlbhzbfg", //læg mærke til at user og database er det samme på elephant, da vi er på en shared instance
  password: "C930ISwG6S2oVNB0JWq5tzqMxGytTJys",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cors());
const qry = "SELECT entity,code, rounded_mismanaged FROM plastic_pollution";
const qry2 = "SELECT year, scaled_prod_ton FROM annual_prod";
klient.connect();

app.get("/plastic", async (req, res) => {
  try {
    let queryData = await klient.query(qry);
    res.json({
      ok: true,
      foods: queryData.rows,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.message,
    });
  }
});

app.get("/annualPlastic", async (req, res) => {
  try {
    let queryData = await klient.query(qry2);
    res.json({
      ok: true,
      foods: queryData.rows,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.message,
    });
  }
});
app.listen(port, () => {
  console.log(`Appl. lytter på http://localhost:${port}`);
});
