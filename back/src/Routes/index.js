const { Router } = require("express")

const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")
const login = require("../controllers/login")
const deleteFavs = require("../controllers/deleteFav")
const postFavs = require("../controllers/postFav")
const postUser = require("../controllers/postUser")



const router = Router();
let { favs } = require("../Utils/favs")

router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharDetail)

router.get("/rickandmorty/login", login)
router.post("/rickandmorty/login", postUser)
router.post("/rickandmorty/fav", postFavs)
router.delete("/rickandmorty/fav/:id", deleteFavs)





/* router.use('/rickandmorty/fav', getCharDetail) */

/* router.post("/rickandmorty/fav", (req, res) => {
    favs.push(req.body)
    res.status(201).json({ status: "ok" });
})
router.get("/rickandmorty/fav", (req, res) => {
    res.status(201).json(favs);
})
router.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params
    favs = favs.filter((char) => char.id != id)
    res.status(200).json({ status: "ok" })
}) */



module.exports = { router }