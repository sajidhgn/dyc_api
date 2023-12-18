import mongoose, {Schema, Document} from 'mongoose';

const PortfoliopageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
    },
    portfolio_section: {
        list: [
            {
                title: {type: String, required: true, unique:true},
                img: {type: String, required: true},
                description: {type: String, required: true},
                video: {type: String},
                technologies: {
                    list:[
                        {
                            icon:{type: String, required: true},
                            title:{type: String, required: true},
                        }

                    ]
                },
                introduction: {
                    content: {type: String, required: true},
                    style: {type: String}
                },
                content_section:[
                    {
                        title:{type: String, required: true},
                        img:{type: String, required: true}
                    }
                ]
            }
        ]
    }
}, {timestamps: true});

export const PortfolioModel = mongoose.model('portfoliopage', PortfoliopageSchema);