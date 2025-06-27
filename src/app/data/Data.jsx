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
      lineHeight: "h-[14rem]"
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
      lineHeight: "h-[12rem]"
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
      lineHeight: "h-[26rem]"
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
      {
        type: "live",
        url: "https://react-nugget-app-menu-filtering.vercel.app/",
        icon: "MdArrowOutward",
        title: "Live Site"
      },
      {
        type: "github",
        url: "https://github.com/AliMahmoud26/React-Nuggets-Apps",
        icon: "FaGithub",
        title: "Github Repo"
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
        url: "https://little-lemon-silk.vercel.app/",
        icon: "MdArrowOutward",
        title: "Live Site"
      },
      {
        type: "github",
        url: "https://github.com/AliMahmoud26/Meta-Frontend-Capstone-Project",
        icon: "FaGithub",
        title: "Github Repo"
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
      }
    ],
    highlightTech: true
  },
];