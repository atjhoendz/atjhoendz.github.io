// Edit freely. Tech names are matched to brand icons in techIcons.ts;
// unknown names still work and just get a colored dot instead of a logo.

export interface Service {
  icon: 'server' | 'search' | 'cloud';
  title: string;
  color: string;
  pitch: string;
  tools: string[];
}

export const services: Service[] = [
  {
    icon: 'server',
    title: 'Backend & Microservices',
    color: '#2a9d8f',
    pitch: 'Go services and GraphQL APIs built for scale, with event-driven messaging and safe, zero-downtime migrations.',
    tools: ['Go', 'GraphQL', 'NATS JetStream', 'Cloud Functions'],
  },
  {
    icon: 'search',
    title: 'Search & Data',
    color: '#f2643d',
    pitch: 'Fast, cost-efficient search and data pipelines, from tuning feed search to keeping stores in sync.',
    tools: ['Typesense', 'Manticore Search', 'CockroachDB', 'Bigtable'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & Integrations',
    color: '#e9a23b',
    pitch: 'Running workloads on Google Cloud and Kubernetes, plus integrations with social media and app-store APIs.',
    tools: ['Google Cloud', 'Kubernetes', 'Docker', 'Social APIs'],
  },
];

/** Tools you use daily and are strongest in. */
export const coreStack = ['Go', 'GraphQL', 'NATS', 'Typesense', 'Manticore Search', 'CockroachDB', 'Google Cloud', 'Kubernetes', 'Docker'];

/** Tools you've shipped with before. */
export const alsoWorkedWith = [
  'Elasticsearch', 'Bigtable', 'Python', 'JavaScript', 'TypeScript', 'Node.js', 'NestJS',
  'Vue.js', 'Nuxt', 'PostgreSQL', 'MongoDB', 'MySQL', 'Laravel', 'Git',
];
