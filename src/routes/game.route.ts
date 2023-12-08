const express = require('express');
import {gameController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const contactRoute = router
    .post('/list', gameController.GameData)
    .put('/banner/:id', checkUserAuth, gameController.Banner)
    .put('/whychooseus/:id', checkUserAuth, gameController.WhyChooseUs)
    .put('/whyhireus/:id', checkUserAuth, gameController.WhyHireUs)
    .put('/features/:id', checkUserAuth, gameController.Features)
    .put('/discussion/:id', checkUserAuth, gameController.Discussion)
    .put('/technologies/:id', checkUserAuth, gameController.Technologies)
export default contactRoute;