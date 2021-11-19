import express from 'express';
import {
  getCompanies,
  getCompaniesBySize,
  getCompaniesByDate,
  getQuantity,
} from '../controllers/dataController.js';
const router = express.Router();

router.get('/', getCompanies);
router.get('/size', getCompaniesBySize);
router.get('/date', getCompaniesByDate);
router.get('/quantity', getQuantity);

export default router;
