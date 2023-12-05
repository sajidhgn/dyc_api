const express = require('express');
import {homeController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const homeRoute = router
    .post('/list', homeController.homeData)
    .put('/banner/:id', checkUserAuth, homeController.Banner)
    .put('/industrypicker/:id',checkUserAuth, homeController.IndustryPicker)
    .put('/services/:id',checkUserAuth, homeController.DevelopmentServices)
    .put('/industries/:id',checkUserAuth, homeController.IndustriesList)
    .put('/experienceworld/:id',checkUserAuth, homeController.ExperienceWorld)
    .put('/quotation/:id',checkUserAuth, homeController.QuotationContent)
    .put('/engagementmodel/:id',checkUserAuth, homeController.EngagementModel)
    .put('/portfolio/:id',checkUserAuth, homeController.PortfolioSection)
export default homeRoute;