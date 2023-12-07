const express = require('express');
import userRoute from "./user.route";
import homeRoute from "./home.route";
import aboutRoute from "./about.route";
import servicesRoute from "./services.route";
import industryRoute from "./industry.route";
import contactRoute from "./contact.route";
import careerRoute from "./career.route";
const router = express.Router();

const defaultRoutes = [
    {
        path: '/admin',
        route: userRoute
    },
    {
        path: '/home',
        route: homeRoute
    },
    {
        path: '/about',
        route: aboutRoute
    },
    {
        path: '/service',
        route: servicesRoute
    },
    {
        path: '/industry',
        route: industryRoute
    },
    {
        path: '/contact',
        route: contactRoute
    },
    {
        path: '/career',
        route: careerRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;