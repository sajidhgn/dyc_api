import {CareerModel} from "../models/career.model";
import {generateToken} from "../middlewares/auth.helper";
import {BlogModel} from "../models/blog.model";

// Banner section
export const Banner = async (req: any, res: any) => {
    try {
        const data = await CareerModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// Collaboration
export const Collaboration = async (req: any, res: any) => {
    try {
        const data = await CareerModel.findByIdAndUpdate(req.params.id, { $set: { collaboration: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// CurrentHiring
export const CurrentHiring = async (req: any, res: any) => {
    try {
        const data = await CareerModel.findByIdAndUpdate(req.params.id, { $set: { current_hiring: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// TotalPerks
export const TotalPerks = async (req: any, res: any) => {
    try {
        const data = await CareerModel.findByIdAndUpdate(req.params.id, { $set: { total_perks: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// Get List
export const CareerData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await CareerModel.find({});
            if (!data) {
                return res.status(404).json({status: 'error', message: 'Data not found'});
            }
            res.status(200).json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: 'Internal Server Error'});
    }
};


// Get Single
export const GetCareer = async (req: any, res: any) => {
    try {
        if (req.body.title) {
            const data = await CareerModel.findOne(
                { 'current_hiring.list.title': req.body.title },
                { 'current_hiring.list.$': 1 }
            );

            if (!data) {
                return res.status(404).json({ status: 'error', message: 'Data not found' });
            }
            res.status(200).json({ status: 'success', message: 'Success', data: data.current_hiring.list[0] });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};