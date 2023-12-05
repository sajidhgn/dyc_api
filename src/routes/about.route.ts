const express = require('express');
import {aboutController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const aboutRoute = router
    .post('/list', aboutController.homeData)
    .put('/bannerslider/:id', checkUserAuth, aboutController.BannerSlider)
    .put('/aboutus/:id', checkUserAuth, aboutController.AboutSection)
    .put('/leadership/:id', checkUserAuth, aboutController.LeaderShip)
    .put('/customizesolution/:id', checkUserAuth, aboutController.CustomizeSolution)
    .put('/companyhistory/:id', checkUserAuth, aboutController.CompanyHistory)
    .put('/awesomesection/:id', checkUserAuth, aboutController.AwesomeSection)
    .put('/portfolionumbers/:id', checkUserAuth, aboutController.PorfolioNumbers)
    .put('/reviews/:id', checkUserAuth, aboutController.ManagementReviews)
export default aboutRoute;