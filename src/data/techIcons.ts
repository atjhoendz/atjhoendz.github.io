import {
  siApache, siBootstrap, siDocker, siExpress, siGit, siGithubactions, siLaravel, siLinux, siLumen,
  siMongodb, siMysql, siNestjs, siNginx, siNodedotjs, siNuxt, siPostgresql, siSocketdotio,
  siTailwindcss, siTypescript, siUbuntu, siVuedotjs, siVuetify,
} from 'simple-icons';

interface Icon { path: string; hex: string }

const icons: Record<string, Icon> = {
  'Apache': siApache,
  'Bootstrap': siBootstrap,
  'CI/CD': siGithubactions,
  'Docker': siDocker,
  'Express.js': siExpress,
  'Git': siGit,
  'Laravel': siLaravel,
  'Linux': siLinux,
  'Lumen': siLumen,
  'MongoDB': siMongodb,
  'MySQL': siMysql,
  'NestJS': siNestjs,
  'Nginx': siNginx,
  'Node.js': siNodedotjs,
  'Nuxt': siNuxt,
  'PostgreSQL': siPostgresql,
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

/** True for near-black brand colors that would vanish on a dark background. */
export function isDarkBrand(hex: string): boolean {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.2;
}
