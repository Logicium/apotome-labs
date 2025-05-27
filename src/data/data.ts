const data = {

  about1:"From concept to completion, we're your partner in digital transformation. " +
    "Our focus is on creating beautiful, functional, and user-centric designs that drive results.",

  about2:"We're a creative agency specializing in crafting stunning websites and intuitive apps. " +
    "Our team of designers and developers bring your ideas to life, delivering innovative solutions that captivate your audience.",

  about3:"We believe that great design is more than just aesthetics. " +
    "It's about solving problems, telling stories, and inspiring action. " +
    "Let's build something amazing together.",

  about4:"In today's digital age, a strong online presence is essential. " +
    "We help businesses of all sizes harness the power of the internet to reach their target audience, generate leads, and boost sales. " +
    "Our services include website design and development, mobile app development, branding, and digital marketing. " +
    "Our team is committed to staying ahead of the latest trends and technologies, ensuring that your digital presence is always cutting-edge.",

  services:{
    intro: "Discover our comprehensive range of digital services, from web development to branding, tailored to help your business thrive in the digital landscape.",
    list: [
      {
        number: "01",
        name: "USER INTERFACE DESIGN",
        desc: "Creating intuitive, visually appealing interfaces that enhance user experience across all digital platforms through our research-driven UI design process that ensures beautiful and functional digital products.",
        tags: ["UI/UX", "Design", "Wireframing"]
      },
      {
        number: "02",
        name: "WEB & MOBILE APP DEVELOPMENT",
        desc: "Building responsive websites and powerful mobile applications tailored to your business needs using the latest technologies to deliver high-performance, scalable solutions that work flawlessly across all devices and platforms.",
        tags: ["Web", "Mobile", "Development"]
      },
      {
        number: "03",
        name: "ECOMMERCE SOLUTIONS",
        desc: "Developing secure, scalable online stores with custom payment gateways, inventory management, and personalized shopping features that provide seamless experiences and convert visitors into loyal customers.",
        tags: ["Ecommerce", "Sales", "Online Store"]
      },
      {
        number: "04",
        name: "SEARCH ENGINE OPTIMIZATION",
        desc: "Improving your website's visibility in search results through comprehensive SEO strategies including keyword research, on-page optimization, technical SEO, and quality content creation to help your business attract more traffic and stay ahead of competitors.",
        tags: ["SEO", "Traffic", "Rankings"]
      },
      {
        number: "05",
        name: "DIGITAL MARKETING",
        desc: "Creating comprehensive marketing strategies across digital channels with social media management, email campaigns, content marketing, and paid advertising to promote your brand, reach your target audience, maximize ROI, and build lasting customer relationships.",
        tags: ["Marketing", "Advertising", "Social Media"]
      },
      {
        number: "06",
        name: "ARTIFICIAL INTELLIGENCE",
        desc: "Implementing cutting-edge AI solutions with machine learning, natural language processing, computer vision, and predictive analytics to automate processes, analyze data, provide personalized experiences, and help your business make smarter decisions.",
        tags: ["AI", "Machine Learning", "Automation"]
      }
    ]
  },

  reviews:{
    intro:"See what our customers are saying about us. We're proud to have worked with some of the best businesses in the area.",
    list:[
      {
        quote: "They transformed our online presence completely, taking us from an outdated website to a modern digital platform that our customers love.",
        content: "Apotome Labs delivered beyond our expectations. Their team was professional, responsive, and brought creative solutions to every challenge. The new website has significantly improved our customer engagement and sales.",
        name: "Zach Stormant",
        company: "Stormant Designs",
        image:"/clients/zach.jpg",
      },
      {
        quote: "Outstanding technical expertise and customer service - their team went above and beyond to understand our unique needs and deliver exactly what we wanted.",
        content: "Working with Apotome Labs was a game-changer for our startup. They not only built us a beautiful website but also provided valuable insights into digital strategy. Their attention to detail and commitment to quality is exceptional.",
        name: "Tom Murphy",
        company: "Eternal Float Spa & Wellness Center",
        image:"/clients/tom.jpg",
      },
      {
        quote: "The best decision we made for our business! Their expertise and dedication to quality helped us achieve results we didn't think were possible.",
        content: "From the initial consultation to the final launch, Apotome Labs demonstrated exceptional professionalism. They understood our vision perfectly and created a website that perfectly represents our brand. The ongoing support has been invaluable.",
        name: "Margaret Hunt",
        company: "Margaret Hunt Gallery",
        image:"/clients/hunt.jpg",
      }

    ]
  },

  projects:{
    intro:"Explore our diverse range of projects, from sleek websites to powerful mobile apps.",
    list: [
      {
        name: "BETA STUDIO",
        type: "TEMPLATE",
        description: "A modern, mobile ready template project that can be modified for your needs.",
        image: "/projects/beta.png",
        featured: true
      },
      {
        name: "STORMANT DESIGNS",
        type: "WEBSITE",
        description: "A full booking and rewards system built with Square payments.",
        image: "/projects/stormant.png",
        featured: true
      },
      {
        name: "FLORACIA",
        type: "WEBSITE",
        description: "A full booking and rewards system built with Square payments.",
        image: "/projects/floracia.png",
        featured: true
      },
      {
        name: "MARGARET HUNT GALLERY",
        type: "WEBSITE",
        description: "A full booking and rewards system built with Square payments.",
        image: "/projects/margaret.png",
        featured: true
      },
      {
        name: "TECHFLOW SOLUTIONS",
        type: "APPLICATION",
        description: "A custom CRM solution with integrated analytics dashboard.",
        image: "/projects/techflow.png",
        featured: false
      },
      {
        name: "GREENLEAF ORGANICS",
        type: "E-COMMERCE",
        description: "An online store with subscription service and delivery tracking.",
        image: "/projects/greenleaf.png",
        featured: false
      }
    ]
  },

  contact:{
    intro:"Ready to take your business to the next level? Contact us to schedule a free consultation.",
    booking:{
      title: "Book a Consultation",
      subtitle: "Select a date and time for your free 30 minute consultation. We'll get back to you within 24 hours to confirm your appointment."
    }
  },

  about:{
    intro:"Learn about our mission to empower businesses through innovative technology."
  },

  cta:{
    intro: "Take the first step towards transforming your digital presence. Book a free consultation today and let's discuss how we can help your business grow with innovative digital solutions.",
  },

  footer: {
    visitText: "Visit Us",
    copyright: `© ${new Date().getFullYear()}. All Rights Reserved.`
  },

  pricing:{
    intro:"Discover our tailored pricing plans to suit your budget and project requirements.",
    tiers:{
      tier1:{
        name:"01 Startup",
        price:"$800",
        duration: "/project",
        desc: "Perfect for small businesses looking to establish or refresh their online presence with a custom-designed website and basic content management capabilities.",
        features: [
          "Custom Website Design and Development",
          "Basic Database Management",
          "Mobile Responsive Design",
          "Content Creation and Management",
        ]
      },
      tier2:{
        name:"02 Growth",
        price:"$1600",
        duration: "/project",
        desc: "Comprehensive digital solution for growing businesses, including mobile app development, e-commerce functionality, and brand identity design.",
        features: [
          "Everything in Startup Package",
          "Mobile App Development",
          "E-commerce Functionality",
          "Advanced Database Management",
          "Third Party Integrations",
        ]
      },
      tier3:{
        name:"03 Enterprise",
        price:"$3400+",
        duration: "/project",
        desc: "Premium package for enterprises seeking cutting-edge technology solutions, including AI development, business automation, and comprehensive analytics reporting.",
        features: [
          "Everything in Growth Package",
          "Premium AI Features",
          "Social Media Management",
          "Business Automation Services",
          "Predictive Analytics",
        ]
      },
      // tier0:{
      //   name:"00 Maintenance",
      //   price: "$60",
      //   duration: "/month",
      //   desc: "Essential maintenance package for existing websites, providing regular updates and reliable technical support to keep your site secure and running smoothly.",
      //   features: [
      //     "Website Maintenance and Updates",
      //     "Security Patches and Updates",
      //     "Domain Management",
      //     "Technical Support",
      //   ]
      // },
    },

  },

}

export default data;
