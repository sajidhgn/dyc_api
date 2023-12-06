const express = require('express');
import {careerController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const careerRoute = router
    .post('/list', careerController.CareerData)
    .put('/banner/:id', checkUserAuth, careerController.BannerSlider)
    .put('/collaboration/:id', checkUserAuth, careerController.Collaboration)
    .put('/collaboration/:id', checkUserAuth, careerController.CurrentHiring)
    .put('/totalperks/:id', checkUserAuth, careerController.TotalPerks)
export default careerRoute;