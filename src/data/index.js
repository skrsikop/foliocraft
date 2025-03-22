
import { Code, Paintbrush, Megaphone, Trophy } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// Navigation links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Pages',
    subLinks: [
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portofolio' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Team', path: '/team' },
      { name: 'FAQ', path: '/faq' },
    ],
  },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];
// services data
export const services = [
  {
    image: '/design.png',
    title: 'Designing',
    description: 'Design Websites and Graphics. Our team specializes in design elements, websites, and more.',
  },
  {
    image: '/dev.png',
    title: 'Developing',
    description: 'Developing Websites and Mobile Applications to create more flexible and modern web and mobile solutions.',
  },
  {
    image: '/marketting.png',
    title: 'Digital Marketing',
    description: 'Marketing your business is one of the most effective ways to grow. Contact us to grow your business.',
  },
  {
    image: '/ui-ux.png', // Ku dar sawirka UI/UX
    title: 'UI/UX Design',
    description: 'We create intuitive and user-friendly interfaces to enhance user experience and engagement.',
  },
  {
    image: '/seo.png', // Ku dar sawirka SEO
    title: 'SEO Optimization',
    description: 'Improve your website’s visibility on search engines with our expert SEO services.',
  },
  {
    image: '/app-dev.png', // Ku dar sawirka App Development
    title: 'App Development',
    description: 'We build high-quality mobile applications for iOS and Android platforms.',
  },
];
// about data 
export const aboutContent = {
  image: '/about.webp',
  title: "Empowering Brands with Digital Creativity",
  subtitle: "We deliver cutting-edge web development, design, and digital marketing solutions to elevate your brand’s presence.",
  features: [
    {
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      text: "Custom Web Development Tailored to Your Business"
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-indigo-500" />,
      text: "Modern and Intuitive Web & Graphic Design"
    },
    {
      icon: <Megaphone className="w-6 h-6 text-indigo-500" />,
      text: "Strategic Digital Marketing to Boost Your Visibility"
    },
    {
      icon: <Trophy className="w-6 h-6 text-indigo-500" />,
      text: "Creative Solutions that Drive Real Results"
    }
  ]
};
// proejcts 
export const projects = [
  {
    id: 1,
    "title": "Custom Web Development Solutions for Modern",
    "description": "Our Web Development service focuses on building robust, scalable, and user-friendly websites tailored to your business needs. From e-commerce platforms to corporate sites, we deliver high-performance solutions using the latest technologies to ensure seamless functionality and exceptional user experiences.",
    "image": "/web-development.jpg",
    "features": [
      {"text": "Frontend Development with HTML, CSS, and JavaScript"},
      {"text": "Backend Development using Node.js, Python, or PHP"},
      {"text": "Database Integration with MySQL or MongoDB"},
      {"text": "Content Management Systems like WordPress or Drupal"},
      {"text": "E-commerce Solutions with Shopify or WooCommerce"}
    ],
    "category": "Development",
    "tags" : [
      {tag: "#WebDev"},
      {tag: "#Coding"},
      {tag: "#Website"},
      {tag: "#FullStack"},
      {tag: "#Ecommerce"},
    ],
  },
  {
    id: 2,
    "title": "Creative Web Design for Stunning Online Presence",
    "description": "Our Web Design service blends aesthetics with functionality to create visually appealing and intuitive websites. We prioritize user experience (UX) and responsive design to ensure your site looks great on all devices, driving engagement and conversions.",
    "image": "/web-design.jpg",
    "features": [
      {"text": "UI/UX Design for intuitive interfaces"},
      {"text": "Responsive Design for all devices"},
      {"text": "Wireframing & Prototyping for planning"},
      {"text": "Custom Layouts tailored to your brand"},
      {"text": "Design Systems & Style Guides for consistency"}
    ],
    "category": "Design",
    "tags" : [
      {tag: "#WebDesign"},
      {tag: "#UIUX"},
      {tag: "#Responsive Design"},
      {tag: "#Creative"},
      {tag: "#UserExperience"},
    ],
  },
  {
    id: 3,
    "title": "Professional Graphic Design to Elevate Your Brand",
    "description": "Our Graphic Design service offers bespoke visuals to enhance your brand identity. From logos to marketing collateral, we create eye-catching designs that communicate your message effectively and leave a lasting impression on your audience.",
    "image": "/graphic-design.jpg",
    "features": [
      {"text": "Logo Design for brand recognition"},
      {"text": "Branding & Identity for a cohesive look"},
      {"text": "Print Design including brochures and flyers"},
      {"text": "Digital Graphics for banners and social media"},
      {"text": "Illustration & Infographics for unique visuals"}
    ],
    "category": "Branding",
    "tags" : [
      {tag: "#GraphicDesign"},
      {tag: "#Branding"},
      {tag: "#Logo"},
      {tag: "#Visuals"},
      {tag: "#CreativeDesign"},
    ],
  },
  {
    id: 4,
    "title": "Strategic Digital Marketing to Grow Your Audience",
    "description": "Our Digital Marketing service helps businesses reach their target audience through tailored online strategies. We combine data-driven insights with FolioCraft campaigns to boost your brand’s visibility, engagement, and ROI across multiple digital channels.",
    "image": "/digital-marketting.jpg",
    "features": [
      {"text": "Social Media Marketing to engage audiences"},
      {"text": "Email Marketing for direct outreach"},
      {"text": "Pay-Per-Click (PPC) Advertising for quick results"},
      {"text": "Content Marketing to build authority"},
      {"text": "Analytics & Reporting for performance tracking"}
    ],
    "category": "Marketing",
    "tags" : [
      {tag: "#Digital Marketing"},
      {tag: "#SocialMedia"},
      {tag: "#PPC"},
      {tag: "#ContentStrategy"},
      {tag: "#Growth"},
    ],
  },
  {
    id: 5,
    "title": "Advanced SEO Services for Higher Rankings",
    "description": "Our SEO service optimizes your website to rank higher on search engines, driving organic traffic and increasing visibility. We use proven techniques like keyword research, on-page optimization, and link building to ensure long-term success.",
    "image": "/seo.jpg",
    "features": [
      {"text": "Keyword Research & Strategy for targeting"},
      {"text": "On-Page SEO with meta tags and content optimization"},
      {"text": "Off-Page SEO through backlinks"},
      {"text": "Technical SEO for site speed and mobile optimization"},
      {"text": "Local SEO for regional visibility"}
    ],
    "category": "Branding",
    "tags" : [
      {tag: "#SEO"},
      {tag: "#SearchEngine"},
      {tag: "#Optimization"},
      {tag: "#OrganicTraffic"},
      {tag: "#Ranking"},
    ],
  },
  {
    'id': 6,
    "title": "Innovative Mobile App Development for All Platforms",
    "description": "Our Mobile App Development service creates custom, high-quality apps for iOS and Android. Whether you need a business tool or a customer-facing app, we deliver fast, secure, and engaging solutions designed to meet your goals.",
    "image": "/mobile-app.jpg",
    "features": [
      {"text": "Native App Development for iOS and Android"},
      {"text": "Cross-Platform Development with Flutter or React Native"},
      {"text": "UI/UX for Mobile for seamless experiences"},
      {"text": "App Testing & Deployment for quality assurance"},
      {"text": "Maintenance & Updates for ongoing support"}
    ],
    "category": "Development",
    "tags" : [
      {tag: "#MobileApp"},
      {tag: "#AppDevelopment"},
      {tag: "#iOS"},
      {tag: "#Android"},
      {tag: "#CrossPlatform"},
    ],  
  }
]
// faq 
export const faqs = [
  {
    question: "What services does a FolioCraft agency typically offer?",
    answer: "A FolioCraft agency usually offers services such as web development, graphic design, branding, digital marketing, content creation, and social media management."
  },
  {
    question: "How can a FolioCraft agency help with web development?",
    answer: "A FolioCraft agency can design and develop custom websites, optimize them for performance and SEO, and ensure they are user-friendly and responsive across all devices."
  },
  {
    question: "What is the role of a FolioCraft agency in branding?",
    answer: "A FolioCraft agency helps businesses create a strong brand identity by designing logos, defining brand guidelines, and ensuring consistent branding across all platforms."
  },
  {
    question: "Can a FolioCraft agency handle digital marketing campaigns?",
    answer: "Yes, FolioCraft  often manage digital marketing campaigns, including SEO, PPC, email marketing, and social media advertising, to help businesses reach their target audience."
  },
  {
    question: "What is the difference between UI and UX design?",
    answer: "UI (User Interface) design focuses on the visual elements of a product, while UX (User Experience) design ensures the product is easy to use and provides a seamless experience for the user."
  },
  {
    question: "How does a FolioCraft agency approach content creation?",
    answer: "Creative  create engaging and relevant content tailored to the target audience, including blog posts, videos, infographics, and social media content."
  },
  {
    question: "What tools do FolioCraft  use for design and development?",
    answer: "Creative  use tools like Adobe Creative Suite (Photoshop, Illustrator), Figma, Sketch, Webflow, and development frameworks like React, Next.js, and WordPress."
  },
  {
    question: "How long does it take to complete a web development project?",
    answer: "The timeline for a web development project depends on its complexity. A simple website may take 4-6 weeks, while a more complex project can take several months."
  },
  {
    question: "What should I look for when hiring a FolioCraft agency?",
    answer: "Look for an agency with a strong portfolio, expertise in your industry, clear communication, and a proven track record of delivering successful projects on time and within budget."
  },
  {
    question: "How do FolioCraft  measure the success of marketing campaigns?",
    answer: "FolioCraft measure success using key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and return on investment (ROI)."
  }
];
// blog posts 
export const blogs = [
  {
    id: 1,
    image: "/blog1.jpg",
    title: "Top Web Development Trends in 2025",
    description1: "Discover the latest web development trends in 2025, from AI integration to responsive design. Stay ahead in the digital world with our expert insights.",
    description2: "Learn how modern web development practices can enhance user experience and boost your online presence. Perfect for businesses looking to grow.",
    description3: "Explore case studies of successful web development projects and how they transformed businesses. Get inspired to upgrade your website today.",
    categories: [
      { category: "Web Development" },
      { category: "Technology" },
      { category: "Innovation" },
      { category: "Frontend" },
      { category: "Backend" }
    ],
    tags: [
      { tag: "Web Development" },
      { tag: "Trends" },
      { tag: "AI" },
      { tag: "Responsive Design" },
      { tag: "JavaScript" }
    ]
  },
  {
    id: 2,
    image: "/blog2.jpg",
    title: "The Importance of UI/UX Design for Your Business",
    description1: "UI/UX design is crucial for creating engaging and user-friendly websites. Learn why it matters and how it can impact your business success.",
    description2: "Discover the key principles of effective UI/UX design and how they can improve customer satisfaction and conversion rates.",
    description3: "See real-world examples of businesses that transformed their online presence with exceptional UI/UX design. Start optimizing your website now.",
    categories: [
      { category: "Design" },
      { category: "UI/UX" },
      { category: "User Experience" },
      { category: "Visual Design" },
      { category: "Prototyping" }
    ],
    tags: [
      { tag: "UI/UX" },
      { tag: "Design" },
      { tag: "User Experience" },
      { tag: "Customer Satisfaction" },
      { tag: "Figma" }
    ]
  },
  {
    id: 3,
    image: "/blog3.jpg",
    title: "Digital Marketing Strategies for 2025",
    description1: "Stay ahead of the competition with the latest digital marketing strategies for 2025. Learn how to leverage SEO, social media, and more.",
    description2: "Explore actionable tips to improve your online marketing efforts and reach your target audience effectively. Perfect for agencies and businesses.",
    description3: "Discover how data-driven marketing can help you make smarter decisions and achieve better results. Start optimizing your campaigns today.",
    categories: [
      { category: "Marketing" },
      { category: "Digital Marketing" },
      { category: "SEO" },
      { category: "Social Media" },
      { category: "Content Marketing" }
    ],
    tags: [
      { tag: "Digital Marketing" },
      { tag: "SEO" },
      { tag: "Social Media" },
      { tag: "Data-Driven Marketing" },
      { tag: "Email Marketing" }
    ]
  },
  {
    id: 4,
    image: "/blog4.jpg",
    title: "How to Choose the Right Web Development Agency",
    description1: "Choosing the right web development agency is crucial for your business success. Learn what to look for and how to make the best decision.",
    description2: "Discover the key factors to consider when selecting a web development partner, from expertise to portfolio and client reviews.",
    description3: "Get tips on how to communicate your vision effectively and ensure your project is delivered on time and within budget.",
    categories: [
      { category: "Web Development" },
      { category: "Business" },
      { category: "Consulting" },
      { category: "Project Management" },
      { category: "Client Collaboration" }
    ],
    tags: [
      { tag: "Web Development" },
      { tag: "Agency" },
      { tag: "Business Tips" },
      { tag: "Client Collaboration" },
      { tag: "Project Management" }
    ]
  },
  {
    id: 5,
    image: "/blog5.jpg",
    title: "The Role of Design in Brand Identity",
    description1: "Design plays a critical role in building a strong brand identity. Learn how to create a visual identity that resonates with your audience.",
    description2: "Explore the elements of effective brand design, from logos to color schemes and typography. Make your brand unforgettable.",
    description3: "See how top brands use design to stand out in a crowded market. Get inspired to elevate your brand identity today.",
    categories: [
      { category: "Design" },
      { category: "Branding" },
      { category: "Visual Identity" },
      { category: "Logo Design" },
      { category: "Typography" }
    ],
    tags: [
      { tag: "Design" },
      { tag: "Brand Identity" },
      { tag: "Logo Design" },
      { tag: "Visual Identity" },
      { tag: "Typography" }
    ]
  },
  {
    id: 6,
    image: "/blog6.jpg",
    title: "Effective Marketing Campaigns for Small Businesses",
    description1: "Small businesses can achieve big results with the right marketing campaigns. Learn how to create effective strategies on a budget.",
    description2: "Discover cost-effective marketing tactics, from social media to email marketing, that can help you reach your target audience.",
    description3: "Explore success stories of small businesses that grew their customer base with smart marketing. Start planning your next campaign today.",
    categories: [
      { category: "Marketing" },
      { category: "Small Business" },
      { category: "Social Media" },
      { category: "Email Marketing" },
      { category: "Budget Marketing" }
    ],
    tags: [
      { tag: "Marketing" },
      { tag: "Small Business" },
      { tag: "Social Media" },
      { tag: "Email Marketing" },
      { tag: "Budget Marketing" }
    ]
  }
];
// testimonials 
export const testimonials = [
  {
    image: '/review1.jpg',
    name: "Jane Smith",
    review: "Foliocraft transformed our website into a modern, user-friendly platform. Their attention to detail and creativity is unmatched!",
    job: "CEO, Tech Innovators",
  },
  {
    image: '/review2.jpg',
    name: "John Doe",
    review: "The team at Foliocraft is incredibly talented. They delivered our project on time and exceeded our expectations.",
    job: "Marketing Director, Bright Solutions",
  },
  {
    image: '/review3.jpg',
    name: "Michael Johnson",
    review: "Working with Foliocraft was a breeze. Their designs are stunning, and their development skills are top-notch.",
    job: "Founder, Creative Minds",
  },
  {
    image: '/review1.jpg',
    name: "Emily Brown",
    review: "Foliocraft helped us create a website that truly represents our brand. Highly recommend their services!",
    job: "Owner, Elegant Designs",
  },
  {
    image: '/review2.jpg',
    name: "David Wilson",
    review: "The Foliocraft team is professional, creative, and highly skilled. Our new website has boosted our online presence significantly.",
    job: "CTO, NextGen Tech",
  },
  {
    image: '/review1.jpg',
    name: "Sarah Davis",
    review: "Foliocraft delivered a website that is not only beautiful but also highly functional. We couldn't be happier!",
    job: "Creative Director, Artistry Co.",
  },
];
  // Array of quick links
export const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
];
  // Array of support links
export const supportLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'FAQ', path: '/faq' },
];
  // Array of social media icons
export  const socialMedia = [
    { icon: <FaFacebook />, path: 'https://facebook.com' },
    { icon: <FaTwitter />, path: 'https://twitter.com' },
    { icon: <FaInstagram />, path: 'https://instagram.com' },
    { icon: <FaLinkedin />, path: 'https://linkedin.com' },
];
// Team Members Array
export const teamMembers = [
  {
    image: "/team1.jpg",
    name: "Cameron Williamson",
    niche: "UI/UX Designer",
  },
  {
    image: "/team2.jpg",
    name: "Darlene Robertson",
    niche: "Web developer",
  },
  {
    image: "/team3.jpg",
    name: "John Wilson",
    niche: "Digital Marketer",
  },
  {
    image: "/team4.jpg",
    name: "Theresa Webb",
    niche: "Graphic designer",
  },
  {
    image: "/team5.jpg",
    name: "Sophia Carter",
    niche: "Graphic designer",
  },
  {
    image: "/team6.jpg",
    name: "Tom Johny",
    niche: "Graphic designer",
  },
  {
    image: "/team7.jpg",
    name: "Leslia Alexandra",
    niche: "Graphic designer",
  },
  {
    image: "/team8.jpg",
    name: "Brooklyn Simmons",
    niche: "Graphic designer",
  },
];
// pricing plans 
export const pricing = [
  {
    title: "Premium",
    price: "$500/project",
    description: "Our top-tier plan for businesses that need the best in design, development, and marketing.",
    features: [
      {feature: "5 Revisions"},
      {feature: "SEO Optimization"},
      {feature: "Mobile Responsive Design"},
      {feature: "Custom Graphics"},
      {feature: "Social Media Integration"},
      {feature: "24/7 Support"},
      {feature: "Analytics Dashboard"},
      {feature: "Free Domain for 1 Year"},
    ],
  },
  {
    title: "Business",
    price: "$300/project",
    description: "Perfect for growing businesses looking for a balance between quality and affordability.",
    features: [
      {feature: "3 Revisions"},
      {feature: "Basic SEO"},
      {feature: "Mobile Responsive Design"},
      {feature: "Stock Graphics"},
      {feature: "Social Media Setup"},
      {feature: "Business Hours Support"},
      {feature: "Basic Analytics"},
      {feature: "Free Domain for 6 Months"},
    ],
  },
  {
    title: "Advanced",
    price: "$200/project",
    description: "A great starting point for small businesses and startups with essential features.",
    features: [
      {feature: "2 Revisions"},
      {feature: "On-Page SEO"},
      {feature: "Mobile Friendly Design"},
      {feature: "Basic Graphics"},
      {feature: "Social Media Links"},
      {feature: "Email Support"},
      {feature: "Monthly Reports"},
      {feature: "Free Domain for 3 Months"},
    ],
  },
];