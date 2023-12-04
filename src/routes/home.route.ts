const express = require('express');
import {homeController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const homeRoute = router
    .post('/list',checkUserAuth, homeController.homeData)
    .put('/banner/:id', checkUserAuth, homeController.Banner)
    .put('/industrypicker/:id',checkUserAuth, homeController.IndustryPicker)
    .put('/services/:id',checkUserAuth, homeController.DevelopmentServices)
    .put('/industries/:id',checkUserAuth, homeController.IndustriesList)
export default homeRoute;