/*
JOSEPH P. PASAOA
Projects Data | Portfolio Site
*/


export const projectsData = [
  {
    name: "Endeavor",
    description: `Endeavor is a software platform empowering organizations to manage their volunteer workforce amid events seamlessly.`,
    screencapUrl: "proj-endeavor-admin-dash.jpg",
    urlLive: "https://endeavor-app.herokuapp.com/",
    urlRepo: "https://github.com/joseph-p-pasaoa/Endeavor",
    techs: [
      "PostgreSQL 12.1",
      "React 16.13.1",
      "Node.js 12.5.0",
      "Express.js 4.16.1",
      "AWS-SDK 2.647.0",
      "SendGrid API v3 (external)",
      "Google Calendar (external)",
      "Multer 1.4.2",
      "Multer-S3 2.9.0",
      "Passport 0.3.1",
      "Passport-Local 1.0.0",
      "BCrypt 4.0.1",
      "SendGrid/Mail 7.0.1",
      "Chart.js 2.9.3",
      "Moment 2.24.0",
      "Query-String 6.12.1",
      "Node-Sass (SCSS) 4.14.1",
      "React Epic Spinners 0.4.1",
      "React Icons 3.10.0",
      "Pg-promise 10.4.4",
      "Axios 0.19.2",
      "JavaScript ES5+",
      "CSS3",
      "HTML5"
    ],
    role: "team build",
    difficulties: `From beginning to end, the three of us struggled to get a sense of how to be productive developers in the new COVID-19 lockdown era. We had to wrestle between adding more features and focusing on core functionality, wanting to learn new techs and avoiding adding too much complexity onto our plates. We had to figure out how to deal with not only our ambitiousness but secondly work/life balances stressed from being locked-down at home for months.`,
    wins: `We dedicated months to a great team effort, in addition to creating this project entirely remotely. We succeeded in implementing SendGrid, AWS, ChartJS, and MomentJS into our Minimal Viable Product. We developed a robust RESTful API with elaborate PSQL database protected behind user auth checks and input validations on all non-GET API requests. To top it off, we learned so much about software development under our mentors Dion Ridley, an Engineering Leader at Netflix, and Ben Sussman, an Engineer at Spell, including discussions on GraphQL, Apollo, Redis, among other techs.`,
    features: [
      "four distinct user roles: staff, admin (elevated staff), volunteer, student",
      "user authentication",
      "AWS-S3 + Multer for file storage",
      "SendGrid API integration for realtime notification via email",
      "Google Calendar utilization for productivity flow",
      "PostgreSQL database with indexing, 4 join tables, and soft delete",
      "ChartJS integration for statistical visualizations",
      "MomentJS integration for time handling",
      "list <--> grid visual data mode toggle",
      "RESTful API with CRUD",
      "server error handling w/ specific http response codes",
      "front-end & back-end input validation",
      "intuitive visual feedback",
      "screen media responsive",
      "carousel integration",
      "conceived and developed to address a real-life problem"
    ]
  },
  {
    name: "Conway's Game of Life: A Tribute",
    description: `A personal implementation of Conway's Game of Life, under current development, using Typescript and React, looking towards statistics collection and data presentation.`,
    screencapUrl: "proj-conways-main.png",
    urlLive: "https://tribute-to-conway.netlify.app/",
    urlRepo: "https://github.com/joseph-p-pasaoa/conways-game-of-life--react-ts",
    techs: [
      "React 16.13.1",
      "Typescript 3.9.5",
      "Javascript ES5+",
      "Node.js 12.5.0",
      "SCSS (Node-Sass 4.14.1)",
      "Material-UI 4.10.2",
      "CSS3",
      "HTML5"
    ],
    role: "personal build",
    difficulties: `Trying to figure out a system of visually building the matrix board with CSS3 but also with performance in mind has been an unexpected challenge. For one thing, discovered that using vmin for individual cells width and height can slow down responsiveness slightly. Falling back to only responsively sizing the matrix and then sizing the cells to match is a current point.`,
    wins: `I feel this is one of my cleanest builds to date with components separated by logic and/or design-function. Hard typing with Typescript has been a fun constant challenge, especially typing non-primitives and shaping interfaces. So far, I find the app is already fun to interact with, notably with its realtime responsiveness in its controls.`,
    features: [
      "object-oriented programming: class-contained business logic",
      "hard-typed via Typescript compiler",
      "fully screen media responsive leveraging SCSS and responsive practices",
      "can run selectively between 3s and 1/20s between generations",
      "speed range input with marked detentes using HTML5 and JS",
      "interactive through control panel and direct clicking, while running or halted",
      "clean and responsive user interface"
    ]
  },
  {
    name: "Greenlist",
    description: `Greenlist is a scalable full-stack registry, directory, and forum application intented to enable fashion designers and brands to find suppliers of eco-friendly green materials, and to facilitate networking within the fashion community for material reclaim.`,
    screencapUrl: "proj-greenlist-profile.png",
    urlLive: "https://greenlist-pursuit.herokuapp.com/",
    urlRepo: "https://github.com/joseph-p-pasaoa/greenlist__FSWeb",
    techs: [
      "PostgreSQL 12.1",
      "Express.js 4.16.1",
      "React 16.12.0",
      "React/Redux 7.2.0",
      "Redux 4.0.5",
      "React Router DOM 5.1.2",
      "Node.js 13.8.0",
      "JavaScript ES5+",
      "CSS3",
      "HTML5",
      "Pg-promise 10.4.4",
      "Axios 0.19.2",
      "Bootstrap 4.4.1",
      "Bootstrap Carousel 4.0.3",
      "Multer 1.4.2"
    ],
    role: "team role: Tech Lead",
    difficulties: `The assignment for the Uber-sponsored Hackatahon was to create an app to aid in the fashion-sustainability movement, however most in our group hardly knew anything about the fashion industry. With the help of industry advisors, we were able to identify a large gap in the workflow of small and independent designers that we could build something for. Uber developers guided us through dry and performant database query writing and walked us through professional example stages of production and git flow.`,
    wins: `WE WON Pursuit's Uber-sponsored 6.2 Hackathon's Most Impactful App Award! We reached Minimal Viable Product status in 6 days time by focusing our efforts on the primary role of our app.`,
    features: [
      "relational database",
      "REST API",
      "server error handling w/ specific http response codes",
      "front-end & back-end input validation",
      "intuitive visual feedback",
      "responsive navbar",
      "images carousel integration",
      "multiple-file single operation upload",
      "conceived and developed to address a real-world problem"
    ]
  },
  {
    name: "SuitApp",
    description: "SuitApp is a social media application founded on the idea of bringing together the most passionate and creative minds in the world of Cosplay and giving them the tools to reach a wide audience of fans who appreciate and celebrate their work.",
    screencapUrl: "proj-suitapp-screen-feed.png",
    urlLive: "https://suit-app.herokuapp.com/",
    urlRepo: "https://github.com/joseph-p-pasaoa/suitApp__FullStack",
    techs: [
      "PostgreSQL 12.1",
      "Express.js 4.16.1",
      "React 16.12.0",
      "React Router DOM 5.1.2",
      "Node.js 13.8.0",
      "JavaScript ES5+",
      "CSS3",
      "HTML5",
      "React Toastify 5.5.0",
      "Bootstrap 4.4.1",
      "Axios 0.19.0",
      "Pg-promise 10.3.2"
    ],
    role: "team role: Head of UI/UX",
    difficulties: "This project came at a time when we were all juggling life priorities but we took charge of the time we had, coded to our strengths in React, Express, and PostgreSQL, and came up with a robust app full of ui character.",
    wins: "We developed effective, successful algorithms for parsing user-commented hashtags, saving them in our database, searching them using unique queries, and then displaying the sorted search results.",
    features: [
      "relational database",
      "REST API",
      "unique hashtag parsing, handling, and searching",
      "back-end & front-end error handling w/ specific http response codes",
      "back-end & front-end input validation",
      "user authentication system via local storage",
      "standout ui design",
      "file upload",
      "pop-up notifications"
    ]
  },
  {
    name: "Bingebook",
    description: "Bingebook is a full-stack binge-facilitating social networking app. Users are able to keep track of shows they're currently watching, shows they have finshed watching, and shows they keep on a To Watch list. Each user-to-show binge is commentable so Bingebook can be an effective solution for recommendations and discussion.",
    screencapUrl: "proj-bingebook-search.png",
    urlLive: "https://bingebook.herokuapp.com/",
    urlRepo: "https://github.com/joseph-p-pasaoa/bingebook__FSWeb",
    techs: [
      "PostgreSQL 12.1",
      "Express.js 4.16.1",
      "React 16.12.0",
      "React/Redux 7.1.3",
      "Redux 4.0.5",
      "React Router Web 5.1.2",
      "Node.js 13.8.0",
      "JavaScript ES5+",
      "Pg-promise 10.3.2",
      "Axios 0.19.2",
      "CSS3",
      "HTML5"
    ],
    role: "personal build",
    difficulties: "The pathing with React Router got a little tricky especially with multiple junction tables in the database allowing for various general path endpoints. It helped to document out the backend process so that I had a good map of what I had and could hone in on what I wanted to accomplish.",
    wins: "I borrowed React's rule to keep one source of truth and designed Bingebook to reference OMDb's (IMDb's) unique ids for films and shows as the standard to determine what shows exist and are usable. Keeping my own database and setting Bingebook up to always reference what was found in the OMDb/IMDb added a lot to the complexity of the logic but it was a fun challenge to overcome!",
    features: [
      "multiple cross-reference tables",
      "REST API",
      "relational database",
      "External OMDb API integration",
      "back-end error handling w/ specific http response codes",
      "back-end input validation",
      "responsive navbar",
      "simple and clean ui",
      "comments system",
      "front-end error handling and input validation"
    ]
  },
  {
    name: "YouTube Abbreviated",
    description: "YouTube Abbreviated is a straightforward multiple component React app where a user can query and obtain YouTube video results, watch embedded videos, and comment on them locally.",
    screencapUrl: "proj-ytabbrev-screen-demo.png",
    urlLive: "https://yt-abbreviated.web.app/",
    urlRepo: "https://github.com/joseph-p-pasaoa/youtube_abbreviated__React",
    techs: [
      "React 16.12.0",
      "React Router DOM 5.1.2",
      "React-YouTube 7.9.0",
      "Node.js 12.1",
      "JavaScript ES5+",
      "YouTube Developer API v3",
      "Axios 0.19.1",
      "Firebase",
      "HTML5",
      "CSS3"
    ],
    role: "personal build",
    difficulties: "Under a few hours deadline, I had to read the YouTube Developer API documentation and figure out the standard methods to implement it. Post-MVP I followed up and learned how to prep my developer credentials and project package.json for deployment to Firebase.",
    wins: "Plotting out the control flow and wireframing the app ahead of time saved me a lot of time in actually coding the app and helped me figure out an optimal React component structure and the pathing with React Router so that I could get to MVP within the time allotted.",
    features: [
      "YouTube Developer API integration",
      "front-end input validation and error handling",
      "responsive navbar",
      "comments system",
      "simple and clean ui"
    ]
  },
  {
    name: "Click, Pass the Cent",
    description: "Click, Pass the Cent is an addictive clicker game built with the React framework. The goal of the game is to try to go over 100 with the highest score and in the fastest time.",
    screencapUrl: "proj-clickpassthecent-almost.png",
    urlLive: "https://clickpassthecent.netlify.com/",
    urlRepo: "https://github.com/joseph-p-pasaoa/click_pass_the_cent__React",
    techs: [
      "React 16.12.0",
      "Node.js 12.13.1",
      "JavaScript ES5+",
      "HTML5",
      "CSS3"
    ],
    role: "personal build",
    difficulties: "There were a lot of lessons to be learned one of the first times bringing React JSX, HTML5, and CSS3 together. Setting a functional setInterval and figuring out how to clear it without using React component lifecycles took some time playing around with the logic but I devised a successful solution manipulating the state with class methods.",
    wins: "Trying to get a good feel of how to organize React component flow control took hours of research and finding and breaking down other developers' works. I ended up reading a lot on quality standards and practices, as well as the React documentation and CSS3 standards.",
    features: [
      "React state controls dynamic CSS",
      "intuitive visual feedback",
      "simple and responsive ui",
      "computative use of state manipulation"
    ]
  },
  /* {
      name: "",

      description: "",
      screencapUrl: "screencap_welcome_thumb.png",
      urlLive: "http://",
      urlRepo: "http://",
      techs: [
        "",
      ],
      role: "",
      difficulties: "",
      wins: "",
      features: [
        ""
      ]
  } */
];


export default projectsData;
