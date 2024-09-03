const express = require("express");

const router = express();

const studentControllers = require("../controllers/student")

router.get("/", (req,res) => {
    res.json(studentControllers.index())
})
router.get("/:id", (req,res) => {
    res.json(studentControllers.show(req.params.id))
})
router.post("/", (req,res) => {
    const code = studentControllers.create(req.body)
    res.status(code).json
})
router.put("/:id", (req,res) => {
    const code = studentControllers.update(req.body, req.params.id)
    res.status(code).json
})
router.delete("/:id", (req,res) => {
    res.json(studentControllers.destroy(req.params.id))
})
module.exports= router