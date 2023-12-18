const express = require('express');
import {careerController, portfolioController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const portfolioRoute = router
    .post('/list', portfolioController.PortfolioData)
    .put('/banner/:id', checkUserAuth, portfolioController.Banner)
    .put('/portfoliosection/:id', checkUserAuth, portfolioController.PortfolioSection)
    .post('/single', portfolioController.GetPortfolio)
export default portfolioRoute;