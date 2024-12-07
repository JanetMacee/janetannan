import Joi from "joi";
const signupSchema = Joi.object({
  name: Joi.string().required().min(3).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ["com", "net"],
    },
  }),
});
export default signupSchema;
