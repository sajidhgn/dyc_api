import Joi from "joi";
export const userValid = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(5).max(30).required(),
    phone: Joi.string(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } } ),
    role: Joi.string().valid('admin', 'user').default('admin'),
});