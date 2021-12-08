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
  subtitle: 'Finance & Statistics + Computer Science',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hey there! I'm a Sophomore at New York University's Stern School of Business concentrating in Finance + Statistics and double majoring in Computer Science.",
  paragraphTwo: 'I am currently pursuing a career in Product Management.',
  paragraphThree:
    'In my spare time I enjoy competitive fencing, cooking, playing poker, and bouldering.',
  resume: 'https://drive.google.com/file/d/1PuDd7nszJbjVcylLCZU3liQbJD0srEWq/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'done.jpg',
    title: 'Patient Registration Form',
    info:
      'Deployed an appointment registration form for ADHD patients as a challenge for done. Created with a ReactJS frontend and Django backend.',
    info2: '',
    repo: 'https://github.com/nickrwu/Patient-Reg',
    url: 'https://nw-patient-reg.herokuapp.com', // if no url, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proquest.jpg',
    title: 'Historical Newspaper NLP (NYU Datathon)',
    info:
      'Developed custom Named Entity Recognition (NER) model using SpaCy to predict and classify company, location, and product information from the New York Times and the Atlanta Daily World advertisements.',
    info2: 'Placed 1st out of 20+ teams',
    repo: 'https://github.com/nickrwu/Datathon-NLP',
    url: 'https://drive.google.com/file/d/1eCpQxbUkfE0DCwmdudNwD_gwyc8UdFV7/view?usp=sharing', // if no url, the button will not show up
  },
  {
    id: nanoid(),
    img: 'YouTube.jpg',
    title: 'YouTube Trending',
    info:
      'Analyzed common characteristics of trending videos on YouTube, predicting the number of likes and views for 2,500+ videos.',
    info2: '',
    repo: 'https://github.com/nickrwu/YouTube-Trending',
    url: 'https://drive.google.com/file/d/1uf0sMXe4I9CMLMrsC8EncS9I0Y35aHlg/view?usp=sharing', // if no url, the button will not show up
  },
  {
    id: nanoid(),
    img: 'understood.jpg',
    title: 'Understood.org Partner Recommender (NYU Datathon)',
    info:
      'Predicted and recommended a set of the top 10 non-profit organizations for Understood.org to collaborate with based on matching the statistics and characteristics of their current partners.',
    info2: '',
    repo: 'https://github.com/nickrwu/Datathon-Understood',
    url: '', // if no url, the button will not show up
    // NOTE: Insert into URL https://dsc-nyu.github.io/datathon/
  },
  {
    id: nanoid(),
    img: 'thinkpos.jpg',
    title: 'Think+ (Think Positive)',
    info:
      'Engineered an iOS app titled “Think+” (Think Positive), an application aimed to treat anxiety disorders including depression, phobias, and PTSD utilizing Eye Movement Desensitization and Reprocessing (EMDR) therapy.',
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
