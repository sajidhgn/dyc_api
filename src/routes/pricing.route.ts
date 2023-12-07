const express = require('express');
import {pricingController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const portfolioRoute = router
    .post('/list', pricingController.PricingData)
    .put('/banner/:id', checkUserAuth, pricingController.Banner)
    .put('/pricingsection/:id', checkUserAuth, pricingController.PricingSection)
    .put('/testimonials/:id', checkUserAuth, pricingController.Testimonials)
export default portfolioRoute;