const Review = require("../models/Review");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const createReview = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ review });
};
const getAllReviews = async (req, res) => {
  res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
};
const getSingleReview = async (req, res) => {
  res.status(StatusCodes.OK).json({ review });
};
const updateReview = async (req, res) => {
  res.status(StatusCodes.OK).json({ review });
};
const deleteReview = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "Success! Review removed" });
};
const getSingleProductReviews = async (req, res) => {
  res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
  getSingleProductReviews,
};
