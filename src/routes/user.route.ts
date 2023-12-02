const express = require('express');
const router = express.Router();
import {userController} from "../controllers";
import passport from '../config/passport';
import {checkUserAuth} from "../middlewares/auth.helper";

const userRoute =router
    .post('/register', userController.userRegistration)
    .post('/login', userController.userLogin)
    // .get('/user/:id', userController.getUserById)
    .put('/:id', checkUserAuth, userController.updateUser)
    .delete('/:id', checkUserAuth, userController.deleteUser)
    .post('/logout',checkUserAuth, userController.logoutUser)


export default userRoute;