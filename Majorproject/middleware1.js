const reviewSchema = require('./schema1');
const ExpressError = require("./utils/ExpressError");

module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);

  if (error) {
    const errMsg = error.details.map(el => el.message).join(",");
   // console.log(error);
    throw new ExpressError(errMsg, 400);
  }

  next();
};