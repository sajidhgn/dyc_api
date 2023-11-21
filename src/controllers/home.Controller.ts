import {HomeModel} from "../models/home.model";
import {generateToken} from "../middlewares/auth.helper";
import passport from '../config/passport';

// User Registration
export const Home =  (req: any, res: any) => {

    res.json({ message: "Welcome to bezkoder application." });

};
export const AddData = async (req: any, res: any) => {

    try {
        const user = await HomeModel.create(req.body);

        res.send({
            message: "home created successfully!",
            status: 200
        });
    } catch (error) {
        res.send({
            message: "Internal server error",
            status: 500
        });
    }

};
