import mongoose, {Schema, Document} from 'mongoose';

const AboutpageSchema: Schema = new Schema({
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        btnLink: {type: String, required: true}
    },
    banner_slider: {
        list:[
            {
                title: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    },
    about_section: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        btnLink: {type: String, required: true},
        img: {type: String, required: true},
        videoLink: {type: String},
    },
    leadership: {
        title: {type: String, required: true},
        list: [
            {
                img: {type: String, required: true},
                title: {type: String, required: true},
                subTitle: {type: String, required: true},
                socialIcons: [
                    {
                        icon: {type: String, required: true},
                        iconLink: {type: String, required: true}
                    }
                ]
            }
        ]
    },
    customize_solution: {
        content: {type: String, required: true},
        style: {type: String}
    },
    company_history: {
        content: {type: String, required: true},
        style: {type: String}
    },


    awesome_section: {
        title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    },

    porfolio_numbers: {
        list:[
            {
                title: {type: String, required: true},
                subTitle: {type: String, required: true}
            }
        ]
    },

    management_reviews: {
        title: {type: String, required: true},
        list: [
            {
                img: {type: String, required: true},
                title: {type: String, required: true},
                subTitle: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    }
}, {timestamps: true});

export const AboutModel = mongoose.model('aboutpage', AboutpageSchema);