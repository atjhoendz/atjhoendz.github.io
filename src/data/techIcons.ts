import {
  siApache, siBootstrap, siCockroachlabs, siDocker, siElasticsearch, siExpress, siGit, siGithubactions,
  siGo, siGooglebigtable, siGooglecloud, siGraphql, siJavascript, siKubernetes, siLaravel, siLinux,
  siLumen, siMongodb, siMysql, siNatsdotio, siNestjs, siNginx, siNodedotjs, siNuxt, siPostgresql,
  siPython, siSocketdotio, siTailwindcss, siTypescript, siUbuntu, siVuedotjs, siVuetify,
} from 'simple-icons';

interface Icon { path: string; hex: string }

const icons: Record<string, Icon> = {
  'Apache': siApache,
  'Bigtable': siGooglebigtable,
  'Bootstrap': siBootstrap,
  'CI/CD': siGithubactions,
  'CockroachDB': siCockroachlabs,
  'Docker': siDocker,
  'Elasticsearch': siElasticsearch,
  'Express.js': siExpress,
  'Git': siGit,
  'Go': siGo,
  'Google Cloud': siGooglecloud,
  'GraphQL': siGraphql,
  'JavaScript': siJavascript,
  'Kubernetes': siKubernetes,
  'Laravel': siLaravel,
  'Linux': siLinux,
  'Lumen': siLumen,
  'MongoDB': siMongodb,
  'MySQL': siMysql,
  'NATS': siNatsdotio,
  'NATS JetStream': siNatsdotio,
  'NestJS': siNestjs,
  'Nginx': siNginx,
  'Node.js': siNodedotjs,
  'Nuxt': siNuxt,
  'PostgreSQL': siPostgresql,
  'Python': siPython,
  'Socket.IO': siSocketdotio,
  'Tailwind CSS': siTailwindcss,
  'TypeScript': siTypescript,
  'Ubuntu': siUbuntu,
  'Vue.js': siVuedotjs,
  'Vuetify': siVuetify,
};

export function getTechIcon(name: string): Icon | undefined {
  return icons[name];
}

/** True for very dark brand colors that would vanish on a dark background. */
export function isDarkBrand(hex: string): boolean {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.3;
}
