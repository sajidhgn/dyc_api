import {IndustryModel} from "../models/industry.model";
import {generateToken} from "../middlewares/auth.helper";


// Banner section
export const Banner = async (req: any, res: any) => {

    try {
        const updatedBanner = await IndustryModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!updatedBanner) {
            return  res.json({ "status": "error",message: 'Banner not found' });
        }
        res.json({ "status": "success",message: 'Banner updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Banner Lower section
export const BannerLower = async (req: any, res: any) => {

    try {
        const data = await IndustryModel.findByIdAndUpdate(req.params.id, { $set: { banner_lower: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Other Industries
export const OtherIndustries = async (req: any, res: any) => {

    try {
        const data = await IndustryModel.findByIdAndUpdate(req.params.id, { $set: { other_industries: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Solutions section
export const Solutions = async (req: any, res: any) => {

    try {
        const data = await IndustryModel.findByIdAndUpdate(req.params.id, { $set: { solutions: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// ReadyNext section
export const ReadyNext = async (req: any, res: any) => {

    try {
        const data = await IndustryModel.findByIdAndUpdate(req.params.id, { $set: { ready_next: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// SpecializedTeam section
export const SpecializedTeam = async (req: any, res: any) => {

    try {
        const data = await IndustryModel.findByIdAndUpdate(req.params.id, { $set: { specialized_team: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};


// StandoutSection section
export const StandoutSection = async (req: any, res: any) => {

    try {
        const data = await IndustryModel.findByIdAndUpdate(req.params.id, { $set: { standout_section: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};


// Get List
export const IndustriesData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await IndustryModel.find({});
            if (!data) {
                return res.json({status: 'error', message: 'Data not found'});
            }
            res.json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.json({status: 'error', message: 'Internal Server Error'});
    }
};
