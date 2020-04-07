/*
JOSEPH P. PASAOA
Projects Data | Portfolio Site
*/


export const projectsData = [
  {
    index: 0,
    name: "Greenlist",
    description: `Greenlist is a scalable full-stack registry, directory, and forum application intent on enabling fashion designers and brands to find suppliers of eco-friendly green materials, and to facilitate networking within the fashion community for material reclaim.`,
    screencapUrl: "proj-greenlist-profile.png",
    urlLive: "https://greenlist-registry.herokuapp.com/",
    urlRepo: "https://github.com/joseph-p-pasaoa/greenlist__FSWeb",
    techs: [
      "PostgreSQL 12.1",
      "Express.js 4.16.1",
      "React 16.12.0",
      "React/Redux 7.2.0",
      "Redux 4.0.5",
      "React Router DOM 5.1.2",
      "Node.js 13.8.0",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Pg-promise 10.4.4",
      "Axios 0.19.2",
      "Bootstrap 4.4.1",
      "Bootstrap Carousel 4.0.3",
      "Multer 1.4.2"
    ],
    role: "group role: Tech Lead",
    difficulties: `The assignment for the Uber-sponsored Hackatahon was to create an app to aid in the fashion-sustainability movement, however most in our group hardly knew anything about the fashion industry. With the help of industry advisors, we were able to identify a large gap in the workflow of small and independent designers that we could build something for. Uber developers guided us through dry and performant database query writing and walked us through professional example stages of production and git flow.`,
    wins: `WINNER of Pursuit's Uber-sponsored 6.2 Hackathon's Most Impactful App Award!
    We reached Minimal Viable Product status in 6 days time by focusing our efforts on the primary role of our app.`,
    features: [
      "relational database",
      "REST API",
      "server error handling w/ specific http response codes",
      "front-end & back-end input validation",
      "gives user visual feedback",
      "responsive navbar",
      "images carousel integration",
      "multiple-file single operation upload",
      "conceived and developed to address a real-world problem"
    ]
  },
  {
    index: 1,
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
      "JavaScript",
      "CSS3",
      "HTML5",
      "React Toastify 5.5.0",
      "Bootstrap 4.4.1",
      "Axios 0.19.0",
      "Pg-promise 10.3.2"
    ],
    role: "group role: Head of UI/UX",
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
    index: 2,
    name: "Bingebook",
    description: "Bingebook is a full-stack binge-facilitating social networking app.",
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
      "JavaScript (ES6+)",
      "Pg-promise 10.3.2",
      "Axios 0.19.2",
      "CSS3",
      "HTML5"
    ],
    role: "personal project",
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
      "simple and clean",
      "commenting system",
      "front-end error handling and input validation"
    ]
  },
  {
    index: 3,
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
    role: "personal project",
    difficulties: "Under a few hours deadline, I had to read the YouTube Developer API documentation and figure out the proper methods to implement it. Post-MVP I had to follow up and learn how to prep my develop credentials and package.json for deployment to Firebase.",
    wins: "Plotting out the control flow and wireframing the app ahead of time saved me a lot of time in actually coding the add and it helped me figure out an optimal React component structure and React Router pathing so that I could get to MVP within the time allotted.",
    features: [
      "YouTube Developer API integration",
      "front-end input validation and error handling",
      "responsive navbar",
      "comments system",
      "simple and clean ui"
    ]
  },
  // {
  //   index: 3,
  //   name: "Middleware Demo",
  //   description: "",
  //   screencapUrl: "proj-middleware-screen-demo.png",
  //   urlLive: "",
  //   urlRepo: "https://github.com/joseph-p-pasaoa/Pursuit-Core-Web-Middleware-Lab",
  //   techs: [
  //     "Express.js 4.16.1",
  //     "Node.js 13.8.0",
  //     "JavaScript",
  //     "CSS3",
  //     "HTML5"
  //   ],
  //   role: "personal project",
  //   difficulties: "",
  //   solutions: "",
  //   features: [
  //     ""
  //   ]
  // },
  /* {
      index: 000000,
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
      solutions: "",
      features: [
        ""
      ]
  } */
];


export default projectsData;
