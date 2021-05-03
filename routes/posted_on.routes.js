const express = require("express");
const {
    getAllPostedon,
    getPostedonById,
    createPostedon,
    updatePostedonById,
    deletePostedon
} = require("../controllers/Posted_on.controller");

const router = new express.Router();

router.post("/", createPostedon);
router.get("/showpostedon", getAllPostedon);
router.get("/showjobtypebyId/:id", getPostedonById);
router.patch("/updatejobtype/:id", updatePostedonById);
router.delete("/deletejobtype/:id", deletePostedon);

module.exports = router;