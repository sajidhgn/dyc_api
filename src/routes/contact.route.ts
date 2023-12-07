const express = require('express');
import {contactController} from "../controllers";
import {checkUserAuth} from "../middlewares/auth.helper";
const router = express.Router();

const contactRoute = router
    .post('/list', contactController.ContactData)
    .put('/banner/:id', checkUserAuth, contactController.Banner)
    .put('/longtermpartnership/:id', checkUserAuth, contactController.LongTermPartnership)
export default contactRoute;