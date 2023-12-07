const express = require('express');
import {blockchainController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const blockchainRoute = router
    .post('/list', blockchainController.BlockchainData)
    .put('/banner/:id', checkUserAuth, blockchainController.Banner)
    .put('/whychooseus/:id', checkUserAuth, blockchainController.WhyChooseUs)
    .put('/benefits/:id', checkUserAuth, blockchainController.Benefits)
    .put('/features/:id', checkUserAuth, blockchainController.Features)
    .put('/casestudies/:id', checkUserAuth, blockchainController.CaseStudies)
    .put('/team/:id', checkUserAuth, blockchainController.Team)
    .put('/technologies/:id', checkUserAuth, blockchainController.Technologies)

export default blockchainRoute;