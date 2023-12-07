const express = require('express');
import {dedicatedController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const dedicatedRoute = router
    .post('/list', dedicatedController.DedicatedData)
    .put('/banner/:id', checkUserAuth, dedicatedController.Banner)
    .put('/features/:id', checkUserAuth, dedicatedController.Features)
    .put('/team/:id', checkUserAuth, dedicatedController.Team)
    .put('/technologies/:id', checkUserAuth, dedicatedController.Technologies)
export default dedicatedRoute;