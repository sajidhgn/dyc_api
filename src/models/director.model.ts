import mongoose, {Schema, Document} from 'mongoose';

const DirectorpageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },

    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        background_img: {type: String, required: true},
        featured_img:{type: String},
    },
    director_message: {
        content: {type: String, required: true}
    },
    innovate_list: {
        title: {type: String, required: true},
        list: [
            {
                title: {type: String, required: true},
                challenge: {type: String, required: true},
                quote_content: {type: String, required: true},
                help_title: {type: String, required: true},
                help_list:[
                    {
                        title: {type: String, required: true},
                        description: {type: String, required: true},
                        help_link: {type: String, required: true},
                    }
                ]
            }
        ]

    },
    people_says: {
        title: {type: String, required: true},
        reviews_list:[
            {
                title: {type: String, required: true},
                description: {type: String, required: true},
                story_link: {type: String},
                story_img: {type: String, required: true},
                story_video: {type: String},
            }
        ]
    }
}, {timestamps: true});

export const DirectorModel = mongoose.model('directorpage', DirectorpageSchema);