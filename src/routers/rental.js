const express = require("express");

const router = express();

const rentalControllers = require("../controllers/rental")

router.get("/", (req,res) => {
    res.json(rentalControllers.index())
})
router.get("/:id", (req,res) => {
    res.json(rentalControllers.show(req.params.id))
})
router.post("/", (req,res) => {
    const code = rentalControllers.create(req.body)
    res.status(code).json
})
router.put("/:id", (req,res) => {
    const code = rentalControllers.update(req.body, req.params.id)
    res.status(code).json
})
router.delete("/:id", (req,res) => {
    res.json(rentalControllers.destroy(req.params.id))
})
module.exports= router