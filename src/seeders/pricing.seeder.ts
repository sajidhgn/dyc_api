// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {PricingModel} from "../models/pricing.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "title",
        description: "title",
        img: "img link",
    },

    pricing_section: {
        title: "title optional",
        list: [
            {
                title: "title",
                icon: "icon or img link",
                description: "description",
                btnLink: "btn link",
                featured: false,
                category: "basic, standard, enterprize",
            }
        ]
    },
    testimonials: {
        title: "title",
        list: [
            {
                name: "john",
                designation: "Manager",
                img: "profile link",
                description: "lorem description"
            },
            {
                name: "john",
                designation: "Manager",
                img: "profile link",
                description: "lorem description"
            },{
                name: "john",
                designation: "Manager",
                img: "profile link",
                description: "lorem description"
            }
        ]
    }
};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await PricingModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await PricingModel.create(sampleData);

        console.log('contact seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();