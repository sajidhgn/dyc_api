import {UserModel} from "../models/user.model";
import {userValid} from "../validations/user.schema";
import {generateToken} from "../middlewares/auth.helper";
import passport from '../config/passport';

// User Registration
export const userRegistration = async (req: any, res: any) => {
    const { username, email, password, phone } = req.body
    const user = await UserModel.findOne({ email: email })
    const user_name = await UserModel.findOne({ username: username })

    if (user) {
        res.send({"status": 400, "message": "Email already exists"})

    }else if(user_name){
        res.send({"status": 400, "message": "Username already exists"})
    } else {
        try {
            const validationResult = userValid.validate(req.body);
            if (validationResult.error) {
                return res.status(400).json({ error: validationResult.error.details[0].message });
            }
            const user = await UserModel.create(req.body);

            res.send({
                message: "user created successfully!",
                status: 200,
                user: user
            });
        } catch (error) {
            res.send({
                message: "Internal server error",
                status: 500
            });
        }
    }

};

// User Login
export const userLogin = (req:any, res:any, next:any) => {
    passport.authenticate('local', (err:any, user:any, info:any) => {
        try {
            if (err) {
                throw err;
            }
            if (!user) {
                // Customize the error message based on the info object
                let errorMessage = "Login failed. Please check your credentials.";
                if (info && info.message) {
                    errorMessage = info.message;
                }
                return res.send({ "status": "failed", "message": errorMessage });
            }

            // If authentication is successful, generate JWT token or perform other actions
            const token = generateToken(user);
            return res.send({ "status": "success", "message": "Login Success", "token": token });
        } catch (error) {
            console.log(error);
            return res.send({ "status": "failed", "message": "Unable to Login" });
        }
    })(req, res, next);
};

export const getUserById = async (req: any, res: any) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const updateUser = async (req: any, res: any) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const deleteUser = async (req: any, res: any) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        res.json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};