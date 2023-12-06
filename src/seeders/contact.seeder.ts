// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {ContactModel} from "../models/contact.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "title",
        description: "description",
        list:[
            {
                icon: "icon link",
                contact: "contact email/phone",
                subtitle: "sub title",
            }, {
                icon: "icon link",
                contact: "contact email/phone",
                subtitle: "sub title",
            }, {
                icon: "icon link",
                contact: "contact email/phone",
                subtitle: "sub title",
            }
        ]
    },

    longterm_partnership: {
        title: "title",
        list: [
            {
                title: "title",
                subTitle: "sub title",
                description: "description"
            }, {
                title: "title",
                subTitle: "sub title",
                description: "description"
            }, {
                title: "title",
                subTitle: "sub title",
                description: "description"
            }
        ]
    }

};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await ContactModel.deleteMany({});

        // Insert new data
        await ContactModel.create(sampleData);

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