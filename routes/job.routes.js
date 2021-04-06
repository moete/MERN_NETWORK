const express = require("express");
const {
    getAllJob,
    getJobById,
    createJob,
    updateJobById,
    deleteJob,
} = require("../controllers/Job.controller");

const router = new express.Router();

router.post("/", createJob);
router.get("/showJob", getAllJob);
router.get("/showbyId", getJobById);
router.patch("/updateJob/:id", updateJobById);
router.delete("/deleteJob/:id", deleteJob);

module.exports = router;