// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {AboutModel} from "../models/about.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    meta_tags:{
        metaTitle: "",
        slug: "",
        MetaDescription: "",
    },
    banner: {
        title: "Explore DyCoders' Journey of Innovation",
        description: "Fueling innovation, forging futures through cutting-edge digital craftsmanship",
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
        title: "What is <span class='text-primarys'>DyCoders</span>? An Introduction",
        description: "<p>DyCoders is an innovative force, a hub of digital craftsmanship, where expertise meets ingenuity. We specialize in turning visionary ideas into tangible digital realities, crafting bespoke solutions that redefine industries and amplify possibilities. At DyCoders, we're not just writing code; we're architecting the future, one innovation at a time.</p>" +
            "<p>At DyCoders, we're more than a team of tech enthusiasts; we're architects of digital transformation. We thrive on the challenge of sculpting cutting-edge solutions that transcend expectations. Our relentless pursuit of excellence drives us to push boundaries, embracing creativity and innovation to build tomorrow's technological landscapes. With a passion for problem-solving and an unwavering commitment to our client's success, DyCoders stands as a beacon of innovation in the ever-evolving realm of digital possibilities.</p>",
        btnLink: "/",
        img: "img link",
        videoLink: "video link",
    },
    leadership: {
        title: "Meet Our <span class='text-primarys'>Dynamic</span> Leadership",
        list: [
            {
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/ceo.jpg",
                title: "Ukasha Habib",
                subTitle: "CEO DyCoders",
                socialIcons: [
                    {
                        icon: "<i class='fab fa-facebook-f'></i>",
                        iconLink: "/"
                    },
                    {
                        icon: "<i class='fab fa-linkedin-in'></i>",
                        iconLink: "/"
                    }, {
                        icon: "<i class='fab fa-twitter'></i>",
                        iconLink: "/"
                    }
                ]
            },
            {
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/cto.jpg",
                title: "Hammad Ur Rehman",
                subTitle: "CO-Founder & CTO DyCoders",
                socialIcons: [
                    {
                        icon: "<i class='fab fa-facebook-f'></i>",
                        iconLink: "/"
                    },
                    {
                        icon: "<i class='fab fa-linkedin-in'></i>",
                        iconLink: "/"
                    }, {
                        icon: "<i class='fab fa-twitter'></i>",
                        iconLink: "/"
                    }
                ]
            },  {
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/coo.jpg",
                title: "Mian Muhammad Saad",
                subTitle: "COO DyCoders",
                socialIcons: [
                    {
                        icon: "<i class='fab fa-facebook-f'></i>",
                        iconLink: "/"
                    },
                    {
                        icon: "<i class='fab fa-linkedin-in'></i>",
                        iconLink: "/"
                    }, {
                        icon: "<i class='fab fa-twitter'></i>",
                        iconLink: "/"
                    }
                ]
            }
        ]
    },
    customize_solution: {
        content: '<section class="customizesec processsec p60" style=\'background: url("https://raw.githubusercontent.com/DycodersGallery/dycoders/c79bb1bdd8f0fc3d3dfd1f432324a31f18e13793/call-to-action51.svg");background-size: cover; background-position: center center; background-repeat: no-repeat\'>\n' +
            '    <div class="container">\n' +
            '      <div class="row">\n' +
            '        <div class="col-12">\n' +
            '          <div class="custombox p60">\n' +
            '            <div class="row">\n' +
            '              <div class="col-lg-8 col-md-7 col-sm-12 col-12 my-auto">\n' +
            '                <div class="headerbox">\n' +
            '                  <h2> <span class="textc">Custom Solutions</span>, Crafted to Perfectly <span class="textc">Match Your Needs</span></h2>\n' +
            '                  <a href="#" class="btn btn--small bluebtn"><div>Discover Your Edge <i class="far fa-long-arrow-alt-right ms-2"></i></div></a>\n' +
            '                </div>\n' +
            '              </div>\n' +
            '              <div class="col-lg-4 col-md-5 col-sm-12 col-12 my-auto">\n' +
            '                <img src="https://raw.githubusercontent.com/DycodersGallery/dycoders/c79bb1bdd8f0fc3d3dfd1f432324a31f18e13793/call-to-action5-img1.svg" class="img-fluid" alt="">\n' +
            '              </div>\n' +
            '            </div>\n' +
            '          </div>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </section>',
        style: "css"
    },
    company_history: {
        content: '<section class="stepsec bg-white p60">\n' +
            '    <div class="container">\n' +
            '      <div class="row">\n' +
            '        <div class="col-12">\n' +
            '          <div class="headerbox text-center">\n' +
            '            <h3>Our Relentless <span class="text-primarys">Pursuit of Innovation</span></h3>\n' +
            '          </div>\n' +
            '          <div class="stepimg text-center">\n' +
            '            <img src="https://raw.githubusercontent.com/DycodersGallery/dycoders/main/steps.svg" class="img-fluid" alt="">\n' +
            '          </div>\n' +
            '        </div>\n' +
            '      </div>\n' +
            '    </div>\n' +
            '  </section>',
        style: "css optional"
    },


    awesome_section: {
        title: "What Sets Us <span class='text-primarys'>Apart</span>?",
        list: [
            {
                icon: "https://raw.githubusercontent.com/DycodersGallery/dycoders/blob/main/awesome.svg",
                title: "Crafting Brilliance",
                description: "Innovation thrives in our talented enclave, where expertise in Elixir, Laravel, ROR, AI/ML, and more is the norm. We cultivate brilliance, nurturing a culture where skill amplifies creativity, leading to unparalleled solutions.",
            },
            {
                icon: "https://raw.githubusercontent.com/DycodersGallery/dycoders/blob/main/awesome.svg",
                title: "Excellence Redefined",
                description: "Quality isn’t a goal; it’s our standard. Every line of code and every strategy crafted embodies our dedication to impeccable results. Our commitment to excellence powers solutions that surpass expectations.",
            },
            {
                icon: "https://raw.githubusercontent.com/DycodersGallery/dycoders/blob/main/awesome.svg",
                title: "Empowered Teams",
                description: "Beyond work, we invest in our teams' well-being. From flexible schedules to growth opportunities and comprehensive benefits, we nurture a thriving environment that fosters both personal and professional success.\n" +
                    "\n",
            }
        ]
    },

    portfolio_numbers: {
        list:[
            {
                title: "100+",
                subTitle: "Project Complete",
            },
            {
                title: "70+",
                subTitle: "Clients",
            }, {
                title: "200+",
                subTitle: "Team Members",
            }, {
                title: "8+ years",
                subTitle: "Experience",
            }
        ]
    },

    management_reviews: {
        title: "Insights From <span class='text-primarys'>Leadership</span>",
        list: [
            {
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/ceo-q.png",
                title: "Ukasha Habib",
                subTitle: "CEO, DyCoders (Pvt.) Ltd",
                description: "As the visionary at DyCoders, I ignite our technological odyssey. We wield Elixir, Laravel, ROR, AI/ML, and more to propel your digital metamorphosis. DyCoders doesn't just deliver; we co-create tailored solutions for your triumph. Join us in carving the future through groundbreaking tech.",
            },
            {
                img: "https://raw.githubusercontent.com/DycodersGallery/dycoders/main/cto-q.png",
                title: "Hammad Ur Rehman",
                subTitle: "CO-FOUNDER & CTO, DyCoders (Pvt.) Ltd",
                description: "As DyCoders' CTO and co-founder, I'm thrilled to steer our tech journey. We harness Elixir, Laravel, ROR, AI/ML, and more to drive your digital evolution. Our tailored solutions, fueled by innovation, aim for your success. Join DyCoders to shape the future through tech. Let's collaborate to create pioneering solutions.",
            }
        ]
    }
};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await AboutModel.deleteMany({}).maxTimeMS(30000);

        // Insert new data
        await AboutModel.create(sampleData);

        console.log('about seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();