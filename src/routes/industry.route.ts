const express = require('express');
import {industryController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const industryRoute = router
    .post('/list', industryController.IndustriesData)
    .put('/banner/:id', checkUserAuth, industryController.Banner)
    .put('/bannerlower/:id', checkUserAuth, industryController.BannerLower)
    .put('/otherindustries/:id', checkUserAuth, industryController.OtherIndustries)
    .put('/otherindustries/:id', checkUserAuth, industryController.OtherIndustries)
    .put('/solutions/:id', checkUserAuth, industryController.Solutions)
    .put('/readynext/:id', checkUserAuth, industryController.ReadyNext)
    .put('/specializedteam/:id', checkUserAuth, industryController.SpecializedTeam)
    .put('/standoutsection/:id', checkUserAuth, industryController.StandoutSection)
export default industryRoute;