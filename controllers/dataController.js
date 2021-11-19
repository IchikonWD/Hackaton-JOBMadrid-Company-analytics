import asyncHandler from 'express-async-handler';
import Data from '../models/dataSchema.js';

// @desc    Get all companies
// @route   GET /api/v2/data
// @access  Public

const getCompanies = asyncHandler(async (req, res, next) => {
  const data = await Data.find();
  if (data || data.length !== 0) {
    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'No data found',
    });
  }
});

// @desc    Get Companies by size
// @route   GET /api/v2/data/size
// @access  Public

const getCompaniesBySize = asyncHandler(async (req, res, next) => {
  const data = await Data.find().sort({ size: -1 });
  res.status(200).json({
    success: true,
    count: data.length,
    data,
  });
});

// @desc    Get Companies by date of creation
// @route   GET /api/v2/data/date
// @access  Public

const getCompaniesByDate = asyncHandler(async (req, res, next) => {
  const data = await Data.find().sort({ founded: -1 });
  res.status(200).json({
    success: true,
    count: data.length,
    data,
  });
});

// @desc    Get Companies quantity
// @route   GET /api/v2/data/quantity
// @access  Public

const getQuantity = asyncHandler(async (req, res, next) => {
  const industry = await Data.aggregate([
    {
      $group: {
        _id: '$industry',
        count: { $sum: 1 },
      },
    },
  ]);
  const size = await Data.aggregate([
    {
      $group: {
        _id: '$size',
        count: { $sum: 1 },
      },
    },
  ]);
  const date = await Data.aggregate([
    {
      $group: {
        _id: '$founded',
        count: { $sum: 1 },
      },
    },
  ]);

  res.status(200).json({
    success: true,
    industry,
    size,
    date,
  });
});

export { getCompanies, getCompaniesBySize, getCompaniesByDate, getQuantity };
