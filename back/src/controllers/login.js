const { User } = require("../DB_connection")

const login = async (req, res) => {
    const { email, password } = req.body
    //chequeo si existe, sino exploto
    if (!email || !password) res.status(400).json({ error: `Faltan datos` })
    try {
        // Busco el usuario por su email
        const user = await User.findOne({ where: { email } });
        //si el usuario no exite
        if (!user) res.status(404).json({ error: `Usuario no encontrado` })
        //si existe comparo contraseñas
        if (user.password != password) res.status(403).json({ error: `Contraseña incorrecta` })
        res.status(200).json({ access: true })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = login