// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {HomeModel} from "../models/home.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "demo title",
        description: "lorem ipsum data",
        btnLink: "/"
    },
    banner_slider: [
        {
            title: "demo title1",
            description: "lorem description"
        },{
            title: "demo title2",
            description: "lorem description"
        },{
            title: "demo title3",
            description: "lorem description"
        },{
            title: "demo title3",
            description: "lorem description"
        }
    ],
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

    porfolio_numbers: [
        {
            title: {type: String, required: true},
            subTitle: {type: String, required: true}
        }
    ],

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
};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await HomeModel.deleteMany({});

        // Insert new data
        await HomeModel.create(sampleData);

        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();