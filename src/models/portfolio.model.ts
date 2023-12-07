import mongoose, {Schema, Document} from 'mongoose';

const PortfoliopageSchema: Schema = new Schema({
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
    },
    portfolio_section: {
        list: [
            {
                title: {type: String, required: true},
                img: {type: String, required: true},
                video: {type: String},
                category: {type: String, required: true},
                author: {type: String, required: true},
                posted_date: {type: String, required: true},
                short_description: {type: String, required: true},
                long_description: {type: String, required: true}
            }
        ]
    }
}, {timestamps: true});

export const PortfolioModel = mongoose.model('portfoliopage', PortfoliopageSchema);