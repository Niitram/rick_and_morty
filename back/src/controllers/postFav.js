const { Favorite } = require("../DB_connection")

const postFavs = async (req, res) => {
    try {
        const { name, species, gender, image, id } = req.body
        if (!name || !id || !image || !species || !gender) res.status(401).json({ error: `Faltan datos` })
        const [favorite, created] = await Favorite.findOrCreate({
            where: { name },
            defaults: { name, id, image, species, gender }
        })
        const favorites = await Favorite.findAll()
        res.status(200).json({ favorites })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = postFavs