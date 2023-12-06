// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {AboutModel} from "../models/about.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    banner: {
        title: "demo title",
        description: "lorem ipsum data",
        btnLink: "/"
    },
    banner_slider: {
        list:[
            {
                title: "demo title1",
                description: "lorem description"
            },{
                title: "demo title2",
                description: "lorem description"
            },{
                title: "demo title3",
                description: "lorem description"
            },{
                title: "demo title3",
                description: "lorem description"
            }
        ]
    },
    about_section: {
        title: "demo title3",
        description: "demo desecription",
        btnLink: "/",
        img: "img link",
        videoLink: "video link",
    },
    leadership: {
        title: "demo title3",
        list: [
            {
                img: "img link",
                title: "demo title3",
                subTitle: "demo subtitle3",
                socialIcons: [
                    {
                        icon: "img/icon",
                        iconLink: "link"
                    },
                    {
                        icon: "img/icon",
                        iconLink: "link"
                    }, {
                        icon: "img/icon",
                        iconLink: "link"
                    }
                ]
            },
            {
                img: "img link",
                title: "demo title3",
                subTitle: "demo subtitle3",
                socialIcons: [
                    {
                        icon: "img/icon",
                        iconLink: "link"
                    },
                    {
                        icon: "img/icon",
                        iconLink: "link"
                    }, {
                        icon: "img/icon",
                        iconLink: "link"
                    }
                ]
            }, {
                img: "img link",
                title: "demo title3",
                subTitle: "demo subtitle3",
                socialIcons: [
                    {
                        icon: "img/icon",
                        iconLink: "link"
                    },
                    {
                        icon: "img/icon",
                        iconLink: "link"
                    }, {
                        icon: "img/icon",
                        iconLink: "link"
                    }
                ]
            }
        ]
    },
    customize_solution: {
        content: "html",
        style: "css"
    },
    company_history: {
        content: "html",
        style: "css"
    },


    awesome_section: {
        title: "demo title3",
        list: [
            {
                icon: "img/icon",
                title: "demo title3",
                description: "demo description",
            },
            {
                icon: "img/icon",
                title: "demo title3",
                description: "demo description",
            },
            {
                icon: "img/icon",
                title: "demo title3",
                description: "demo description",
            }
        ]
    },

    porfolio_numbers: {
        list:[
            {
                title: "demo title3",
                subTitle: "demo subtitle",
            },
            {
                title: "demo title3",
                subTitle: "demo subtitle",
            }, {
                title: "demo title3",
                subTitle: "demo subtitle",
            }, {
                title: "demo title3",
                subTitle: "demo subtitle",
            }
        ]
    },

    management_reviews: {
        title: "demo title",
        list: [
            {
                img: "img link1",
                title: "demo title3",
                subTitle: "demo subtitle",
                description: "demo description",
            },
            {
                img: "img link2",
                title: "demo title3",
                subTitle: "demo subtitle",
                description: "demo description",
            },
            {
                img: "img link3",
                title: "demo title3",
                subTitle: "demo subtitle",
                description: "demo description",
            }
        ]
    }
};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await AboutModel.deleteMany({});

        // Insert new data
        await AboutModel.create(sampleData);

        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();