import jwt from "jsonwebtoken";
import config from "../config/config";
import {UserModel} from "../models/user.model";
import {generateToken} from "../middlewares/auth.helper";
import passport from '../config/passport';

// User Registration
export const userRegistration = async (req: any, res: any, next: any) => {
    const {username, email, password, phone} = req.body
    const user = await UserModel.findOne({email: email})
    const user_name = await UserModel.findOne({username: username})

    if (user) {
        res.json({"status": "warning", "message": "Email already exists"})

    } else if (user_name) {
        res.json({"status": "warning", "message": "Username already exists"})
    } else {
        try {
            const getuser = await UserModel.create(req.body);
            const {username, email, password, _id, role} = getuser

            passport.authenticate('local', (err: any, getuser: any, info: any) => {
                try {
                    if (err) {
                        throw err;
                    }
                    if (!getuser) {
                        // Customize the error message based on the info object
                        let errorMessage = "Registration failed. Please check your credentials.";
                        if (info && info.message) {
                            errorMessage = info.message;
                        }
                        return res.json({"status": "error", "message": errorMessage});
                    }

                    // If authentication is successful, generate JWT token or perform other actions
                    const token = generateToken(getuser);
                    return res.json({
                        "status": "success", "message": "Registration Success", "token": token, "user": {
                            username: username,
                            email: email,
                            phone: phone,
                            role: role,
                            id: _id
                        }
                    });
                } catch (error) {
                     res.json({"status": "error", "message": "Unable to Registration"});
                }
            })(req, res, next);

        } catch (error) {
            res.json({
                message: "Internal server error",
                status: "error"
            });
        }
    }

};

// User Login
export const userLogin = (req: any, res: any, next: any) => {
    passport.authenticate('local', (err: any, user: any, info: any) => {
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
                return res.json({"status": "error", "message": errorMessage});
            }

            // If authentication is successful, generate JWT token or perform other actions
            const token = generateToken(user);
            return res.json({"status": "success", "message": "Login Success", "token": token, "user": user});
        } catch (error) {
             res.json({"status": "error", "message": "Unable to Login"});
        }
    })(req, res, next);
};

export const getUserById = async (req: any, res: any) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {

            return res.json({"status": "error", "message": "User not found"});

        }
        res.json(user);
    } catch (error) {
        res.json({"status": "error", message: 'Internal Server Error'});
    }
};

export const updateUser = async (req: any, res: any) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!user) {
            return res.json({"status": "error", message: 'User not found'});
        }
        res.json(user);
    } catch (error) {
        res.json({"status": "error", message: 'Internal Server Error'});
    }
};

export const deleteUser = async (req: any, res: any) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.json({"status": "error", message: 'User not found'});
        }
        res.json({"status": "success", message: 'User deleted successfully'});
    } catch (error) {
         res.json({"status": "error", message: 'Internal Server Error'});
    }
};

export const logoutUser = async (req: any, res: any) => {
    try {
        const user = await UserModel.findById(req.body.userId);
        if (!user) {

            req.session.destroy((error: any) => {
                if (error) {
                    return res.json({"status": "error", message: 'Error logging out'});
                }
                return res.json({"status": "success", message: 'Logout successful'});

            });
        }

    } catch (error) {
         res.json({"status": "error", message: 'Internal Server Error'});
    }

};