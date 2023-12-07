const express = require('express');
import {portfolioController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const portfolioRoute = router
    .post('/list', portfolioController.PortfolioData)
    .put('/banner/:id', checkUserAuth, portfolioController.Banner)
    .put('/portfoliosection/:id', checkUserAuth, portfolioController.PortfolioSection)
export default portfolioRoute;