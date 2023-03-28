const axios = require("axios")

const getCharDetail = (req, res) => {
    const { id } = req.params
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            const { id, image, name, gender, species, status, origin } = response.data
            res.status(200).json({ id, image, name, gender, species, status, origin })
        })
        .catch((error) => {
            res.status(500).json({ error: error.message })
        })



}

module.exports = getCharDetail