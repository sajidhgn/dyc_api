const express = require('express');
import {blogController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const blogRoute = router
    .post('/list', blogController.BlogData)
    .put('/banner/:id', checkUserAuth, blogController.Banner)
    .put('/blogsection/:id', checkUserAuth, blogController.BlogSection)
    .post('/single', blogController.GetBlog)
export default blogRoute;