// Import necessary packages and the Mongoose model
import mongoose from 'mongoose';
import {HomeModel} from "../models/home.model";

// Connect to MongoDB
mongoose.connect('mongodb+srv://sajidhgn:ye3qG7AApMYJ7abk@nodejsexpress.qnniapr.mongodb.net/dycoders_db');

// Sample data for seeding
const sampleData = {
    meta_tags:{
        metaTitle: "DyCoders - Adept Software Development Company",
        slug: "https://dycoders.com/",
        MetaDescription: "Transform your vision into reality with our digital development expertise. From mobile apps to UX/UI and software scaling, we make it happen",
            },
        banner: {
            bannervideo: 'https://eleks.com/wp-content/themes/eleks/video/homepage_video.webm?v=321',
            bannervideoposter: 'https://eleks.com/wp-content/themes/eleks/img/home-poster.jpg?v=123321',
            bannerslider: [
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Fogbugz.webp',
                },
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Barclays.png',
                },
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Healthdesk.webp',
                },
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Kentech.webp',
                },
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Muchkin-Mailbox.png',
                },
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Qserv.webp',
                },
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Ravbits.webp',
                },
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Smarttrainer.webp',
                },
                {
                    title: 'Software Consulting & Development for Scalable Operations',
                    estimatebtnlink: '/',
                    casestudybtnlink: '/',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Tudo.png',
                }
            ],
        },
        industrypickerform: {
            industrypicker_title: 'Let Us Help You Reach Your Goals',
            industrypicker_description: 'Answer three simple questions and we’ll get the exact match of expertise for your project.',
            businesspicker: [
                {title: 'Fulfil a software vision'},
                {title: 'Overhaul legacy IT systems'},
                {title: 'Cut operational costs'},
                {title: 'Validate a business idea'},
                {title: 'Scale-up operations'},
                {title: 'Plug a talent/resource gap'},
                {title: 'Bolster security and compliance'}
            ],
        },
        experienceworld:{
            style: '',
            content: ' <section className="expsec p60 bg-white text-center" style=\'background: url("https://raw.githubusercontent.com/DycodersGallery/dycoders/c79bb1bdd8f0fc3d3dfd1f432324a31f18e13793/call-to-action51.svg");background-size: cover; background-position: center center; background-repeat: no-repeat\'>\n' +
                '        <div className="container">\n' +
                '          <div className="row justify-content-center">\n' +
                '            <div className="col-lg-10 col-md-12 col-sm-12">\n' +
                '              <div className="headerbox">\n' +
                '                <h3>\n' +
                '                  Transforming Ideas Into' +
                '                  <span className="text-primarys">Reality</span> with \n' +
                '                  Software Solutions\n' +
                '                </h3>\n' +
                '              </div>\n' +
                '              <div className="expcontent">\n' +
                '                <p>Transform your ideas into reality with our comprehensive software development services. </p>\n' +
                '                <p>Whether it\'s crafting a minimum viable mobile app, perfecting UX/UI design, or scaling existing software, we\'re your partners in every step of the journey. </p>\n' +
                '              </div>\n' +
                '            </div>\n' +
                '            <div className="col-12 expdetail">\n' +
                '              <div className="row">\n' +
                '                <div className="col-lg-2 col-md-4 col-sm-12 col-12">\n' +
                '                  <div className="expbox">\n' +
                '                    <div>\n' +
                '                      <div className="iconbox">\n' +
                '                        <Image\n' +
                '                          src="https://stage.dycoders.com/images/business.svg"\n' +
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
                '                          src="https://stage.dycoders.com/images/team.svg"\n' +
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
                '                          src="https://stage.dycoders.com/images/projects.svg"\n' +
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
                '                          src="https://stage.dycoders.com/images/offices.svg"\n' +
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
                '                          src="https://stage.dycoders.com/images/clients.svg"\n' +
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
                '                          src="https://stage.dycoders.com/images/establish.svg"\n' +
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
                '                  <a href="/" className="btn btn--small bluebtn">\n' +
                '                    <div>\n' +
                '                      Get A Quote' +
                '                      <i className="fa fa-long-arrow-alt-right ms-2"></i>\n' +
                '                    </div>\n' +
                '                  </a>\n' +
                '                </div>\n' +
                '              </div>\n' +
                '            </div>\n' +
                '          </div>\n' +
                '        </div>\n' +
                '      </section>'
        },
        engagementmodel:{
            style: 'css optional',
            content: '<section class="engagesec p60">\n' +
                '      <div class="container">\n' +
                '        <div class="row">\n' +
                '          <div class="col-12">\n' +
                '            <div class="headerbox">\n' +
                '              <h3><span class="text-primarys">Engagement</span> Models</h3>\n' +
                '            </div>\n' +
                '\n' +
                '            <div class="row enline">\n' +
                '                <div class="col-lg-4 col-md-6 col-sm-12 col-12">\n' +
                '                  <div class="engbox d-flex align-items-end">\n' +
                '                  <div class="d-flex gap-2 engbx">\n' +
                '                    <span>1</span>\n' +
                '                    <div>\n' +
                '                      <h4>Staff Augmentation</h4>\n' +
                '                      <p>Discover tailored staff augmentation solutions to meet your project\'s specific skill requirements.</p>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '                <div class="col-lg-4 col-md-6 col-sm-12 col-12">\n' +
                '                  <div class="engbox d-flex gap-2 align-items-center">\n' +
                '                    <div class="d-flex gap-2 engbx">\n' +
                '                    <span>2</span>\n' +
                '                    <div>\n' +
                '                      <h4>Product Development</h4>\n' +
                '                      <p>Our project-based model is meticulously crafted to guide you through every stage, from ideation to deployment, to actualize your product vision.</p>\n' +
                '                    </div>\n' +
                '                    </div>\n' +
                '\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '                <div class="col-lg-4 col-md-6 col-sm-12 col-12">\n' +
                '                  <div class="engbox d-flex gap-2 align-items-start">\n' +
                '                    <div class="d-flex gap-2 engbx">\n' +
                '                    <span>3</span>\n' +
                '                    <div>\n' +
                '                      <h4>Dedicated Development Team</h4>\n' +
                '                      <p>Comprising highly qualified professionals, our team of developers is committed to providing unparalleled development services.</p>\n' +
                '                    </div>\n' +
                '                    </div>\n' +
                '                  </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '          </div>\n' +
                '        </div>\n' +
                '      </div>\n' +
                '    </section>'
        },
        development_services: {
            title: 'Creative Solutions for Various Business Verticals',
            tabList: [
                {
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'Game Development',
                    description: 'Create a perfect AR/VR gaming experience that is obsessive, fun, and exceeds player expectations.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                }, {
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'Blockchain/Web3',
                    description: 'Offer a trustless distributed network enhancing your existing infrastructure for maximum security.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                }, {
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'IoT',
                    description: 'Benefit from secure IoT solutions to gather Big Data powered by seamless user experience.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                },{
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'Web Application',
                    description: 'Put the internet to creative use, create progressive web apps, e-commerce stores with a best-fit approach.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                },{
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'Mobile Application',
                    description: 'We master the art of native, cross-platform, and high performing mobile app that blend with your business model.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                },{
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'Cloud Computing',
                    description: 'Empower your business with our expertly crafted custom cloud solutions Cloud for connected enterprise.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                },{
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'DevOps',
                    description: 'Conquer the operational efficiency & improved deployment with our professional DevOps services.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                },{
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'Quality Assurance',
                    description: 'Improve testing processes with automated, full-stack quality assurance services for empowered technology.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                },{
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    title: 'UI/UX Design',
                    description: 'Partner with UI/UX consultants, designers, and researchers with vetted knowledge in various industries.',
                    btnlink: '/',
                    iconList: [
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/python.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/tensorflow-.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/numpy.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pytoruch.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/chatgpt.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/keras.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/opencv.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scikit-learn.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/pandas.svg'},
                        {icon: 'https://stage.dycoders.com/images/services/chatgpt/scripy.svg'},
                    ],
                },
            ],
        },
        industrieslist: {
            title: 'Serving in Various Industry Verticals',
            industries: [
                {
                    title: 'E-Commerce',
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    description: 'Our team at DyCoders, comprising skilled software consultants and engineers, thoroughly assesses your current scenario to craft an eCommerce platform tailored to your requirements. Collaborating with you, we employ the right tools to construct an online store geared toward driving increased sales and rapid business expansion.',
                    btnlink: '/',
                    imgsList:[
                        {
                            img: "https://stage.dycoders.com/images/portfolio/E-Commerce-d1e224b63c0d4f68797ed4dfefa13924.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/fintech.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/Education-257214436026b4aeb404b4b4f0ac2a2a.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/online-retail-308a8f7686962daf9529fd1d3be1fb94.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/travel.webp"
                        }
                    ]
                },
                {
                    title: 'Tours & Travels',
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    description: 'For the hotels and travel sector, DyCoders excels in creating innovative solutions, including apps, booking engines, inventory management tools, and data visualization dashboards. Our solutions aim to drive increased bookings, revenue growth, and operational efficiency for clients.',
                    btnlink: '/',
                    imgsList:[
                        {
                            img: "https://stage.dycoders.com/images/portfolio/E-Commerce-d1e224b63c0d4f68797ed4dfefa13924.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/fintech.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/Education-257214436026b4aeb404b4b4f0ac2a2a.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/online-retail-308a8f7686962daf9529fd1d3be1fb94.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/travel.webp"
                        }
                    ]
                },
                {
                    title: 'Education',
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    description: 'DyCoders constructs cutting-edge educational solutions, including learning management systems (LMS) and virtual classrooms, utilizing the latest technology stacks. Our comprehensive consultation and development services encompass every phase, from initial project planning to meticulous technical implementation.',
                    btnlink: '/',
                    imgsList:[
                        {
                            img: "https://stage.dycoders.com/images/portfolio/E-Commerce-d1e224b63c0d4f68797ed4dfefa13924.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/fintech.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/Education-257214436026b4aeb404b4b4f0ac2a2a.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/online-retail-308a8f7686962daf9529fd1d3be1fb94.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/travel.webp"
                        }
                    ]
                },
                {
                    title: 'Food & Grocery',
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    description: 'Our consultants, adept in website and mobile app development, excel in crafting tailored solutions for commercial operations, from billing to order management systems. We focus on creating responsive designs that resonate with your customers.',
                    btnlink: '/',
                    imgsList:[
                        {
                            img: "https://stage.dycoders.com/images/portfolio/E-Commerce-d1e224b63c0d4f68797ed4dfefa13924.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/fintech.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/Education-257214436026b4aeb404b4b4f0ac2a2a.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/online-retail-308a8f7686962daf9529fd1d3be1fb94.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/travel.webp"
                        }
                    ]
                },
                {
                    title: 'FinTech',
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    description: 'DyCoders specializes in consulting services and custom software development for various industries, including fintech, offering solutions such as digital payment systems, banking apps, and accounting software consulting. Our expertise spans strategy development, product design, management, and technical support for fintech businesses.',
                    btnlink: '/',
                    imgsList:[
                        {
                            img: "https://stage.dycoders.com/images/portfolio/E-Commerce-d1e224b63c0d4f68797ed4dfefa13924.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/fintech.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/Education-257214436026b4aeb404b4b4f0ac2a2a.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/online-retail-308a8f7686962daf9529fd1d3be1fb94.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/travel.webp"
                        }
                    ]
                },
                {
                    title: 'Healthcare',
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    description: 'In healthcare software consulting and development, DyCoders provides end-to-end services, from ideation to deployment, encompassing quality assurance testing and consultation. Our commitment includes comprehensive support throughout the development cycle.',
                    btnlink: '/',
                    imgsList:[
                        {
                            img: "https://stage.dycoders.com/images/portfolio/E-Commerce-d1e224b63c0d4f68797ed4dfefa13924.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/fintech.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/Education-257214436026b4aeb404b4b4f0ac2a2a.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/online-retail-308a8f7686962daf9529fd1d3be1fb94.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/travel.webp"
                        }
                    ]
                },
                {
                    title: 'On-Demand Services',
                    icon: 'https://stage.dycoders.com/images/techicon.svg',
                    description: 'DyCoders specializes in the design and development of on-demand mobile applications, supporting businesses in embracing the on-demand trend. Our expertise and seasoned professionals ensure not just sustainability but thriving success within your industry.',
                    btnlink: '/',
                    imgsList:[
                        {
                            img: "https://stage.dycoders.com/images/portfolio/E-Commerce-d1e224b63c0d4f68797ed4dfefa13924.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/fintech.webp"
                        },
                        {
                            img: "https://stage.dycoders.com/images/portfolio/Education-257214436026b4aeb404b4b4f0ac2a2a.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/online-retail-308a8f7686962daf9529fd1d3be1fb94.webp"
                        },{
                            img: "https://stage.dycoders.com/images/portfolio/travel.webp"
                        }
                    ]
                },

            ],
        },
        portfolio_section: {
            heading: 'Portfolio',
            portfolios: [
                {
                    title: 'Anakeed Mart',
                    description: 'A Saudi-based online grocery platform delivering premium organic produce, including fresh fruits and vegetables, directly to your doorstep.',
                    btnlink: '/',
                    img: 'https://stage.dycoders.com/images/portfolios/barclays.png',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Barclays.png',
                },
                {
                    title: 'Column',
                    description: 'A cooperative platform facilitating the distribution of public interest information for journalists, governments, and legal entities.',
                    btnlink: '/',
                    img: 'https://stage.dycoders.com/images/portfolios/barclays.png',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Barclays.png',
                },
                {
                    title: 'Homepie',
                    description:'A no-cost marketplace connecting homebuyers and sellers. Easily list properties, communicate with potential buyers or sellers, finalize deals, and more.',
                    btnlink: '/',
                    img: 'https://stage.dycoders.com/images/portfolios/barclays.png',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Barclays.png',
                },
                {
                    title: 'Tunevu',
                    description:'An interactive online podcasting platform offering an engaging listening experience.',
                    btnlink: '/',
                    img: 'https://stage.dycoders.com/images/portfolios/barclays.png',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Barclays.png',
                },
                {
                    title: 'Stitch Health',
                    description:'A healthcare team coordination platform enabling seamless communication, file sharing, and synchronization across multiple devices.\n',
                    btnlink: '/',
                    img: 'https://stage.dycoders.com/images/portfolios/barclays.png',
                    logoimg: 'https://stage.dycoders.com/images/portfolios/Clients-Logos_Barclays.png',
                },

            ],
        },
        quotation:{
        style: 'css optional',
        content: 'Inventing Future-proof Software! Get a Quote'
    },
};

// Seed the database
async function seedDatabase() {
    try {
        // Clear existing data
        await HomeModel.deleteMany({}).maxTimeMS(30000);;

        // Insert new data
        await HomeModel.create(sampleData);

        console.log('home seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Run the seeding function
seedDatabase();