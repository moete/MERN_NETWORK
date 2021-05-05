const express = require('express');
const {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompanyById,
  deleteCompany,
} = require('../controllers/company.controller');

const router = new express.Router();

router.post('/create', createCompany);
router.get('/showcompanies', getAllCompanies);
router.get('/showbyId', getCompanyById);
router.patch('/updatecompany/:id', updateCompanyById);
router.delete('/deletecompany/:id', deleteCompany);

module.exports = router;
