// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {PricingModel} from "../models/pricing.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    meta_tags:{
        metaTitle: "Transparent Pricing Plans for Software",
        slug: "https://dycoders.com/pricing",
        MetaDescription: "Explore transparent pricing options tailored to suit your needs. Discover flexible plans for product development, ensuring affordability and value.",
    },
    banner: {
        title: "Your Journey, Your Path, Your <span class='text-primarys'>Price</span>",
        description: "Craft your success journey with DyCoders' personalized pricing. Choose transparency and flexibility, investing in growth without hidden costs. Explore options designed for your aspirations. Your journey deserves a price that aligns with your vision. Start shaping success today.",
        img: "img link",
    },

    pricing_section: {
        title: "",
        list: [
            {
                title: "Staff/Resource Augmentation",
                icon: "icon or img link",
                description: [
                    {
                        title: "Vetted developer profiles in 48hrs"
                    },
                    {
                        title: "Staffing within 1-2 weeks"
                    },
                    {
                        title: "Access to developers in all tech stacks"
                    },
                    {
                        title: "Stress-free hiring & retention"
                    },{
                        title: "Management and payroll freedom"
                    }
                ],
                tag: "Experience a 7-day trial.",
                btnLink: "btn link",
                featured: false,
                category: "basic",
            },
            {
                title: "Dedicated Team",
                icon: "icon or img link",
                description: [
                    {title: "Transparent pricing"},
                    {title: "Personalized extended team"},
                    {title: "IT experts across domains"},
                    {title: "DyCoders-assigned project manager"},
                    {title: "Flexible team scale & direct developer communication"},
                ],
                btnLink: "btn link",
                featured: true,
                category: "standard",
            }, {
                title: "Product Development",
                icon: "icon or img link",
                description: [
                    {title: "Complimentary cost estimation"},
                    {title: "Expert UI/UX design"},
                    {title: "Prototyping & wireframing"},
                    {title: "Premium code quality"},
                    {title: "Free project management & quality assurance"},
                    {title: "Timely delivery with weekly sprints"},
                ],
                btnLink: "btn link",
                featured: false,
                category: "pro",
            }
        ]
    },
    testimonials: {
        title: "Our Customer <span class='text-primarys'>Experiences</span>",
        list: [
            {
                name: "Anakeed Mart",
                designation: "User",
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/dummy-user.png",
                description: "DyCoders' dedication to providing cost-effective solutions is truly impressive."
            },
            {
                name: "Column",
                designation: "User",
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/dummy-user.png",
                description: "It was a pleasure collaborating with DyCoders; their efficient approach ensured high-quality services within our budget."
            },{
                name: "Homepie",
                designation: "User",
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/dummy-user.png",
                description: "Appointing DyCoders completely transformed our approach."
            },{
                name: "Tunevu",
                designation: "User",
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/dummy-user.png",
                description: "It's always a pleasure working with DyCoders, their team’s knowledge in every domain makes us who we are."
            },{
                name: "Stitch Health",
                designation: "User",
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/dummy-user.png",
                description: "The people at DyCoders have proven their development skills with unmatched results."
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