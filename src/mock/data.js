import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nicholas Wu', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Nicholas Wu', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Nicholas Wu',
  subtitle: 'Statistics + Data Science',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hey there! I'm an undergrad at New York University's Stern School of Business majoring in Finance and minoring in Data Science.",
  paragraphTwo: 'My current interests are in algorithmic trading and machine learning.',
  paragraphThree: 'In my spare time I am competitive fencer and a cooking enthusiast.',
  resume: 'https://drive.google.com/file/d/1wzpvyF4jmJgYCQNyoBGvWQfsseDQeI7v/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'YouTube.jpg',
    title: 'YouTube Trending',
    info: "Predicting engagement (likes and comments) on international and domestic YouTube trending videos based \
    on statistics extracted using YouTube's API.",
    info2: '',
    repo: 'https://github.com/nickrwu/YouTube-Trending',
    url: '', // if no url, the button will not show up
  },
  {
    id: nanoid(),
    img: 'understood.jpg',
    title: 'Understood.org Datathon @ NYU',
    info: "Predicted and recommended a set of the top 10 non-profit organizations for Understood.org\
    to collaborate with based on matching the statistics and characteristics of their current partners. Built\
    a customized python-based data collection tool using Selenium to extract 3,000+ non-profit data from GuideStar’s\
    reports. Developed models for classification and calculated feature importance using Pandas and sklearn.",
    info2: '',
    repo: 'https://github.com/nickrwu/Datathon-Understood',
    url: 'https://dsc-nyu.github.io/datathon/', // if no url, the button will not show up
  },
  {
    id: nanoid(),
    img: 'thinkpos.jpg',
    title: 'Think+ (Think Positive)',
    info: 'Engineered an iOS app titled “Think+” (Think Positive), an application aimed to treat anxiety disorders including depression, \
    phobias, and PTSD utilizing Eye Movement Desensitization and Reprocessing (EMDR) therapy. Researched and coded the main functionality \
    of the application in Swift using SQLite to store user sessions data in a database.',
    info2: 'Accomplished the sale of 4,000+ units',
    repo: 'https://github.com/nickrwu/ThinkPositive',
    url: '', // if no url, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to get in touch with me below.',
  btn: 'Email Me',
  email: 'nicholas.wu@stern.nyu.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicholas-wu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nickrwu',
    },
    {
      id: nanoid(),
      name: 'kaggle',
      url: 'https://www.kaggle.com/nickrwu',
    },
    {
      id: nanoid(),
      name: 'facebook-square',
      url: 'https://www.facebook.com/nickrwu12',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
