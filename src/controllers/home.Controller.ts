import {HomeModel} from "../models/home.model";
import {generateToken} from "../middlewares/auth.helper";


// Banner section
export const Banner = async (req: any, res: any) => {

    try {
        const updatedBanner = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!updatedBanner) {
          return  res.json({ "status": "error",message: 'Banner not found' });
        }
        res.json({ "status": "success",message: 'Banner updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Industry Picker section
export const IndustryPicker = async (req: any, res: any) => {
    try {

        const updatedIndustryPicker = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { industrypickerform: req.body } });

        if (!updatedIndustryPicker) {
            res.status(404).json({ message: 'Industry Picker not found' });
            return;
        }
        res.status(200).json({ message: 'Industry Picker updated successfully', updatedIndustryPicker });
    } catch (error) {
        console.error('Error updating industry picker:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Services section
export const DevelopmentServices = async (req: any, res: any) => {
    try {

        const updatedServices = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { development_services: req.body } });

        if (!updatedServices) {
            res.status(404).json({ message: 'Services not found' });
            return;
        }
        res.status(200).json({ message: 'Services updated successfully', updatedServices });
    } catch (error) {
        console.error('Error updating services:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Industries section
export const IndustriesList = async (req: any, res: any) => {
    try {

        const updatedIndustries = await HomeModel.findByIdAndUpdate(req.params.id, { $set: { industrieslist: req.body } });

        if (!updatedIndustries) {
            res.status(404).json({ message: 'Industries not found' });
            return;
        }
        res.status(200).json({ message: 'Industries updated successfully', updatedIndustries });
    } catch (error) {
        console.error('Error updating industries:', error);
        res.status(500).json({ message: 'Internal server error' });
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
