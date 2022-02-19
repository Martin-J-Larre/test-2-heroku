const express = require('express');
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 4001

// EJS
app.set("view engine", "ejs");
app.set("views","./views");

app.get('/', (req, res, next) =>{
    res.render("index", {titulo: "Test 2 Heroku"});
})
app.get('/segunda', (req, res, next) =>{
    res.render("segundapagina", {titulo: "Segunda página"});
})
app.get('/tercera', (req, res, next) =>{
    res.render("tercerapagina", {titulo: "Tercera página"});
})


app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`)
})