import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  csharp,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  supabase,
  jackpoole,
  erickcastro,
  bradon,
  git,
  scopic,
  oneforma,
  storecove,
  hku,
  tkt,
  selfDrivingCar,
  myPortfolio,
  bialetti,
  aionair,
  genius,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React & NextJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Expert Developer",
    icon: backend,
  },
  {
    title: "Data Science and Deep Learning self-student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "python3",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Scopic - Remote in Amsterdam, North Holland",
    icon: scopic,
    iconBg: "#ffff",
    date: "January 2022 - Present",
    points: [
      // "Developed and maintained RESTful APIs using Node.js and Express, ensuring secure and efficient data handling.",
      // "Implemented server-side rendering and dynamic routing using Next.js for improved SEO and performance",
      // "Integrated third-party services and APIs.",
      // "Designed and optimized database schemas with MySQL and MongoDB, focusing on scalability and data integrity."
      "Successfully converted whole project from python 2 to 3.8.0",
      "Scripted unique test plans, test scripts and processes to remove previously known redundancy by 40% and ensured predictable outcomes",
      "Developed a desktop application to automate database testing process, improved efficiency by 65%",
      "Automated process to create usage graphs, saving $500,000 / year & increasing accuracy"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "OneForma - Remote in West Loop, Chicago",
    icon: oneforma,
    iconBg: "#ffff",
    date: "July 2021 - November 2022",
    points: [
      // "Implemented complex user interfaces using advanced ReactJs, NextJs, Python, TailwindCss, Typescript, etc.",
      // "Utilized React for frontend web development and cross-platform web app development.",
      // "Collaborated on optimizing app performance and enhancing user experience.",
      "Moved the automation solution into a commercial software ( $60k/year)",
      "Designed and developed reusable software components which used in 3 different project with reducing development effort by 50%",
      "Re-engineered critical modules within a sprint to rely on a centralized library to optimize performance by 68%",
      "Rated with the best annual performance rating for all the years during my stint; given to top ~ 5% employees"
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "Storecove - Remote in Hilversum, North Holland",
    icon: storecove,
    iconBg: "#ffff",
    date: "April 2019 - June 2021",
    points: [
      // "Developed cross-platform web applications using MERN Stack",
      // "Integrated RESTful APIs, databases, and server-side scripting",
      // "Focused on UI/UX design, responsive layout, and state management using Next.js.",
      "Helped to increase the accuracy of the reporting systems by 4%",
      "Delivered configuration management tools to track server settings for performance testing which saved 25% of initial machine setup",
      "Developed monitor reports that are using in-memory cache, updating the data shown to the user every 1 second",
      "Optimized customer resources and reduce turnaround time by 20%",
      "Performed root cause analysis for more than 10 issues to identify bugs and rolled out fixes to production within 24 hours"
    ],
  },
];

const educations = [
  {
    title: "Full Stack Web Development Co-op Course",
    company_name: "The University of Hong Kong - Pok Fu Lam, Hong Kong",
    icon: hku,
    iconBg: "#ffff",
    date: "April 2015 - March 2019",
    points: [
      "Worked with various programming languages and frameworks, such as React, React Native, and Node.js.",
      "Participated in a rigorous co-op program with a focus on full-stack web development.",
      "Gained expertise in both frontend and backend technologies, including React, Node.js, and databases.",
    ],
  },
  {
    title: "Web Development Course",
    company_name: "Tai Kok Tsui Catholic Primary School - Tai Kok Tsui, Hong Kong",
    icon: tkt,
    iconBg: "#ffff",
    date: "April 2012 - March 2015",
    points: [
      "Learned basic knowledge of computer science.",
      "Studied web development concepts, including HTML, CSS, JavaScript",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Thanks to our new Management System developed by Carter our sales and company have been skyrocketing, amazing work.",
    name: "Erick Castro",
    designation: "CEO",
    company: "Puerto Madero",
    image: erickcastro,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about his career and programming like Carter does.",
    name: "Jack Poole",
    designation: "Student",
    company: "Computer Science",
    image: jackpoole,
  },
  {
    testimonial:
      "After having worked with Carter, I realized he's a very determined person, who will always give his best and make an excellent job.",
    name: "Bradon McInnes",
    designation: "HR",
    company: "Home Depot Richmond",
    image: bradon,
  },
];

const projects = [
  {
    name: "Genius-AI",
    description:
      "The GeniusAI likely showcases AI-powered solutions or services, featuring a frontend built with frameworks like React or Next.js for an interactive user experience. It could leverage machine learning models on the backend, using Node.js, to provide personalized insights, automation, or predictive analytics for users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "text-white-600",
      },
      {
        name: "node.js",
        color: "text-yellow-600",
      },
      {
        name: "redux",
        color: "text-green-600",
      },
      {
        name: "zustand",
        color: "text-purple-600",
      },
      {
        name: "tensorFlow.js",
        color: "text-white-600",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "text-blue-600",
      },
    ],
    image: genius,
    source_code_link: "https://github.com/cartergrant599/genius-ai",
  },
  {
    name: "Aionair",
    description:
      "The Aionair likely tracks and displays real-time air quality data using a responsive frontend built with React or Next.js, while its backend integrates with sensors or APIs to fetch and store air quality information in a database like MongoDB. It provides users with a clean interface to monitor and analyze air quality trends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "text-white-600",
      },
      {
        name: "convex",
        color: "text-blue-600",
      },
      {
        name: "clerk",
        color: "text-green-600",
      },
      {
        name: "openAI",
        color: "text-grey-600",
      },
      {
        name: "ShadCN",
        color: "text-purple-600",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "text-yellow-600",
      },
    ],
    image: aionair,
    live_version_link: "https://aionair.vercel.app/",
    source_code_link: "https://github.com/cartergrant599/aionair",
  },
  {
    name: "Self Driving Car",
    description:
      "Exciting Python-based implementation of a self-driving car simulation leveraging the power of Deep Q Learning (DQN) neural networks. Imagine a virtual world where our intelligent car not only roams autonomously but learns from its experiences to become an adept driver!",
    tags: [
      {
        name: "python3",
        color: "text-green-500",
      },
      {
        name: "pytorch",
        color: "text-orange-500",
      },
      {
        name: "deeplearning",
        color: "text-blue-600",
      },
      {
        name: "tcl-tk",
        color: "text-yellow-500",
      },
      {
        name: "reinforcement-learning",
        color: "text-blue-600",
      },
    ],
    image: selfDrivingCar,
    source_code_link: "https://github.com/cartergrant599/SelfDrivingCar",
  },
  {
    name: "My Portfolio",
    description:
      "Interactive portfolio with React, Three.js, and Framer Motion for a dynamic user experience. Explore my work with smooth animations and 3D elements. Powered by Vite and Tailwind CSS for fast, stylish development. Make it yours and deploy effortlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "text-green-600",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "text-blue-500",
      },
      {
        name: "framermotion",
        color: "text-purple-500",
      },
      {
        name: "threejs",
        color: "text-yellow-500",
      },
      {
        name: "postgress",
        color: "text-green-600",
      },
      {
        name: "mysql",
        color: "text-purple-600",
      },
      {
        name: "toastifyjs",
        color: "text-blue-600",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/cartergrant599/Portfolio",
  },
  {
    name: "Bialetti Coffee Shop",
    description:
      "JavaScript, HTML5, CSS3, and Bootstrap 5 power this site, enhancing the franchise's visibility. Key features include a commercial showcase, external stock management, and a robust delivery system. Actively developed, we welcome collaboration for a successful Bolivia launch.",
    tags: [
      {
        name: "html",
        color: "text-blue-500",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap5",
        color: "text-purple-500",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
    ],
    image: bialetti,
    live_version_link: "https://bialetti-bolivia.netlify.app/",
    source_code_link: "https://github.com/cartergrant599/BialettiBolivia",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
