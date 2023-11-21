const express = require('express');
const router = express.Router();
import {userController} from "../controllers";
import passport from '../config/passport';
import {checkUserAuth} from "../middlewares/auth.helper";

const userRoute =router
    .post('/register', userController.userRegistration)
    .get('/protected', checkUserAuth, (req: any, res: any) => {
        res.send('Protected route - Authentication successful');
    })
    .post('/login', userController.userLogin)
    // .get('/user/:id', userController.getUserById)
    .put('/:id', checkUserAuth, userController.updateUser)
    .delete('/:id', checkUserAuth, userController.deleteUser)


export default userRoute;