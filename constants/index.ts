import { title } from 'process';
import {RxHome, RxDashboard, RxClipboard, RxPerson} from 'react-icons/rx'
import { text } from 'stream/consumers';

export const SkillData = [
    {
        skill_name: "Html 5",
        Image: "/html.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Css",
        Image: "/css.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "JavaScript",
        Image: "/js.png",
        width: 65,
        height: 65,
    },
    {
        skill_name: "Tailwind Css",
        Image: "/tailwind.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "React",
        Image: "/react.png",
        width: 80,
        height: 80,
    },
    // {
    //     skill_name: "Redux",
    //     Image: "/redux.png",
    //     width: 80,
    //     height: 80,
    // },
    {
        skill_name: "TypeScript",
        Image: "/ts.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Next js 14",
        Image: "/next.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Framer Motion",
        Image: "/framer.png",
        width: 80,
        height: 80,
    },
    // {
    //     skill_name: "Stripe Payment",
    //     Image: "/stripe.webp",
    //     width: 80,
    //     height: 80,
    // },
    // {
    //     skill_name: "Node js",
    //     Image: "/node-js.png",
    //     width: 80,
    //     height: 80,
    // },
    // {
    //     skill_name: "Mongo db",
    //     Image: "/mongodb.png",
    //     width: 40,
    //     height: 40,
    // },
    
];
export const Socials = [
    {
        name: "Discord",
        src: "/instagram.svg",
    },
    {
        name: "Facebook",
        src: "/facebook.svg",
    },
    {
        name: "Instagram",
        src: "/discord.svg",
    },
];
export const Projects = [
    {
      title: "Modern Nextjs Portfolio",
      text: "Tech Stack : HTML,TailwindCSS,JavaScript,NextJS        A showcase of my expertise, skills, and impactful projects, reflecting dedication and proficiency in every endeavor.",
      src: "/project-1.png",
    },
    {
      title: "Efficient Expense Tracker",
      text: "Tech Stack : HTML, CSS, JavaScript      Seamlessly manage expenditures with customizable categories, date tracking, and easy deletion functionalities. Simplify your financial management today.",
      src: "/project-2.png",
    },
    {
      title: "Intuitive UX Design Exploration",
      text: "Tool: Figma Applying core UI/UX principles to create a seamless user experience, enhancing usability and engagement across diverse digital platforms.",
      src: "/dd.png",
    },
    {
      title: "Nykaa Fashion Design",
      text: "Tool: Figma  Elevating user experience through intuitive UI/UX design for Nyka Fashion, blending aesthetics with seamless navigation for an unparalleled shopping journey.",
      src: "/ny.png",
    }
    // {
    //     title: "Technical Reward",
    //     text: "Students can take courses for different domains (CS, DS, IT),Detail Information about each course (CS, DS, IT).",
    //     src: ""
    // },
    // {
    //     title: "Technical Reward",
    //     text: "Students can take courses for different domains (CS, DS, IT),Detail Information about each course (CS, DS, IT).",
    //     src: ""
    // },
    // {
    //     title: "Technical Reward",
    //     text: "Students can take courses for different domains (CS, DS, IT),Detail Information about each course (CS, DS, IT).",
    //     src: ""
    // },
  ];
export const NavLinks = [
    {
        name: "/",
        icon: RxHome,
        link: "/",
    },
    {
        name: "my-skills",
        icon: RxClipboard,
        link: "/my-skills",
    },
    {
        name: "/my-projects",
        icon: RxDashboard,
        link: "/my-projects",
      },
      {
        name: "/contact-me",
        icon:   RxPerson,
        link: "/contact-me",
      },
];
