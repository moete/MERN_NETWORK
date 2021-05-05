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
router.get("/showpostedonbyId/:id", getPostedonById);
router.patch("/updatepostedon/:id", updatePostedonById);
router.delete("/deletepostedon", deletePostedon);

module.exports = router;