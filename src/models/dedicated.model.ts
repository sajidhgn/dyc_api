import mongoose, {Schema, Document} from 'mongoose';

const DedicatedpageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        btnLink: {type: String, required: true},
        img: {type: String, required: true},

    },

    advantages: {
        title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},

            }
        ]
    },
    team: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
        list: [
            {
                description: {type: String, required: true},
            }
        ]
    },
    features: {
        title: {type: String, required: true},
        list: [
            {
                description: {type: String, required: true},
            }
        ]
    },
    technologies: {
        title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
            }
        ]
    }
}, {timestamps: true});

export const DedicatedModel = mongoose.model('dedicatedpage', DedicatedpageSchema);