import mongoose, {Schema, Document} from 'mongoose';

const GamepageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
        btnLink: {type: String, required: true},
    },

    whychooseus: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true}
    },

    features: {
        title: {type: String, required: true},
        list: [
            {
                title: {type: String, required: true},
                icon: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    },
    discussion: {
        content: {type: String, required: true},
        style: {type: String}
    },
    whyhireus: {
        title: {type: String, required: true},
        img: {type: String, required: true},
        list: [
            {
                title: {type: String, required: true},
                icon: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    },
    technologies: {
        title: {type: String, required: true},
        list: [
            {
                title: {type: String, required: true},
                icon: {type: String, required: true}
            }
        ]
    },

}, {timestamps: true});

export const GameModel = mongoose.model('gamepage', GamepageSchema);