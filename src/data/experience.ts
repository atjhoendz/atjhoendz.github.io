export interface Stat {
  value: string;
  label: string;
}

export interface YearBlock {
  year: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  start: string; // e.g. '2021'
  end: string; // e.g. '2023' or 'Present'
  location?: string;
  about?: string; // one-line context under the header
  stats?: Stat[]; // headline numbers
  years?: YearBlock[]; // highlights grouped by year, newest first
  highlights?: string[]; // simple flat list (used when `years` is absent)
  stack: string[];
}

// Newest job first.
export const experience: Experience[] = [
  {
    role: 'Backend Engineer',
    company: 'kumparan',
    companyUrl: 'https://kumparan.com',
    start: '2021',
    end: 'Present',
    location: 'Indonesia',
    about:
      "Building and scaling the backend of kumparan's news platform, while shipping product features every year alongside the work below.",
    stats: [
      { value: '25GB → <1GB', label: 'Feed search memory' },
      { value: '<50ms', label: 'Feed latency, from 150–300ms' },
      { value: '800 → 10', label: 'GKE pods after Go rewrite' },
      { value: '$200+ → $69', label: 'Monthly feed search cost' },
    ],
    years: [
      {
        year: '2026',
        items: [
          'Replaced Typesense with Manticore Search for the news feed, cutting memory from 25GB to under 1GB, latency from 150–300ms to under 50ms, and cost from $200+ to $69 a month.',
          'Built carousel publishing to Instagram, Facebook, X and TikTok, supporting images, videos or both depending on each platform.',
          'Simplified the video transcoding flow and made transcoding faster.',
        ],
      },
      {
        year: '2025',
        items: [
          'Built summary-service with the Data Science team, evolving a simple implementation into a dedicated service that summarizes single stories and multiple stories within a topic or collection.',
          "Upgraded the Cloud Functions that listen to and publish events for kumparan's payment system to 2nd gen, with zero downtime.",
          'Built a short URL platform with usage monitoring.',
        ],
      },
      {
        year: '2024',
        items: [
          'Built a video publishing platform that uploads vertical videos to Instagram, Facebook, X, TikTok and YouTube to scale content production.',
          'Implemented content personalization with the Data Science team on Bigtable.',
          'Built a Quick Count platform that reads from Google Sheets and serves results fast on kumparan.',
          'Improved performance and scalability across existing features.',
        ],
      },
      {
        year: '2023',
        items: [
          'Migrated the Tracker Service from Python to Go, shrinking it from 800 GKE pods to 10.',
          'Implemented refunds for Apple App Store and Google Play in-app purchases.',
          'Built a Ramadan prayer times platform.',
        ],
      },
      {
        year: '2022',
        items: [
          'Led the migration of all kumparan services from NATS Streaming to NATS JetStream, building a shared connector library to standardize usage, with zero downtime and no lost messages.',
          'Built automated data-integrity checks and sync between Elasticsearch and CockroachDB (the source of truth).',
          'Researched Server-Sent Events as an OKR initiative.',
        ],
      },
      {
        year: '2021',
        items: [
          'Rewrote Ngumpar v2 as Go microservices with gqlgen (GraphQL).',
          'Migrated Ngumpar v1 to v2 in JavaScript for cleaner structure and readability.',
          'Improved the Ngumpar v1 codebase inherited from a vendor.',
        ],
      },
    ],
    stack: ['Go', 'GraphQL', 'NATS JetStream', 'Elasticsearch', 'CockroachDB', 'Manticore Search', 'Google Cloud', 'Kubernetes', 'Bigtable', 'Python'],
  },
];
