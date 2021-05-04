const express = require('express');
const router = express.Router();
const pdf = require('html-pdf');
const pdfTemplate = require('../documents/index');



const CreatePdf = async (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('controllers/result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });

};
const FetchPdf = async (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)

}
module.exports = {
    CreatePdf,
    FetchPdf
}

