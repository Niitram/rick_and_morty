const { Favorite } = require("../DB_connection")

const deleteFavs = async (req, res) => {
    const { id } = req.params
    try {
        const character = await Favorite.findByPk(id);
        await character.destroy();
        const favorites = await Favorite.findAll()
        res.status(200).json({ favorites })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }


}


module.exports = deleteFavs