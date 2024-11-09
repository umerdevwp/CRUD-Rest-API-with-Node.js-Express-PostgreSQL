import Joi from "joi";


// Products Validator Schema
const productScheme = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().positive().required(),
});

const validateProduct = (req, res, next) => {
  const { error } = productScheme.validate(req.body);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  next();
};


export default validateProduct;