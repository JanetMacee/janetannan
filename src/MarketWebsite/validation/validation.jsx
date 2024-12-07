import Joi from "joi";
const signupSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ["com", "net"],
    },
  }),
  password: Joi.string().required().min(8).alphanum().max(30),
  password2: Joi.string().required().valid(Joi.ref("password")),
});
export default signupSchema;
