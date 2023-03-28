const { Router } = require("express")
const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")
const router = Router();
let { favs } = require("../Utils/favs")

router.get('/onsearch/:id', getCharById)
router.get('/detail/:id', getCharDetail)

/* router.use('/rickandmorty/fav', getCharDetail) */

router.post("/rickandmorty/fav", (req, res) => {
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
    /* const index = favs.findIndex(obj => obj.id === id);
    if (index >= 0) {
        favs.splice(index, 1);
        res.status(200).json(favs)
    } */
})



module.exports = { router }