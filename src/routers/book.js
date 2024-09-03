const express = require("express");

const router = express();

const bookControllers = require("../controllers/book")

router.get("/", (req,res) => {
    res.json(bookControllers.index())
})
router.get("/:id", (req,res) => {
    res.json(bookControllers.show(req.params.id))
})
router.post("/", (req,res) => {
    const code = bookControllers.create(req.body)
    res.status(code).json
})
router.put("/:id", (req,res) => {
    const code = bookControllers.update(req.body, req.params.id)
    res.status(code).json
})
router.delete("/:id", (req,res) => {
    res.json(bookControllers.destroy(req.params.id))
})
module.exports= router