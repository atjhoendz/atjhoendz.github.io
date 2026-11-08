// The old Nuxt site registered a service worker at /sw.js.
// This replacement unregisters itself so returning visitors get the new site.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async () => {
  await self.registration.unregister();
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach((c) => c.navigate(c.url));
});
