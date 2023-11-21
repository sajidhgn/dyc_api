import mongoose, {Schema, Document} from 'mongoose';
import {bcryptPassword} from "../middlewares/auth.helper";
export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    phone: string;
    role: string;
}

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    },
}, {timestamps: true});

// Password hash function
UserSchema.pre('save', async function (next) {
    const user = this;
    try {
        const hashedPassword = await bcryptPassword(user.password);
        user.password = hashedPassword;
        next();
    } catch (error:any) {
        return next(error);
    }
});
export const UserModel = mongoose.model<IUser>('users', UserSchema);
