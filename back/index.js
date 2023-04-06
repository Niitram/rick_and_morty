const server = require("./src/server.js")
const { conn } = require('./src/DB_connection.js');




conn
    .sync({ alter: true })
    .then(() => {
        server.listen("3001", () => {
            console.log("Listening on port", 3001);
        });
    })
    .catch((err) => console.log(err.message));