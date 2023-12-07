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

export default blockchainRoute;