export interface Project {
  year: string;
  title: string;
  role: string;
  description: string;
  stack: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    year: '2021 – now',
    title: 'Velocity League',
    role: 'Backend Developer',
    description: 'Matchmaking environment for gamers.',
    stack: ['NestJS', 'Docker', 'SocketIO', 'BullMQ', 'PostgreSQL'],
  },
  {
    year: '2021',
    title: 'Blockchain Project using Hyperledger Fabric',
    role: 'Full Stack Developer',
    description: 'My undergraduate final project.',
    stack: ['Hyperledger Fabric', 'Hyperledger Explorer', 'VueJS', 'NestJS'],
    url: 'https://github.com/atjhoendz/backend-chaincode-ebudgeting',
  },
  {
    year: '2020',
    title: 'Prabu Official Website',
    role: 'Frontend Developer',
    description: 'Universitas Padjadjaran new student ceremonial website.',
    stack: ['VueJS', 'Vuetify'],
  },
  {
    year: '2020',
    title: 'Qrary',
    role: 'Backend Developer',
    description: 'A RESTful API to handle book browsing and lending in the Unpad library.',
    stack: ['ExpressJS', 'MongoDB', 'Docker'],
    url: 'https://github.com/atjhoendz/qrary_backend',
  },
  {
    year: '2019',
    title: 'Portal Live Unpad',
    role: 'Full Stack Developer',
    description: 'Landing page of the Unpad e-learning website with a content management system.',
    stack: ['AsgardCMS', 'MySQL'],
  },
  {
    year: '2019',
    title: 'Himatif Apps',
    role: 'Full Stack Developer',
    description: 'Himatif FMIPA Unpad information system.',
    stack: ['Laravel', 'MaterializeCSS'],
  },
];
