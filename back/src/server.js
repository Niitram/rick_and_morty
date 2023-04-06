/* const http = require("http")
const fs = require("fs")*/
/* const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail") */

const express = require('express');
const server = express();
const { router } = require("./Routes/index")
const PORT = process.env.PORT || 3001;
require("dotenv").config()
const morgan = require("morgan")
const cors = require('cors')

server.use(cors())
server.use(morgan("dev"))
server.use(express.json())
server.use("/", router)


module.exports = server



















/* const getIdUrl = (url) => {
    let urlArr = url.split("/")
    let id = urlArr[urlArr.length - 1]
    return id
} */


/* res.setHeader('Access-Control-Allow-Origin', '*'); */



/* if (req.url.includes('rickandmorty/character')) {
    let spliteado = req.url.split("/")
        let id = spliteado[spliteado.length - 1]
        const character = characters.find(char => char.id == id)
        if (character) {
            res.writeHead(200, { "Content-Type": "application/json" })
            return res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" })
            return res.end(JSON.stringify({ error: "character not found" }));
        }
    } */

