import mongoose, {Schema, Document} from 'mongoose';

const ContactpageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        list:[
            {
                icon: {type: String, required: true},
                contact: {type: String, required: true},
                subtitle: {type: String, required: true},
            }
        ]
    },

    longterm_partnership: {
        title: {type: String, required: true},
        list: [
            {
                title: {type: String, required: true},
                subTitle: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    }
}, {timestamps: true});

export const ContactModel = mongoose.model('contactpage', ContactpageSchema);