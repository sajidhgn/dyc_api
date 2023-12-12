// import Joi from 'joi';
//
// const userSchema = Joi.object({
//     username: Joi.string().alphanum().min(3).max(30).required(),
//     password: Joi.string().min(5).max(30).required(),
//     phone: Joi.string(),
//     email: Joi.string().email().required(),
//     role: Joi.string().valid('admin', 'user').default('admin'),
//
//     banner: Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         btnLink: Joi.string().required(),
//     }),
//     banner_slider:Joi.object({
//         list:Joi.array().items({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         }),
//     about_section: Joi.object({
//         title: Joi.string().required(),
//         description: Joi.string().required(),
//         btnLink: Joi.string().required(),
//         img: Joi.string().required(),
//         videoLink: Joi.string().required()
//     }),
//     leadership: Joi.object({
//         title: Joi.string().required(),
//         list: Joi.array().items({
//         img: Joi.string().required(),
//         title: Joi.string().required(),
//         subTitle: Joi.string().required(),
//         socialIcons: Joi.array().items({
//         icon: Joi.string().required(),
//         iconLink: Joi.string().required()
//     })})
//     }),
//     customize_solution: Joi.object({
//         content: Joi.string().required(),
//         style: Joi.string(),
//     }),
//     company_history: Joi.object({
//         content: Joi.string().required(),
//         style: Joi.string(),
//     }),
//
//     awesome_section: Joi.object({
//         title: Joi.string().required(),
//         list:Joi.array().items({
//             icon: Joi.string().required(),
//             title: Joi.string().required(),
//             description: Joi.string().required(),
//         })
//     }),
//     portfolio_numbers: Joi.object({
//         list:[
//             {
//                 title: {type: String, required: true},
//                 subTitle: {type: String, required: true}
//             }
//         ]
//     }),
//
//     management_reviews: {
//         title: {type: String, required: true},
//         list: [
//             {
//                 img: {type: String, required: true},
//                 title: {type: String, required: true},
//                 subTitle: {type: String, required: true},
//                 description: {type: String, required: true}
//             }
//         ]
//     }
// });
//
// const validateUser = (req: any, res: any, next: any) => {
//     const { error } = userSchema.validate(req.body);
//     if (error) {
//         return res.status(400).json({status:"error", message: error.details[0].message });
//     }
//     next();
// };
//
// export default validateUser;