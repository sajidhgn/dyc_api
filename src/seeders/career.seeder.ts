// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {CareerModel} from "../models/career.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    meta_tags:{
        metaTitle: "Careers at DyCoders | Explore Opportunities",
        slug: "https://dycoders.com/careers",
        MetaDescription: "Transform your vision into reality with our digital development expertise. From mobile apps to UX/UI and software scaling, we make it happen.",
    },
    banner: {
        title: "Explore <span class='text-primarys'>Opportunities</span>!",
        description: "Join a DyCoders team where innovation thrives. Discover roles that challenge and inspire. Grow personally and professionally in an inclusive environment. Embrace diverse projects and make a tangible impact. Your journey starts here with us!",
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
                customId: "title2",
                posted_date: "posted date",
                category: "Development",
                experience: "experience",
                gender: "male",
                qualification: "qualification",
                job_description: "description",
                responsibilities: "responsibilities",
                requirements: "requirements",
                job_skills: ["html","css","javascript"],
            },
            {
                customId: "title1",
                posted_date: "posted date",
                category: "Designing",
                experience: "experience",
                gender: "female",
                qualification: "qualification",
                job_description: "description",
                responsibilities: "responsibilities",
                requirements: "requirements",
                job_skills: ["html","css","javascript"],
            },  {
                customId: "title3",
                posted_date: "posted date",
                category: "Human Resources",
                experience: "experience",
                gender: "male",
                qualification: "qualification",
                job_description: "description",
                responsibilities: "responsibilities",
                requirements: "requirements",
                job_skills: ["html","css","javascript"],
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