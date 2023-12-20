// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {DirectorModel} from "../models/director.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {

            meta_tags:{
                metaTitle: "meta title",
                slug: "meta slug",
                MetaDescription: "meta description",
            },
            banner: {
                title: "title",
                description: "content detail",
                featured_img:"featured image",
                background_img: "background image"
            },
            director_message: {
                content: "html with image"
            },
            innovate_list: {
                title: "title",
                list: [
                    {
                        title: "title",
                        challenge: "description",
                        quote_content: "quote html",
                        help_title: "help section title",
                        help_list:[
                            {
                                title: "title",
                                description: "detail content",
                                help_link: "page link",
                            }
                        ]
                    },
                    {
                        title: "title",
                        challenge: "description",
                        quote_content: "quote html",
                        help_title: "help section title",
                        help_list:[
                            {
                                title: "title",
                                description: "detail content",
                                help_link: "page link",
                            }
                        ]
                    },
                    {
                        title: "title",
                        challenge: "description",
                        quote_content: "quote html",
                        help_title: "help section title",
                        help_list:[
                            {
                                title: "title",
                                description: "detail content",
                                help_link: "page link",
                            }
                        ]
                    }
                ]

            },
            people_says: {
                title: "section title",
                reviews_list:[
                    {
                        title: "title",
                        description: "detail content",
                        story_link: "read full story link",
                        story_img: "story image",
                        story_video: "story video",
                    },
                    {
                        title: "title",
                        description: "detail content",
                        story_link: "read full story link",
                        story_img: "story image",
                        story_video: "story video",
                    },
                    {
                        title: "title",
                        description: "detail content",
                        story_link: "read full story link",
                        story_img: "story image",
                        story_video: "story video",
                    }
                ]
            }
        }


// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await DirectorModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await DirectorModel.create(sampleData);

        console.log('directors seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();