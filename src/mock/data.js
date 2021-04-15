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
  subtitle: 'Statistics & Finance + CS & Math',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Hey there! I'm an undergrad at New York University's Stern School of Business co-concentrating in Finance & Statistics and joint-minoring in Computer Science and Mathematics.",
  paragraphTwo:
    'My current interests are in algorithmic trading, quantitative research, and machine learning.',
  paragraphThree: 'In my spare time I am a competitive fencer and cooking enthusiast.',
  resume: 'https://drive.google.com/file/d/1PuDd7nszJbjVcylLCZU3liQbJD0srEWq/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'done.png',
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
      'Developed custom Named Entity Recognition (NER) model using SpaCy to predict and classify company, location, and product information from the New York Times and the Atlanta Daily World advertisements. Built a program with BeautifulSoup that reduced extraction time of a data set with 10 million records by 80%.',
    info2: '',
    repo: 'https://github.com/nickrwu/Datathon-NLP',
    url: 'https://drive.google.com/file/d/1eCpQxbUkfE0DCwmdudNwD_gwyc8UdFV7/view?usp=sharing', // if no url, the button will not show up
  },
  {
    id: nanoid(),
    img: 'YouTube.jpg',
    title: 'YouTube Trending',
    info:
      'Predicted common characteristics of trending videos on YouTube by predicting how engaging a trending video is likely to be. Automated data collection using YouTube’s Data API to record statistics of trending videos through JSON processing. Trained gradient boosted tree algorithm with XGBoost and optimized model hyperparameters with Optuna.',
    info2: '',
    repo: 'https://github.com/nickrwu/YouTube-Trending',
    url: 'https://drive.google.com/file/d/1uf0sMXe4I9CMLMrsC8EncS9I0Y35aHlg/view?usp=sharing', // if no url, the button will not show up
  },
  {
    id: nanoid(),
    img: 'understood.jpg',
    title: 'Understood.org Partner Recommender (NYU Datathon)',
    info:
      'Predicted and recommended a set of the top 10 non-profit organizations for Understood.org to collaborate with based on matching the statistics and characteristics of their current partners. Built a customized python-based data collection tool using Selenium to extract 3,000+ non-profit data from GuideStar’s reports. Developed models for classification and calculated feature importance using Pandas and sklearn.',
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
      'Engineered an iOS app titled “Think+” (Think Positive), an application aimed to treat anxiety disorders including depression, phobias, and PTSD utilizing Eye Movement Desensitization and Reprocessing (EMDR) therapy. Researched and coded the main functionality of the application in Swift using SQLite to store user sessions data in a database.',
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
