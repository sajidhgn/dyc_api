const express = require('express');
import userRoute from "./user.route";
import homeRoute from "./home.route";
import aboutRoute from "./about.route";
import servicesRoute from "./services.route";
import industryRoute from "./industry.route";
import contactRoute from "./contact.route";
import careerRoute from "./career.route";
import portfolioRoute from "./portfolio.route";
import blogRoute from "./blog.route";
import pricingRoute from "./pricing.route";
import dedicatedRoute from "./dedicated.route";
import blockchainRoute from "./blockchain.route";
import gameRoute from "./game.route";
import directorRoute from "./director.route";
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
    },
    {
        path: '/portfolio',
        route: portfolioRoute
    },
    {
        path: '/blog',
        route: blogRoute
    },
    {
        path: '/pricing',
        route: pricingRoute
    },{
        path: '/dedicated',
        route: dedicatedRoute
    },{
        path: '/blockchain',
        route: blockchainRoute
    },{
        path: '/game',
        route: gameRoute
    },
    {
        path: '/director',
        route: directorRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;