const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc          Get All Users
// @route         GET /api/v1/user
// @access        Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().lean();
  res.status(200).json({
    success: true,
    data: users,
  });
});

// @desc          Get Single User
// @route         GET /api/v1/user/:id
// @access        Public
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorResponse(`User Not Found with id of ${req.params.id}`, 404)
    );
  }
  res.status(201).json({
    success: true,
    data: user,
  });
});

// @desc          Create new User
// @route         POST /api/v1/user
// @access        Private
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    data: user,
  });
});
