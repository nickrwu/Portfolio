import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Nicholas Wu',
  subtitle: 'Finance + Data Science',
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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to contact me through my email',
  btn: '',
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
      name: 'google-drive',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
