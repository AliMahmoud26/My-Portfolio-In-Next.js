// skills-data.js
export const skillsData = [
  {
    id: 1,
    category: "FRONTEND",
    skills: [
      "HTML5 & CSS3",
      "Javascript & ES6",
      "TypeScript",
      "React.JS & Redux",
      "Next.JS",
      "SASS/SCSS",
      "Tailwind CSS & Bootstrap 5",
      "Git & GitHub",
    ],
  },
  {
    id: 2,
    category: "BACKEND",
    skills: [
      "Node Js",
      "Express Js",
      "MongoDB"
    ],
  },
  {
    id: 3,
    category: "SOFT SKILLS",
    skills: [
      "Teamwork & Collaboration",
      "Responsibility & Adaptability",
      "Fast Learner",
      "Problem-Solving",
    ],
  },
];

// expertise-data.js
export const expertiseData = {
  experience: [
    {
      id: 1,
      title: "APPS SQUARE",
      subtitle: "FRONTEND INTERN",
      date: "JULY 2024 - SEPTEMBER 2024",
      description: "Developed responsive web apps using React and Next.js, implemented APIs, authentication, and cookies while collaborating on team projects and code reviews following best practices.",
      lineHeight: "h-[12rem] md:h-[18rem] max-[600px]:h-[24rem]",
    },
    // {
    //   id: 1,
    //   title: "Web Development",
    //   subtitle: "FRONTEND DEVELOPER",
    //   date: "JULY 2022 - STARTED",
    //   description: "I started learning frontend development in 2022, and since then, I've gained knowledge in various technologies like HTML5, CSS3, JavaScript and ES6, React.js, TypeScript, Sass, Tailwind CSS, and Bootstrap 5. Additionally, I've explored backend technologies such as Node.js, Express, and MongoDB. Throughout this journey, I encountered and mastered many aspects of the field. By applying my knowledge to real projects, which you can find on my GitHub account, I have gained considerable experience.",
    //   lineHeight: "h-[22rem] lg:h-[32rem] sm:h-[30rem]"
    // },
    {
      id: 1,
      title: "Meta Frontend Developer Professional Certificate",
      subtitle: "Coursera Platform",
      date: "FEB 2024 - JUL 2024",
      description: "Covered HTML, CSS, JavaScript, and advanced React including hooks & performance optimization",
      lineHeight: "lg:h-[10rem] md:h-[14rem] sm:h-[12rem] max-[400px]:h-[16rem]"
    },
  ],
  education: [
    {
      id: 3,
      title: "HIMIT Institute",
      subtitle: "B.SC. IN COMPUTER SCIENCE",
      date: "JOINED IN OCTOBER 2021 - GRADUATED IN JUNE 2025",
      description: "I enrolled in the Higher Institute of Management and Information Technology of Kafr El-Sheikh at Computer Science Department and Graduated in June 2025. Studied core computer science concepts including Programming Fundamentals, DSA, OOP, system analysis, software architecture, and mathematics.",
      second_description: "Developed a Predictive Model Using Machine Learning for Predicting Student Performance for Graduation Project. Implemented Python, Pandas, and Scikit-learn. The model predicts student performance based on various factors such as attendance, assignments, and exam scores.",
      lineHeight: "lg:h-[25rem] md:h-[20rem] sm:h-[28rem] max-[500px]:h-[34rem] max-[400px]:h-[42rem] max-[350px]:h-[48rem]"
    }
  ]
};

// projects-data.js
export const projectsData = [
    {
    id: 1,
    title: "React Nuggets Applications",
    category: "WEBSITE",
    technologies: ["React JS & CSS", "Simple React Apps for Learning"],
    description: "",
    image: "/ecommerce5.jpg",
    links: [
      // {
      //   type: "live",
      //   url: "https://react-nugget-app-menu-filtering.vercel.app/",
      //   icon: "MdArrowOutward",
      //   title: "Live Site"
      // },
      {
        type: "github",
        url: "https://github.com/AliMahmoud26/React-Nuggets-Apps",
        icon: "FaGithub",
        title: "Github Repo"
      },
      {
      type: "details",
      url: "#", // Add URL for details page if needed
      icon: "FaEllipsisH",
      title: "Project Details"
      }
    ],
    highlightTech: true
  },
  {
    id: 2,
    title: "Expense Tracker Dashboard",
    category: "Web Application",
    technologies: ["Next.js & Tailwind CSS"],
    description: "",
    image: "/expense_tracker_2.webp",
    links: [
      {
        type: "live",
        url: "https://expense-tracker-application-seven.vercel.app/",
        icon: "MdArrowOutward",
        title: "Live Site"
      },
      {
        type: "github",
        url: "https://github.com/AliMahmoud26/Expense-Tracker-Application",
        icon: "FaGithub",
        title: "Github Repo"
      },
      {
      type: "details",
      url: "#", // Add URL for details page if needed
      icon: "FaEllipsisH",
      title: "Project Details"
      }
    ]
  },
  {
    id: 3,
    title: "Little Lemon Restaurant",
    category: "WEBSITE",
    technologies: ["React.js & SCSS", "Refactored to Next.js & Tailwind CSS", "Meta Frontend Capstone Project"],
    description: "",
    image: "/littleLemon.jpeg",
    links: [
      {
        type: "live",
        url: "https://little-lemon-restaurant-nu-three.vercel.app/",
        icon: "MdArrowOutward",
        title: "Live Site"
      },
      {
        type: "github",
        url: "https://github.com/AliMahmoud26/Little-Lemon-Restaurant-Using-Next.js",
        icon: "FaGithub",
        title: "Github Repo"
      },
      {
      type: "details",
      url: "#", // Add URL for details page if needed
      icon: "FaEllipsisH",
      title: "Project Details"
      }
    ]
  },
  {
    id: 4,
    title: "MallMarkt Admin Panel",
    category: "Web APPLICATION",
    technologies: ["NEXT JS, Tailwind CSS & Strapi", "under development..."],
    description: "",
    image: "/dashboard2.jpg",
    links: [
      {
        type: "live",
        url: "https://mallmarkt-dashboard.vercel.app/",
        icon: "MdArrowOutward",
        title: "Live Site"
      },
      {
        type: "github",
        url: "https://github.com/AliMahmoud26/MallMarkt-Control-Panel",
        icon: "FaGithub",
        title: "Github Repo"
      },
      {
      type: "details",
      url: "#", // Add URL for details page if needed
      icon: "FaEllipsisH",
      title: "Project Details"
      }
    ],
    highlightTech: true
  },
  {
    id: 5,
    title: "Students Performance Prediction System",
    category: "Graduation Project",
    technologies: ["Excel, Power BI", "Python and Its Libraries", "Scikit-Learn, Random Forest"],
    description: "A machine learning model that predicts student performance based on various academic factors.",
    font: "lg:text-center",
    features: [
      "Data analysis using Excel and Power BI",
      "Python implementation with Scikit-Learn",
      "Random Forest algorithm for prediction"
    ],
    path: "/projects/student-performance", // Add this line
    image: "/graduate-4.jpg",
    links: [
      // {
      //   type: "live",
      //   url: "#",
      //   icon: "MdArrowOutward",
      //   title: "Live Site"
      // },
      // {
      //   type: "github",
      //   url: "#",
      //   icon: "FaGithub",
      //   title: "Github Repo"
      // },
      {
        type: "details",
        url: "#",
        icon: "FaEllipsisH",
        title: "Project Details"
      }
    ],
    highlightTech: true
  },
];