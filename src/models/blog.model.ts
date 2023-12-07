import mongoose, {Schema, Document} from 'mongoose';

const BlogpageSchema: Schema = new Schema({
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
    },
    blog_section: {
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

export const BlogModel = mongoose.model('blogpage', BlogpageSchema);