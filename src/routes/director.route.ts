const express = require('express');
import {directorController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const directorRoute = router
    .post('/list', directorController.DirectorData)
    .put('/banner/:id', checkUserAuth, directorController.Banner)
    .put('/director_message/:id', checkUserAuth, directorController.DirectorMessage)
    .put('/innovate_list/:id', checkUserAuth, directorController.InnovateList)
    .put('/people_says/:id', checkUserAuth, directorController.PeopleSays)
export default directorRoute;