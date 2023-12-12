const express = require('express');
const router = express.Router();
import {userController} from "../controllers";
import passport from '../config/passport';
import {checkUserAuth} from "../middlewares/auth.helper";
import validateUser from "../validations/validateUser";

const userRoute =router
    .post('/signup',validateUser, userController.userRegistration)
    .post('/login', userController.userLogin)
    .post('/logout',checkUserAuth, userController.logoutUser)
    // .get('/user/:id', userController.getUserById)
    .put('/:id', checkUserAuth, userController.updateUser)
    .delete('/:id', checkUserAuth, userController.deleteUser)

export default userRoute;