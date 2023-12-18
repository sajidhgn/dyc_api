import mongoose, {Schema, Document} from 'mongoose';

const BlogpageSchema: Schema = new Schema({
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
    blog_section: {
        list: [
            {
                _id: false,
                customId: {
                    type: String,
                    unique: true,
                    required: true,
                },
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

export const BlogModel = mongoose.model('blogpage', BlogpageSchema);