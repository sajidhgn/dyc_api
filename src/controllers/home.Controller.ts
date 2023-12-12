import {HomeModel} from "../models/home.model";
import {generateToken} from "../middlewares/auth.helper";


// Banner section
export const Banner = async (req: any, res: any) => {

    try {
        const updatedBanner = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!updatedBanner) {
          return  res.status(404).json({ "status": "error",message: 'Banner not found' });
        }
        res.status(200).json({ "status": "success",message: 'Banner updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// Industry Picker section
export const IndustryPicker = async (req: any, res: any) => {
    try {

        const updatedIndustryPicker = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { industrypickerform: req.body.payload } });

        if (!updatedIndustryPicker) {
            res.status(404).json({"status":"error", message: 'Industry Picker not found' });
            return;
        }
        res.status(200).json({"status":"success", message: 'Industry Picker updated successfully' });
    } catch (error) {

        res.status(500).json({"status":"error", message: 'Internal server error' });
    }
};

// Services section
export const DevelopmentServices = async (req: any, res: any) => {
    try {

        const data = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { development_services: req.body.payload } });

        if (!data) {
            res.status(404).json({"status":"error", message: 'Services not found' });
            return;
        }
        res.status(200).json({"status":"success", message: 'Services updated successfully' });
    } catch (error) {
        console.error('Error updating services:', error);
        res.status(500).json({"status":"error", message: 'Internal server error' });
    }
};

// Industries section
export const IndustriesList = async (req: any, res: any) => {
    try {

        const updatedIndustries = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { industrieslist: req.body.payload } });

        if (!updatedIndustries) {
            res.status(404).json({"status":"error", message: 'Industries not found' });
            return;
        }
        res.status(200).json({"status":"success", message: 'Industries updated successfully' });
    } catch (error) {

        res.status(500).json({"status":"error", message: 'Internal server error' });
    }
};

export const QuotationContent = async (req: any, res: any) => {
    try {

        const updatedIndustries = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { quotation: req.body.payload } });

        if (!updatedIndustries) {
            res.status(404).json({"status":"error", message: 'Industries not found' });
            return;
        }
        res.status(200).json({"status":"success", message: 'Industries updated successfully' });
    } catch (error) {

        res.status(500).json({"status":"error", message: 'Internal server error' });
    }
};

export const ExperienceWorld = async (req: any, res: any) => {
    try {

        const updatedIndustries = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { experienceworld: req.body.payload } });

        if (!updatedIndustries) {
            res.status(404).json({"status":"error", message: 'Industries not found' });
            return;
        }
        res.status(200).json({"status":"success", message: 'Industries updated successfully' });
    } catch (error) {

        res.status(500).json({"status":"error", message: 'Internal server error' });
    }
};

export const EngagementModel = async (req: any, res: any) => {
    try {

        const updatedIndustries = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { engagementmodel: req.body.payload } });

        if (!updatedIndustries) {
            res.status(404).json({"status":"error", message: 'Industries not found' });
            return;
        }
        res.status(200).json({"status":"success", message: 'Industries updated successfully' });
    } catch (error) {

        res.status(500).json({"status":"error", message: 'Internal server error' });
    }
};

export const PortfolioSection = async (req: any, res: any) => {
    try {

        const updatedIndustries = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { portfolio_section: req.body.payload } });

        if (!updatedIndustries) {
            res.status(404).json({"status":"error", message: 'Data not found' });
            return;
        }
        res.status(200).json({"status":"success", message: 'Data updated successfully' });
    } catch (error) {

        res.status(500).json({"status":"error", message: 'Internal server error' });
    }
};


// Get Home
export const homeData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await HomeModel.find({});
            if (!data) {
                return res.json({status: 'error', message: 'Data not found'});
            }
            res.json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.json({status: 'error', message: 'Internal Server Error'});
    }
};
