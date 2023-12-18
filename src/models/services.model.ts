import mongoose, {Schema, Document} from 'mongoose';

const ServicepageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        btnLink: {type: String, required: true},
        banner_img: {type: String, required: true},
    },
    banner_lower: {
        content: {type: String, required: true},
        style: {type: String, required: true}
    },
    other_services: {
        content: {type: String, required: true},
        style: {type: String, required: true}
    },
    experienceworld: {
        content: {type: String, required: true},
        style: {type: String, required: true}
    },
    dynamic_factors: {
        title: {type: String, required: true},
        tabList: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
                description: {type: String, required: true},
                btnlink: {type: String, required: true},
            }
        ]
    },
    structure_overflow: {
        title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    },
    road_map: {
        content: {type: String, required: true},
        style: {type: String}
    },
    team: {
        title: {type: String, required: true},
        sub_title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true}
            }
        ]
    },
    favorities_list: {
        title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true}
            }
        ]
    },

}, {timestamps: true});
export const ServicesModel = mongoose.model('servicepage', ServicepageSchema);