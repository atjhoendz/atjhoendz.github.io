// Edit freely. Tech names are matched to brand icons in techIcons.ts;
// unknown names still work and just get a colored dot instead of a logo.

export interface Service {
  icon: 'server' | 'layout' | 'cloud';
  title: string;
  color: string;
  pitch: string;
  tools: string[];
}

export const services: Service[] = [
  {
    icon: 'server',
    title: 'Backend & APIs',
    color: '#2a9d8f',
    pitch: 'Reliable REST and real-time services, from data modelling to background jobs and queues.',
    tools: ['NestJS', 'Express.js', 'PostgreSQL', 'BullMQ'],
  },
  {
    icon: 'layout',
    title: 'Web Applications',
    color: '#f2643d',
    pitch: 'Fast, responsive web apps and dashboards your users will enjoy using.',
    tools: ['Vue.js', 'Nuxt', 'Tailwind CSS'],
  },
  {
    icon: 'cloud',
    title: 'DevOps & Deployment',
    color: '#e9a23b',
    pitch: 'Containerised, reproducible deployments with CI/CD and sensible server setup.',
    tools: ['Docker', 'Nginx', 'Linux', 'CI/CD'],
  },
];

/** Tools you use daily and are strongest in. */
export const coreStack = ['TypeScript', 'NestJS', 'Node.js', 'Vue.js', 'Nuxt', 'PostgreSQL', 'Docker', 'Tailwind CSS'];

/** Tools you've shipped with before. */
export const alsoWorkedWith = [
  'Express.js', 'Laravel', 'Lumen', 'MongoDB', 'MySQL', 'Socket.IO', 'BullMQ',
  'Hyperledger Fabric', 'Vuetify', 'Bootstrap', 'Nginx', 'Apache', 'Git', 'Ubuntu',
];
