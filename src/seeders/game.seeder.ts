// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {GameModel} from "../models/game.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "title",
        description: "description",
        img: "img link",
        btnLink: "btn link",
    },

    whychooseus: {
        title: "title",
        description: "description",
        img: "img link",
    },

    features: {
        title: "title",
        list: [
            {
                title: "title",
                icon: "icon or image",
                description: "description",
            },
            {
                title: "title",
                icon: "icon or image",
                description: "description",
            },
            {
                title: "title",
                icon: "icon or image",
                description: "description",
            }
        ]
    },
    discussion: {
        content: "html",
        style: "css"
    },
    whyhireus: {
        title: "title",
        img: "img link",
        list: [
            {
                title: "title",
                icon: "icon or image",
                description: "description",
            },
            {
                title: "title",
                icon: "icon or image",
                description: "description",
            },
            {
                title: "title",
                icon: "icon or image",
                description: "description",
            }
        ]
    },
    technologies: {
        title: "title",
        list: [
            {
                title: "title",
                icon: "icon or image"
            },
            {
                title: "title",
                icon: "icon or image"
            },
            {
                title: "title",
                icon: "icon or image"
            }
        ]
    },
}

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await GameModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await GameModel.create(sampleData);

        console.log('game page seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();