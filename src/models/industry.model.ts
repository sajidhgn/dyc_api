import mongoose, {Schema, Document} from 'mongoose';

const IndustrypageSchema: Schema = new Schema({
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
    other_industries: {
        content: {type: String, required: true},
        style: {type: String, required: true}
    },
    solutions: {
        title: {type: String, required: true},
        img: {type: String, required: true},
        list: [
            {
                title: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    },
    ready_next: {
        content: {type: String, required: true},
        style: {type: String, required: true}
    },

    specialized_team: {
        title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
                description: {type: String, required: true},
                btnLink: {type: String, required: true},
                btnText: {type: String, required: true}
            }
        ]
    },

    standout_section: {
        title: {type: String, required: true},
        list: [
            {
                title: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    }

}, {timestamps: true});
export const IndustryModel = mongoose.model('industrypage', IndustrypageSchema);