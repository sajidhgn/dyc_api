const express = require('express');
import userRoute from "./user.route";
import homeRoute from "./home.route";
const router = express.Router();

const defaultRoutes = [
    {
        path: '/admin',
        route: userRoute
    },
    {
        path: '/home',
        route: homeRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;