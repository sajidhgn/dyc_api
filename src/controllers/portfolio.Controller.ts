import {PortfolioModel} from "../models/portfolio.model";
import {generateToken} from "../middlewares/auth.helper";
import {BlogModel} from "../models/blog.model";
import {CareerModel} from "../models/career.model";

// Banner section
export const Banner = async (req: any, res: any) => {
    try {
        const data = await PortfolioModel.findByIdAndUpdate(req.params.id, { $set: { banner: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};

// PortfolioSection
export const PortfolioSection = async (req: any, res: any) => {
    try {
        const data = await PortfolioModel.findByIdAndUpdate(req.params.id, { $set: { portfolio_section: req.body.payload } });

        if (!data) {
            return  res.status(404).json({ "status": "error",message: 'Data not found' });
        }
        res.status(200).json({ "status": "success",message: 'Data updated successfully'});
    } catch (error) {

        res.status(500).json({ "status": "error", message: 'Internal server error' });
    }
};


// Get List
export const PortfolioData = async (req: any, res: any) => {
    try {
        if(req.body.list){
            const data = await PortfolioModel.find({});
            if (!data) {
                return res.status(404).json({status: 'error', message: 'Data not found'});
            }
            res.status(200).json({status: 'success', message: 'Success', data: data});
        }
    } catch (error) {
        res.status(500).json({status: 'error', message: 'Internal Server Error'});
    }
};

export const GetPortfolio = async (req: any, res: any) => {
    try {
        if (req.body.title) {
            const data = await PortfolioModel.findOne(
                { 'portfolio_section.list.title': req.body.title },
                { 'portfolio_section.list.$': 1 }
            );

            if (!data) {
                return res.status(404).json({ status: 'error', message: 'Data not found' });
            }
            res.status(200).json({ status: 'success', message: 'Success', data: data.portfolio_section.list[0] });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
};