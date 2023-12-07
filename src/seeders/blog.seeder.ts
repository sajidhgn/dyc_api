// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {BlogModel} from "../models/blog.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "title",
        description: "description",
        img: "img link",
    },
    blog_section: {
        list: [
            {
                title: "blog 1",
                img: "img link",
                video: "video link",
                category: "category",
                author: "author",
                posted_date: "date",
                short_description: "short description",
                long_description: "long description",
            },
            {
                title: "blog 1",
                img: "img link",
                video: "video link",
                category: "category",
                author: "author",
                posted_date: "date",
                short_description: "short description",
                long_description: "long description",
            },
            {
                title: "blog 1",
                img: "img link",
                video: "video link",
                category: "category",
                author: "author",
                posted_date: "date",
                short_description: "short description",
                long_description: "long description",
            }
        ]
    }

};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await BlogModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await BlogModel.create(sampleData);

        console.log('blogs seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();