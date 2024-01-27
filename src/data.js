import img1 from "./images/TicTacToe.png"
import img2 from "./images/Portfolio.png"
import img3 from "./images/Blogs.png"
export const ProgrammingSkills=[
    {
        id:1,
        title:"Java",
        percentage:'80',
    },
    {
        id:2,
        title:"Python",
        percentage:'80',
    },
    {
        id:3,
        title:"C/C++",
        percentage:'60',
    },
    {
        id:4,
        title:"DSA",
        percentage:'80',
    }
]
export const TechnicalSkills=[
    {
        id:1,
        title:"Html",
        percentage:'80',
    },
    {
        id:2,
        title:"Css",
        percentage:'70',
    },
    {
        id:3,
        title:"Java Script",
        percentage:'70',
    },
    {
        id:4,
        title:"React",
        percentage:'50',
    },
]
export const projectsData=[
    {
        id:1,
        img:img1,
        title:"Tic Tac Toe",
        desc:"This is a well known game, Tic Tac Toe. I have developed both ai vs human and offline modes. Rules are also mentioned for the people who are new to the game. ",
        tech:["React","CSS"],
        srcLink:"https://github.com/Harsha335/tic-tac-toe",
        viewLink:"https://harsha335.github.io/tic-tac-toe/"
    },
    {
        id:2,
        img:img2,
        title:"Portfolio",
        // This portfolio website describes about me and my work.
        desc:" I have used Framer-Motion for animations & React-Anchor-Link-Smooth-Scroll for smooth scrolling & email-js for sending mails. ",
        tech:["React","CSS","framer-Motion"],
        srcLink:"https://github.com/Harsha335/Portfolio",
        viewLink:"https://harsha335.github.io/Portfolio/"
    },
    {
        id: 3,
        img: img3,
        title:"Blogs Application",
        desc:"Our blog app, powered by MongoDB and Node.js with Express, empowers admins to manage posts seamlessly, while ensuring public access to a diverse range of content.",
        tech:["NodeJs","Express","MongoDb","Ejs"],
        srcLink:"https://github.com/Harsha335/Blogs",
        viewLink:"https://github.com/Harsha335/Blogs"
    }
]