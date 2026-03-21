const listingSchema = require("./schema"); 
const ExpressError = require("./utils/ExpressError");

module.exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const errMsg = error.details.map(el => el.message).join(",");
   // console.log(error);
    throw new ExpressError(errMsg, 400);
  }

  next();
};