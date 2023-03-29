const axios = require("axios")

const URL_BASE = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const resp = await axios.get(`${URL_BASE}${req.params.id}`)
        const { id, image, name, gender, species } = resp.data
        res.status(200).json({ id, image, name, gender, species })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}





module.exports = getCharById
























/* const successHandler = (response, res) => {
    const { id, image, name, gender, species } = response.data
    res.writeHead(200, { "Content-Type": "application/json" })
    return res.end(JSON.stringify({ id, image, name, gender, species }));
}
const errorHandler = (err, res) => {
    res.writeHead(500, { "Content-Type": "text/plain" })
    return res.end(err.message)
}

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => { successHandler(response, res) })
        .catch((err) => { errorHandler(err, res) })
}

*/