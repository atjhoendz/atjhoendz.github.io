import type { ImageMetadata } from 'astro';
import velocity from '../assets/projects/velocity.png';
import hlFabric from '../assets/projects/hl-fabric.png';
import prabu from '../assets/projects/prabu.png';
import qrary from '../assets/projects/qrary.png';
import portalUnpad from '../assets/projects/portalunpad.png';
import himatif from '../assets/projects/himatif.png';

export interface Project {
  year: string;
  title: string;
  role: string;
  description: string;
  stack: string[];
  url?: string;
  image: ImageMetadata;
}

export const projects: Project[] = [
  {
    year: '2021 – now',
    title: 'Velocity League',
    image: velocity,
    role: 'Backend Developer',
    description: 'Matchmaking environment for gamers.',
    stack: ['NestJS', 'Docker', 'SocketIO', 'BullMQ', 'PostgreSQL'],
  },
  {
    year: '2021',
    title: 'Blockchain Project using Hyperledger Fabric',
    image: hlFabric,
    role: 'Full Stack Developer',
    description: 'My undergraduate final project.',
    stack: ['Hyperledger Fabric', 'Hyperledger Explorer', 'VueJS', 'NestJS'],
    url: 'https://github.com/atjhoendz/backend-chaincode-ebudgeting',
  },
  {
    year: '2020',
    title: 'Prabu Official Website',
    image: prabu,
    role: 'Frontend Developer',
    description: 'Universitas Padjadjaran new student ceremonial website.',
    stack: ['VueJS', 'Vuetify'],
  },
  {
    year: '2020',
    title: 'Qrary',
    image: qrary,
    role: 'Backend Developer',
    description: 'A RESTful API to handle book browsing and lending in the Unpad library.',
    stack: ['ExpressJS', 'MongoDB', 'Docker'],
    url: 'https://github.com/atjhoendz/qrary_backend',
  },
  {
    year: '2019',
    title: 'Portal Live Unpad',
    image: portalUnpad,
    role: 'Full Stack Developer',
    description: 'Landing page of the Unpad e-learning website with a content management system.',
    stack: ['AsgardCMS', 'MySQL'],
  },
  {
    year: '2019',
    title: 'Himatif Apps',
    image: himatif,
    role: 'Full Stack Developer',
    description: 'Himatif FMIPA Unpad information system.',
    stack: ['Laravel', 'MaterializeCSS'],
  },
];
