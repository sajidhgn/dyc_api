const express = require('express');
import {servicesController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const servicesRoute = router
    .post('/list',checkUserAuth, servicesController.ServicesData)
    .put('/banner/:id', checkUserAuth, servicesController.Banner)
    .put('/banner_lower/:id',checkUserAuth, servicesController.BannerLower)
    .put('/otherservices/:id',checkUserAuth, servicesController.OtherServices)
    .put('/dynamicfactors/:id',checkUserAuth, servicesController.DynamicFactors)
    .put('/structureoverflow/:id',checkUserAuth, servicesController.StructureOverflow)
    .put('/roadmap/:id',checkUserAuth, servicesController.RoadMap)
    .put('/team/:id',checkUserAuth, servicesController.Team)
    .put('/favoritieslist/:id',checkUserAuth, servicesController.FavoritiesList)
export default servicesRoute;