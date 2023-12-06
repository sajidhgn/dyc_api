// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {IndustryModel} from "../models/industry.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "demo title",
        description: "lorem ipsum data",
        btnLink: "/",
        banner_img: "img link",
    },
    banner_lower: {
        content: "html",
        style: "css"
    },
    other_industries: {
        content: "html",
        style: "css"
    },

    solutions: {
        title: "title",
        img: "img link",
        list: [
            {
                title: "title",
                description: "description"
            },
            {
                title: "title",
                description: "description"
            }, {
                title: "title",
                description: "description"
            }
        ]
    },
    ready_next: {
        content: "html",
        style: "css"
    },

    specialized_team: {
        title: "title",
        list: [
            {
                icon: "icon link",
                title: "title",
                description: "text",
                btnLink: "btn link",
                btnText: "btn text"
            },
            {
                icon: "icon link",
                title: "title",
                description: "text",
                btnLink: "btn link",
                btnText: "btn text"
            }, {
                icon: "icon link",
                title: "title",
                description: "text",
                btnLink: "btn link",
                btnText: "btn text"
            }
        ]
    },

    standout_section: {
        title: "title",
        list: [
            {
                title: "title",
                description: "description"
            }, {
                title: "title",
                description: "description"
            }, {
                title: "title",
                description: "description"
            }, {
                title: "title",
                description: "description"
            }
        ]
    }
}
// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await IndustryModel.deleteMany({});

        // Insert new data
        await IndustryModel.create(sampleData);

        console.log('industry seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();