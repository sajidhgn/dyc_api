const express = require('express');
const router = express.Router();
import {userController} from "../controllers";
import passport from '../config/passport';
import {checkUserAuth} from "../middlewares/auth.helper";

const userRoute =router
    .post('/signup', userController.userRegistration)
    .post('/login', userController.userLogin)
    .post('/logout',checkUserAuth, userController.logoutUser)
    // .get('/user/:id', userController.getUserById)
    .put('/:id', checkUserAuth, userController.updateUser)
    .delete('/:id', checkUserAuth, userController.deleteUser)

export default userRoute;