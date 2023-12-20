// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {PortfolioModel} from "../models/portfolio.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "title",
        description: "description",
        img: "img link",
    },
    portfolio_section: {
        list: [
            {
                title: "title",
                img: "img link",
                video: "video optional",
                description: "description",
                technologies: [

                        {
                            icon:"img or icon",
                            title:"title",
                        },
                        {
                            icon:"img or icon",
                            title:"title",
                        },
                        {
                            icon:"img or icon",
                            title:"title",
                        }
                        ],

                introduction: {
                    content: "html",
                    style: "css"
                },
                content_section:[
                    {
                        title:"title",
                        img:"img link"
                    },
                    {
                        title:"title",
                        img:"img link"
                    },
                    {
                        title:"title",
                        img:"img link"
                    }
                ]
            }
        ]
    }

};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await PortfolioModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await PortfolioModel.create(sampleData);

        console.log('portfolios seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();