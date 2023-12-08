import mongoose, {Schema, Document} from 'mongoose';

const BlockchainpageSchema: Schema = new Schema({
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        btnLink: {type: String, required: true},
        img: {type: String, required: true}
    },

    whychooseus: {
        content: {type: String, required: true},
        style: {type: String}
    },

    benefits: {
        title: {type: String, required: true},
        list: [
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    },
    features: {

        list: [
            {
                img: {type: String, required: true},
                title: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    },
    case_studies: {
        title: {type: String, required: true},
        list: [
            {
                img: {type: String, required: true},
                title: {type: String, required: true},
                short_description: {type: String, required: true},
                long_description: {type: String, required: true},
                technologies: [
                        {
                            title:{type: String, required: true},
                        }
                ]
            }
        ]
    },
    team:{
        title: {type: String, required: true},
        list:[
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
            }
        ]
    },
    technologies:{
        title: {type: String, required: true},
        list:[
            {
                icon: {type: String, required: true},
                title: {type: String, required: true},
            }
        ]
    }
}, {timestamps: true});

export const BlockchainModel = mongoose.model('blockchainpage', BlockchainpageSchema);