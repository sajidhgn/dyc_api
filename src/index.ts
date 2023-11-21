import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "./config/passport";
import './config/db';
import * as path from 'path';
import * as dotenv from 'dotenv';

const envPath = path.resolve(__dirname, './.env');
dotenv.config({ path: envPath });


const app = express();

app.use(cors({
    credentials: true,
}))
app.use(compression());
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(session({
    secret: '_jYwa!-Hy2lZV9~E92akfpVhXTtSRija~',
    resave: false,
    saveUninitialized:true,
    store: MongoStore.create({mongoUrl: "mongodb://localhost:27017/passport", collectionName: "sessions"}),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3000;

app.use('/api', require('./routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
