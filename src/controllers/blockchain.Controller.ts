import {BlockchainModel} from "../models/blockchain.model";
import {generateToken} from "../middlewares/auth.helper";

// Banner section
export const Banner = async (req: any, res: any) => {
    try {
        const data = await BlockchainModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// WhyChooseUs
export const WhyChooseUs = async (req: any, res: any) => {
    try {
        const data = await BlockchainModel.findByIdAndUpdate(req.params.id, { $set: { whychooseus: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};


// Benefits
export const Benefits = async (req: any, res: any) => {
    try {
        const data = await BlockchainModel.findByIdAndUpdate(req.params.id, { $set: { benefits: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};



// Features
export const Features = async (req: any, res: any) => {
    try {
        const data = await BlockchainModel.findByIdAndUpdate(req.params.id, { $set: { features: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// Get List
export const BlockchainData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await BlockchainModel.find({});
            if (!data) {
                return res.status(404).json({status: 'error', message: 'Data not found'});
            }
            res.status(200).json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: 'Internal Server Error'});
    }
};
