const axios = require("axios")

const getCharDetail = async (req, res) => {
    try {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
        const { id, image, name, gender, species, status, origin } = resp.data
        res.status(200).json({ id, image, name, gender, species, status, origin })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getCharDetail