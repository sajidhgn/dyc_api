import {BlogModel} from "../models/blog.model";
import {generateToken} from "../middlewares/auth.helper";

// Banner section
export const Banner = async (req: any, res: any) => {
    try {
        const data = await BlogModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// PortfolioSection
export const BlogSection = async (req: any, res: any) => {
    try {
        const data = await BlogModel.findByIdAndUpdate(req.params.id, { $set: { blog_section: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};


// Get List
export const BlogData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await BlogModel.find({});
            if (!data) {
                return res.status(404).json({status: 'error', message: 'Data not found'});
            }
            res.status(200).json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: 'Internal Server Error'});
    }
};
