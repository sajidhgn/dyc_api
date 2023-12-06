import {AboutModel} from "../models/about.model";
import {generateToken} from "../middlewares/auth.helper";

// Banner section
export const Banner = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// Banner Slider
export const BannerSlider = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { banner_slider: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};


// About section
export const AboutSection = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { about_section: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// Leadership section
export const LeaderShip = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { leadership: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// Leadership section
export const CustomizeSolution = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { customize_solution: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// Company History section
export const CompanyHistory = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { company_history: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// AwesomeSection section
export const AwesomeSection = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { awesome_section: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// PorfolioNumbers section
export const PortfolioNumbers = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { portfolio_numbers: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// ManagementReviews section
export const ManagementReviews = async (req: any, res: any) => {
    try {
        const data = await AboutModel.findByIdAndUpdate(req.params.id, { $set: { management_reviews: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};


// Get List
export const AboutData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await AboutModel.find({});
            if (!data) {
                return res.status(404).json({status: 'error', message: 'Data not found'});
            }
            res.status(200).json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: 'Internal Server Error'});
    }
};
