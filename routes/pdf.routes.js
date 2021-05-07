const express = require("express");
const {
    CreatePdf,
    FetchPdf
} = require("../controllers/pdf.controller") ;


const router = express.Router();

router.post('/create-pdf',CreatePdf);
router.get('/fetch-pdf',FetchPdf);

module.exports = router;