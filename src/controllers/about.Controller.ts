import {AboutModel} from "../models/about.model";
import {generateToken} from "../middlewares/auth.helper";


// Banner section
export const Banner = async (req: any, res: any) => {

    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Get List
export const ServicesData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await AboutModel.find({});
            if (!data) {
                return res.json({status: 'error', message: 'Data not found'});
            }
            res.json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.json({status: 'error', message: 'Internal Server Error'});
    }
};
