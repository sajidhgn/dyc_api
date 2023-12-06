// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {CareerModel} from "../models/career.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "title",
        description: "description",
        img: "img link"
    },
    collaboration: {
        content: "html",
        style: "css"
    },
    current_hiring: {
        title: "title",
        list: [
            {
                title: "title",
                posted_date: "posted date",
                category: "category",
                experience: "experience",
                gender: "gender",
                qualification: "qualification",
                job_description: "description",
                responsibilities: "responsibilities",
                requirements: "requirements",
                job_skills: [
                    {
                        title: "one"
                    },
                    {
                        title: "one"
                    },
                    {
                        title: "one"
                    }
                ],
            },
            {
                title: "title",
                posted_date: "posted date",
                category: "category",
                experience: "experience",
                gender: "gender",
                qualification: "qualification",
                job_description: "description",
                responsibilities: "responsibilities",
                requirements: "requirements",
                job_skills: [
                    {
                        title: "one"
                    },
                    {
                        title: "one"
                    },
                    {
                        title: "one"
                    }
                ],
            },  {
                title: "title",
                posted_date: "posted date",
                category: "category",
                experience: "experience",
                gender: "gender",
                qualification: "qualification",
                job_description: "description",
                responsibilities: "responsibilities",
                requirements: "requirements",
                job_skills: [
                    {
                        title: "one"
                    },
                    {
                        title: "one"
                    },
                    {
                        title: "one"
                    }
                ],
            }
        ]
    },
    total_perks: {
        title: "title",
        list: [
            {
                icon: "image icon",
                title: "title",
            },{
                icon: "image icon",
                title: "title",
            }, {
                icon: "image icon",
                title: "title",
            },{
                icon: "image icon",
                title: "title",
            }
        ]
    }

};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await CareerModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await CareerModel.create(sampleData);

        console.log('career seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();