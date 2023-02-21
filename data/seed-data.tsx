import {
  FaUserAstronaut,
  FaCode,
  FaFolderOpen,
  FaRocketchat,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

import { AiFillGithub } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { GiDiploma, GiSmartphone } from 'react-icons/gi';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const navItems = [
  {
    id: '01-about',
    description: 'About',
    icon: <FaUserAstronaut className='h-6 w-6' />,
    href: '#about',
  },
  {
    id: '01-skills',
    description: 'Skills',
    icon: <FaCode className='h-6 w-6' />,
    href: '#skills',
  },
  {
    id: '01-projects',
    description: 'Projects',
    icon: <FaFolderOpen className='h-6 w-6' />,
    href: '#projects',
  },
  {
    id: '01-connect',
    description: 'Connect',
    icon: <FaRocketchat className='h-6 w-6' />,
    href: '#contact',
  },
];

export const technologies = [
  {
    id: '01-html5',
    name: 'HTML5',
    path: '/assets/logos/html.svg',
  },
  {
    id: '02-css',
    name: 'CSS',
    path: '/assets/logos/css.svg',
  },
  {
    id: '03-javascript',
    name: 'JavaScript',
    path: '/assets/logos/javascript.svg',
  },
  {
    id: '04-git',
    name: 'Git',
    path: '/assets/logos/git.svg',
  },
  {
    id: '05-react',
    name: 'React JS',
    path: '/assets/logos/react.svg',
  },
  {
    id: '06-tailwind',
    name: 'Tailwind CSS',
    path: '/assets/logos/tailwind.svg',
  },
  {
    id: '07-typescript',
    name: 'TypeScript',
    path: '/assets/logos/typescript.svg',
  },
  {
    id: '08-next',
    name: 'Next JS',
    path: '/assets/logos/nextjs.png',
  },
  {
    id: '09-node',
    name: 'Node JS',
    path: '/assets/logos/nodejs.svg',
  },
  {
    id: '10-mongo',
    name: 'Mongo DB',
    path: '/assets/logos/mongodb.svg',
  },
  {
    id: '11-materialUi',
    name: 'Material UI',
    path: '/assets/logos/materialUi.svg',
  },
  {
    id: '12-bootstrap',
    name: 'Bootstrap',
    path: '/assets/logos/bootstrap.svg',
  },
  {
    id: '13-redux',
    name: 'Redux Toolkit',
    path: '/assets/logos/redux.svg',
  },
  {
    id: '14-firebase',
    name: 'Firebase',
    path: '/assets/logos/firebase.svg',
  },
];

export const data = {
  featuredProjects: [
    {
      id: '01-testloShop',
      title: 'Teslo Shop',
      description:
        'Clone of the Tesla store, using Material UI for the styles and Next JS and MongoDB for the Frontend and database. It has user authentication using Next Auth, path protection, functional shopping cart, PayPal payments and administrative panel to view products in stock, orders, sales and each of the customers with account created',

      technologies: [
        {
          id: '01-nextJs',
          path: '/assets/logos/next3.svg',
        },
        {
          id: '02-materialUi',
          path: '/assets/logos/materialUi.svg',
        },
        {
          id: '03-mongo',
          path: '/assets/logos/mongodb.svg',
        },
      ],

      imagePath: '/assets/projects/teslo.png',

      githubPath: 'https://github.com/sfuentes-dev/teslo-shop-app',
      demoPath: 'https://teslo-shop-app-rho.vercel.app/',
      flexReverse: false,
    },

    {
      id: '02-openJira',
      title: 'Open Jira',
      description:
        'A simple Full Stack clone of the Jira software, using Next JS, Material UI and MongoDB. This application allows us to create, edit and delete tasks to be performed and with a drag and drop edit their current state.',

      technologies: [
        {
          id: '01-nextJs',
          path: '/assets/logos/next3.svg',
        },
        {
          id: '02-materialUi',
          path: '/assets/logos/materialUi.svg',
        },
        {
          id: '03-mongo',
          path: '/assets/logos/mongodb.svg',
        },
      ],

      imagePath: '/assets/projects/OpenJira.png',

      githubPath: 'https://github.com/sfuentes-dev/OpenJira-Clone-',
      demoPath: 'https://open-jira-clone.vercel.app/',
      flexReverse: true,
    },

    {
      id: '03-journal-app',
      title: 'Journal App',
      description:
        'Full stack application of journal of daily events. It has gmail authentication thanks to Firebase and classic authentication with any email platform. We can upload images for each activity which are stored in cloudinary.',

      technologies: [
        {
          id: '01-react',
          path: '/assets/logos/react.svg',
        },
        {
          id: '02-materialUi',
          path: '/assets/logos/materialUi.svg',
        },
        {
          id: '03-firebase',
          path: '/assets/logos/firebase.svg',
        },
        {
          id: '04-redux',
          path: '/assets/logos/redux.svg',
        },
      ],

      imagePath: '/assets/projects/journal.png',

      githubPath: 'https://github.com/sfuentes-dev/journal-app',
      demoPath: 'https://journall-lake.vercel.app/',
      flexReverse: false,
    },
  ],

  otherProjects: [
    {
      id: '01-calendarApp',
      title: 'Calendar App',
      description:
        'Application similar to the Gmail calendar. For this project we used the MERN stack and Bootstrap to style the application.',

      technologies: [
        {
          id: '01-reactJs',
          image: '/assets/logos/react.svg',
        },
        {
          id: '02-mongo',
          image: '/assets/logos/mongodb.svg',
        },
        {
          id: '03-nodejs',
          image: '/assets/logos/nodejs.svg',
        },
        {
          id: '04-bootstrap',
          image: '/assets/logos/bootstrap.svg',
        },
      ],

      githubPath: 'https://github.com/sfuentes-dev/MERN---Calendar-Frontend',
      demoPath: 'https://mern-calendar-frontend-gamma.vercel.app/',
    },
  ],
};

export const contact = [
  {
    id: '01-mail',
    title: 'Email',
    subtitle: 'sfuentes.dev@gmail.com',
    description: 'Send a Message',
    icon: <MdEmail className='w-10 h-10' />,
    href: 'mailto:sfuentes.dev@gmail.com',
  },
  {
    id: '02-whatsapp',
    title: 'WhatsApp',
    subtitle: '+57 (316) 627 2927',
    description: 'Send a Message',
    icon: <BsWhatsapp className='w-10 h-10' />,
    href: 'https://api.whatsapp.com/send?phone=573166272927',
  },
  {
    id: '03-telegram',
    title: 'Telegram',
    subtitle: '+57 (316) 627 2927',
    description: 'Send a Message',
    icon: <FaTelegramPlane className='w-10 h-10' />,
    href: 'https://t.me/sfuentes16',
  },
  {
    id: '01-phone',
    title: 'Phone',
    subtitle: '+57 (316) 627 2927',
    description: "Let's Talk",
    icon: <GiSmartphone className='w-10 h-10' />,
    href: '#contact',
  },
];

export const socialMedia = [
  {
    href: 'https://github.com/sfuentes-dev',
    icon: (
      <AiFillGithub className='w-7 h-7 hover:text-[#F9CB28] hover:-translate-y-1 transition-all ease-linear duration-300' />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/adriansebastianfuentesmart%C3%ADnez16/',
    icon: (
      <FaLinkedinIn className='w-6 h-6 hover:text-[#F9CB28] hover:-translate-y-1 transition-all ease-in-out duration-300' />
    ),
  },
  {
    href: 'https://www.instagram.com/bastian.fuentes16/',
    icon: (
      <FiInstagram className='w-6 h-6 hover:text-[#F9CB28] hover:-translate-y-1 transition-all ease-in-out duration-300' />
    ),
  },
  {
    href: 'https://fernando-herrera.com/#/studentdetail/sfuentes.dev@gmail.com',
    icon: (
      <GiDiploma className='w-6 h-6 hover:text-[#F9CB28] hover:-translate-y-1 transition-all ease-in-out duration-500' />
    ),
  },
];
