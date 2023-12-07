// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {DedicatedModel} from "../models/dedicated.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "title",
        description: "description",
        btnLink: "/",
        img: "img link",

    },

    advantages: {
        title: "title",
        list: [
            {
                icon: "img or icon",
                title: "title",

            }
        ]
    },
    team: {
        title: "title",
        description: "description",
        img: "img link",
        list: [
            {
                description: "description",
            }
        ]
    },
    features: {
        title: "title",
        list: [
            {
                description: "description",
            }
        ]
    },
    technologies: {
        title: "titel",
        list: [
            {
                icon: "img or icon",
                title: "title"
            }
        ]
    }

};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await DedicatedModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await DedicatedModel.create(sampleData);

        console.log('dedicated page seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();