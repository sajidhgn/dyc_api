import mongoose, {Schema, Document} from 'mongoose';

const HomepageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },
    banner: {
        bannervideo: {type: String, required: true},
        bannervideoposter: {type: String, required: true},
        bannerslider: [
            {
                title: {type: String, required: true},
                estimatebtnlink: {type: String, required: true},
                casestudybtnlink: {type: String, required: true},
                logoimg: {type: String, required: true}
            }
        ]
    },
    industrypickerform: {
        industrypicker_title: {type: String, required: true},
        industrypicker_description: {type: String, required: true},
        // industrypicker: [
        //     {
        //         title: {type: String, required: true}
        //     }
        // ],
        businesspicker: [
            {
                title: {type: String, required: true}
            }
        ]
    },
    experienceworld: {
        content: {type: String, required: true},
        style: {type: String}
    },
    quotation: {
        content: {type: String, required: true},
        style: {type: String}
    },
    development_services: {
        title: {type: String, required: true},
        tabList: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
                description: {type: String, required: true},
                btnlink: {type: String, required: true},
                iconList: [
                    {
                        icon: {type: String, required: true}
                    }
                ]
            }
        ]
    },
    industrieslist: {
        title: {type: String, required: true},
        industries: [
            {
                title: {type: String, required: true},
                icon: {type: String, required: true},
                description: {type: String, required: true},
                btnlink: {type: String, required: true},
                imgsList:[
                    {
                        img: {type: String, required: true}
                    }
                ]
            }
        ]
    },
    portfolio_section: {
        heading: {type: String, required: true},
        portfolios: [
            {
                title: {type: String, required: true},
                description: {type: String, required: true},
                btnlink: {type: String, required: true},
                img: {type: String, required: true},
                logoimg: {type: String, required: true}
            }
        ]
    },
    engagementmodel: {
        content: {type: String, required: true},
        style: {type: String}
    },
}, {timestamps: true});

export const HomeModel = mongoose.model('homepage', HomepageSchema);