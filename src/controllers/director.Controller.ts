import {DirectorModel} from "../models/director.model";

// Banner section
export const Banner = async (req: any, res: any) => {
    try {
        const data = await DirectorModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// LongTermPartnership
export const DirectorMessage = async (req: any, res: any) => {
    try {
        const data = await DirectorModel.findByIdAndUpdate(req.params.id, { $set: { director_message: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

export const InnovateList = async (req: any, res: any) => {
    try {
        const data = await DirectorModel.findByIdAndUpdate(req.params.id, { $set: { innovate_list: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};
export const PeopleSays = async (req: any, res: any) => {
    try {
        const data = await DirectorModel.findByIdAndUpdate(req.params.id, { $set: { people_says: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};


// Get List
export const DirectorData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await DirectorModel.find({});
            if (!data) {
                return res.status(404).json({status: 'error', message: 'Data not found'});
            }
            res.status(200).json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: 'Internal Server Error'});
    }
};
