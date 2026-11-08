export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  start: string; // e.g. 'Jan 2023'
  end: string; // e.g. 'Dec 2024' or 'Present'
  location?: string; // e.g. 'Remote', 'Bandung'
  highlights: string[];
  stack: string[];
}

// TODO: replace these placeholder entries with your real work experience (newest first).
export const experience: Experience[] = [
  {
    role: 'Backend Engineer',
    company: 'Company Name',
    start: '2023',
    end: 'Present',
    location: 'Remote',
    highlights: [
      'Placeholder: describe what you built and the impact it had.',
      'Placeholder: a second achievement, ideally with a number.',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Company Name',
    start: '2021',
    end: '2023',
    location: 'Indonesia',
    highlights: [
      'Placeholder: describe your main responsibilities.',
      'Placeholder: a project or result you are proud of.',
    ],
    stack: ['Vue.js', 'Express.js', 'MongoDB'],
  },
];
