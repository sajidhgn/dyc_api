// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {BlockchainModel} from "../models/blockchain.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "title",
        description: "description",
        btnLink: "/",
        img: "img link"
    },

    whychooseus: {
        content: "html",
        style: "css"
    },

    benefits: {
        title: "titel",
        list: [
            {
                icon: "icon or image",
                title: "title",
                description: "description"
            },
            {
                icon: "icon or image",
                title: "title",
                description: "description"
            },
            {
                icon: "icon or image",
                title: "title",
                description: "description"
            }
        ]
    },
    features: {

        list: [
            {
                img: "img link",
                title: "title",
                description: "description"
            },
            {
                img: "img link",
                title: "title",
                description: "description"
            },
            {
                img: "img link",
                title: "title",
                description: "description"
            }
        ]
    },
    case_studies: {
        title: "title",
        list: [
            {
                img: "img link",
                title: "title",
                short_description: "description",
                long_description: "description",
                technologies: {
                    list:[
                        {
                            title:"Nodejs",
                        },
                        {
                            title:"React",
                        }
                    ]
                }
            }
        ]
    },
    team:{
        title: "title",
        list:[
            {
                icon: "iocn or miage",
                title: "title",
            }
        ]
    },
    technologies:{
        title: "title",
        list:[
            {
                icon: "icon or image",
                title: "Nodejs",
            },
            {
                icon: "icon or image",
                title: "Nodejs",
            }
        ]
    }

};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await BlockchainModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await BlockchainModel.create(sampleData);

        console.log('blockchain seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();