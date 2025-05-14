const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Contact",
        link: "#contact",
    }
];

const words = [
    { text: "App Developer", imgPath: "/images/ideas.svg" },
    { text: "Web Developer", imgPath: "/images/concepts.svg" },
    { text: "Back-End Dev", imgPath: "/images/designs.svg" },
    // { text: "Code", imgPath: "/images/code.svg" },
    { text: "App Developer", imgPath: "/images/ideas.svg" },
    { text: "Web Developer", imgPath: "/images/concepts.svg" },
    { text: "Back-End Dev", imgPath: "/images/designs.svg" },
    // { text: "Code", imgPath: "/images/code.svg" },
];
const roles =[
    "App Developer","Front-End Developer","Back-End Developer","Full-Stack Developer"
]

const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 1, suffix: "+", label: "Satisfied Clients" },
    { value: 4, suffix: "+", label: "Completed Projects" },
    // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Clean & Scalable Code",
        desc: "Writing modular, maintainable code that scales with your app's growth and complexity.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Effective Collaboration",
        desc: "Maintaining clear, timely communication throughout development for smoother workflows.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Consistently delivering features and fixes on time without compromising on quality.",
    },
];

const expCards = [
    {
        review: "Abdullah brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "React Native Developer",
        date: "April 2024 - March 2025 · 1 yr",
        responsibilities: [
            "working across core modules such as Visitors, Employees, Desks, Rooms, and Geofencing. Skilled in implementing user-friendly interfaces, integrating APIs, handling state management, and ensuring performance optimization.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized app performance using memoization, lazy loading, and minimized re-renders.",
        ],
    },
    {
        review: "Abdullah’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "App Developer Intern",
        date: "November 2022 - April 2024 · 1 yr 5 mos",
        responsibilities: [
            "Built cross-platform mobile apps using React Native, completed 2 real-time projects and deployed in play store and app store.",
            "Improved app performance and user experience through code optimization and testing.",
            "Improved load times and responsiveness with native animations and efficient navigation stack design.",
        ],
    }
];

const techStackIcons = [
    {
        name: "React Native Developer",
        modelPath: "/models/react-native-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Front-End Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 3,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.03,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const socialImgs = [
    {
        name: "Github",
        imgPath: "/images/github.png",
        url:'https://github.com/Abdullahzaid29'

    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url:'https://www.linkedin.com/in/abdullah-r-514035209'

    },
];

const projects = [
    {
        id:1,
        name:'VehiCure',
        imgPath:'/images/project1.png',
        link:'https://irdai-dashboard.vercel.app',
        description:'The product provides a 360 degree view on your Vehicle\'s Health.'
    },
    {
        id:2,
        name:'CRCS Dashboard',
        imgPath:'/images/project2.png',
        link:'https://crcs-dashboard-2023.vercel.app',
        description:'Dashboard for the CRCS portal'
    },
]
export {
    navLinks,words,roles,counterItems,abilities,expCards,techStackIcons,socialImgs,projects
};