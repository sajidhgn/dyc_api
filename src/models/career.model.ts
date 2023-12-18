import mongoose, {Schema, Document} from 'mongoose';

const CareerpageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true}
    },
    collaboration: {
        content: {type: String, required: true},
        style: {type: String}
    },
    current_hiring: {
        title: {type: String, required: true},
        list: [
            {
                title: {
                    type: String,
                    unique: true,
                    required: true,
                },
                posted_date: {type: String, required: true},
                category: {type: String, required: true, enum: ["Development", "Designing", "Quality Assurance", "Human Resources", "Business Development"]},
                experience: {type: String, required: true},
                gender: {type: String, required: true, enum: ["male", "female"]},
                qualification: {type: String, required: true},
                job_description: {type: String, required: true},
                responsibilities: {type: String, required: true},
                requirements: {type: String, required: true},
                job_skills: [],
            }
        ]
    },
    total_perks: {
        title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
            }
        ]
    }
}, {timestamps: true});

export const CareerModel = mongoose.model('careerpage', CareerpageSchema);