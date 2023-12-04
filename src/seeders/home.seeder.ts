// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {HomeModel} from "../models/home.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
        banner: {
            bannervideo: 'sample_video_url',
            bannervideoposter: 'sample_poster_url',
            bannerslider: [
                {
                    title: 'Slider 1',
                    estimatebtnlink: 'sample_estimate_link',
                    casestudybtnlink: 'sample_casestudy_link',
                    logoimg: 'sample_logo_url',
                }
            ],
        },
        industrypickerform: {
            industrypicker_title: 'Industry Picker Title',
            industrypicker_description: 'Industry Picker Description',
            industrypicker: [
                {title: 'Industry 1'}
            ],
            businesspicker: [
                {title: 'Business 1'}
            ],
        },
        experienceworld:{
            html: ' <section className="expsec p60 bg-white text-center">\n' +
                '        <div className="container">\n' +
                '          <div className="row justify-content-center">\n' +
                '            <div className="col-lg-10 col-md-12 col-sm-12">\n' +
                '              <div className="headerbox">\n' +
                '                <h3>\n' +
                '                  Experience World-class{" "}\n' +
                '                  <span className="text-primarys">Agile</span> Product\n' +
                '                  Development\n' +
                '                </h3>\n' +
                '              </div>\n' +
                '              <div className="expcontent">\n' +
                '                <p>\n' +
                '                  DyCoders is a vigorous team of passionate web developers,\n' +
                '                  coders, designers, creatives, and tech-junkies that aims to\n' +
                '                  provide cutting-edge and futuristic solutions to tech\n' +
                '                  startups, mid-size companies, and enterprises. Our ultimate\n' +
                '                  mission is to make DyCoders the leading software development\n' +
                '                  and consulting company by keeping our steady experimental\n' +
                '                  approach and being open to ideas and innovations.\n' +
                '                </p>\n' +
                '                <p>\n' +
                '                  By serving more than 50 companies and organizations to this\n' +
                '                  date, we know how to create and deliver a successful digital\n' +
                '                  product. Owing to these qualities and countless more, we have\n' +
                '                  helped our clients reach the top tier in terms of domains like\n' +
                '                  software development, mobile app development, e-commerce\n' +
                '                  website development, design and interface development, and\n' +
                '                  many more. We stay ahead of all the trends and keep perfecting\n' +
                '                  our practices by aligning them with the newest data, research,\n' +
                '                  innovations, and methodologies.\n' +
                '                </p>\n' +
                '              </div>\n' +
                '            </div>\n' +
                '            <div className="col-12 expdetail">\n' +
                '              <div className="row">\n' +
                '                <div className="col-lg-2 col-md-4 col-sm-12 col-12">\n' +
                '                  <div className="expbox">\n' +
                '                    <div>\n' +
                '                      <div className="iconbox">\n' +
                '                        <Image\n' +
                '                          src="images/business.svg"\n' +
                '                          className="img-fluid"\n' +
                '                          width={0}\n' +
                '                          height={0}\n' +
                '                          sizes="100vw"\n' +
                '                          style={{ width: "100%", height: "auto" }}\n' +
                '                          alt="bussiness"\n' +
                '                        />\n' +
                '                      </div>\n' +
                '                      <div className="exphead">\n' +
                '                        <h5>8+</h5>\n' +
                '                        <p>\n' +
                '                          Years in\n' +
                '                          <br />\n' +
                '                          Business\n' +
                '                        </p>\n' +
                '                      </div>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '                <div className="col-lg-2 col-md-4 col-sm-12 col-12">\n' +
                '                  <div className="expbox">\n' +
                '                    <div>\n' +
                '                      <div className="iconbox">\n' +
                '                        <Image\n' +
                '                          src="images/team.svg"\n' +
                '                          className="img-fluid"\n' +
                '                          alt=""\n' +
                '                          width={0}\n' +
                '                          height={0}\n' +
                '                          sizes="100vw"\n' +
                '                          style={{ width: "100%", height: "auto" }}\n' +
                '                        />\n' +
                '                      </div>\n' +
                '                      <div className="exphead">\n' +
                '                        <h5>80+</h5>\n' +
                '                        <p>\n' +
                '                          Team\n' +
                '                          <br />\n' +
                '                          Members\n' +
                '                        </p>\n' +
                '                      </div>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '                <div className="col-lg-2 col-md-4 col-sm-12 col-12">\n' +
                '                  <div className="expbox">\n' +
                '                    <div>\n' +
                '                      <div className="iconbox">\n' +
                '                        <Image\n' +
                '                          src="images/projects.svg"\n' +
                '                          className="img-fluid"\n' +
                '                          alt=""\n' +
                '                          width={0}\n' +
                '                          height={0}\n' +
                '                          sizes="100vw"\n' +
                '                          style={{ width: "100%", height: "auto" }}\n' +
                '                        />\n' +
                '                      </div>\n' +
                '                      <div className="exphead">\n' +
                '                        <h5>200+</h5>\n' +
                '                        <p>\n' +
                '                          Projects\n' +
                '                          <br />\n' +
                '                          Done\n' +
                '                        </p>\n' +
                '                      </div>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '                <div className="col-lg-2 col-md-4 col-sm-12 col-12">\n' +
                '                  <div className="expbox">\n' +
                '                    <div>\n' +
                '                      <div className="iconbox">\n' +
                '                        <Image\n' +
                '                          src="images/offices.svg"\n' +
                '                          className="img-fluid"\n' +
                '                          alt=""\n' +
                '                          width={0}\n' +
                '                          height={0}\n' +
                '                          sizes="100vw"\n' +
                '                          style={{ width: "100%", height: "auto" }}\n' +
                '                        />\n' +
                '                      </div>\n' +
                '                      <div className="exphead">\n' +
                '                        <h5>4+</h5>\n' +
                '                        <p>\n' +
                '                          Global\n' +
                '                          <br />\n' +
                '                          Offices\n' +
                '                        </p>\n' +
                '                      </div>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '                <div className="col-lg-2 col-md-4 col-sm-12 col-12">\n' +
                '                  <div className="expbox">\n' +
                '                    <div>\n' +
                '                      <div className="iconbox">\n' +
                '                        <Image\n' +
                '                          src="images/clients.svg"\n' +
                '                          className="img-fluid"\n' +
                '                          alt=""\n' +
                '                          width={0}\n' +
                '                          height={0}\n' +
                '                          sizes="100vw"\n' +
                '                          style={{ width: "100%", height: "auto" }}\n' +
                '                        />\n' +
                '                      </div>\n' +
                '                      <div className="exphead">\n' +
                '                        <h5>200+</h5>\n' +
                '                        <p>Clients</p>\n' +
                '                      </div>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '                <div className="col-lg-2 col-md-4 col-sm-12 col-12">\n' +
                '                  <div className="expbox">\n' +
                '                    <div>\n' +
                '                      <div className="iconbox">\n' +
                '                        <Image\n' +
                '                          src="images/establish.svg"\n' +
                '                          className="img-fluid"\n' +
                '                          alt=""\n' +
                '                          width={0}\n' +
                '                          height={0}\n' +
                '                          sizes="100vw"\n' +
                '                          style={{ width: "100%", height: "auto" }}\n' +
                '                        />\n' +
                '                      </div>\n' +
                '                      <div className="exphead">\n' +
                '                        <h5>2014</h5>\n' +
                '                        <p>Established</p>\n' +
                '                      </div>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '              </div>\n' +
                '\n' +
                '              <div className="row">\n' +
                '                <div className="col-12">\n' +
                '                  <Link href="/" className="btn btn--small bluebtn">\n' +
                '                    <div>\n' +
                '                      Get A Quote{" "}\n' +
                '                      <i className="far fa-long-arrow-alt-right ms-2"></i>\n' +
                '                    </div>\n' +
                '                  </Link>\n' +
                '                </div>\n' +
                '              </div>\n' +
                '            </div>\n' +
                '          </div>\n' +
                '        </div>\n' +
                '      </section>'
        },
        development_services: {
            title: 'Development Services Title',
            tabList: [
                {
                    icon: 'sample_icon_url',
                    title: 'Service 1',
                    description: 'Service 1 Description',
                    btnlink: 'sample_service_link',
                    iconList: [
                        {icon: 'sample_icon_1'}
                    ],
                },
            ],
        },
        industrieslist: {
            title: 'Industries List Title',
            industries: [
                {
                    title: 'Industry 1',
                    icon: 'sample_icon_url',
                    description: 'Industry 1 Description',
                    btnlink: 'sample_industry_link',
                },

            ],
        },
        portfolio_section: {
            heading: 'Portfolio Heading',
            portfolios: [
                {
                    title: 'Project 1',
                    description: 'Project 1 Description',
                    btnlink: 'sample_project_link',
                    img: 'sample_project_image_url',
                    logoimg: 'sample_project_logo_url',
                },

            ],
        },
};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await HomeModel.deleteMany({});

        // Insert new data
        await HomeModel.create(sampleData);

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