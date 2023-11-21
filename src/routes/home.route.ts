const express = require('express');
import {homeController} from "../controllers";
const router = express.Router();

const homeRoute = router
    .get('/home', homeController.Home)
    .post('/banner', homeController.AddData)
export default homeRoute;