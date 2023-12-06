// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {ServicesModel} from "../models/services.model";

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
    other_services: {
        content: "html",
        style: "css"
    },
    experienceworld: {
        content: "html",
        style: "css"
    },
    dynamic_factors: {
        title: "demo title",
        tabList: [
            {
                icon: "icon link",
                title: "title",
                description: "description",
                btnlink: "/",
            }, {
                icon: "icon link",
                title: "title",
                description: "description",
                btnlink: "/",
            },
            {
                icon: "icon link",
                title: "title",
                description: "description",
                btnlink: "/",
            }
        ]
    },
    structure_overflow: {
        title: "title",
        list: [
            {
                icon: "icon link",
                title: "title",
                description: "description"
            }, {
                icon: "icon link",
                title: "title",
                description: "description"
            }, {
                icon: "icon link",
                title: "title",
                description: "description"
            }
        ]
    },
    road_map: {
        content: "html",
        style: "css"
    },
    team: {
        title: "title",
        sub_title: "sub title",
        list: [
            {
                icon: "icon link",
                title: "title"
            }, {
                icon: "icon link",
                title: "title"
            }, {
                icon: "icon link",
                title: "title"
            }
        ]
    },
    favorities_list: {
        title: "title",
        list: [
            {
                icon: "icon link",
                title: "title"
            }, {
                icon: "icon link",
                title: "title"
            }, {
                icon: "icon link",
                title: "title"
            }
        ]
    }
}
// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await ServicesModel.deleteMany({});

        // Insert new data
        await ServicesModel.create(sampleData);

        console.log('services seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();