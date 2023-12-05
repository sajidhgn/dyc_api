import {ServicesModel} from "../models/services.model";
import {generateToken} from "../middlewares/auth.helper";


// Banner section
export const Banner = async (req: any, res: any) => {

    try {
        const updatedBanner = await ServicesModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

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
        const updatedBanner = await ServicesModel.findByIdAndUpdate(req.params.id, { $set: { banner_lower: req.body.payload } });

        if (!updatedBanner) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Other Services section
export const OtherServices = async (req: any, res: any) => {

    try {
        const data = await ServicesModel.findByIdAndUpdate(req.params.id, { $set: { other_services: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};


// Dynamic Factors section
export const DynamicFactors = async (req: any, res: any) => {

    try {
        const data = await ServicesModel.findByIdAndUpdate(req.params.id, { $set: { dynamic_factors: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Structure Overflow section
export const StructureOverflow = async (req: any, res: any) => {

    try {
        const data = await ServicesModel.findByIdAndUpdate(req.params.id, { $set: { structure_overflow: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};
// Road Map section
export const RoadMap = async (req: any, res: any) => {

    try {
        const data = await ServicesModel.findByIdAndUpdate(req.params.id, { $set: { road_map: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Team section
export const Team = async (req: any, res: any) => {

    try {
        const data = await ServicesModel.findByIdAndUpdate(req.params.id, { $set: { team: req.body.payload } });

        if (!data) {
            return  res.json({ "status": "error",message: 'Data not found' });
        }
        res.json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.json({ "status": "error", message: 'Internal server error' });
    }
};

// Favorities List section
export const FavoritiesList = async (req: any, res: any) => {

    try {
        const data = await ServicesModel.findByIdAndUpdate(req.params.id, { $set: { favorities_list: req.body.payload } });

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
            const data = await ServicesModel.find({});
            if (!data) {
                return res.json({status: 'error', message: 'Data not found'});
            }
            res.json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.json({status: 'error', message: 'Internal Server Error'});
    }
};
