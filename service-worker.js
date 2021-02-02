// import { CacheableResponsePlugin } from 'workbox-cacheable-response/CacheableResponsePlugin';
// import { CacheFirst, NetworkFirst } from 'workbox-strategies';
// import { ExpirationPlugin } from 'workbox-expiration/ExpirationPlugin';
import { precacheAndRoute } from 'workbox-precaching';
// import { registerRoute } from 'workbox-routing/registerRoute';
import { clientsClaim } from 'workbox-core';

console.log('aaa')

// precacheAndRoute(self.__WB_MANIFEST);
self.addEventListener('activate', function(event) {
  console.log('Claiming control');
  return self.clients.claim();
});
self.addEventListener('install', (event) => console.log('installed'))





self.addEventListener('fetch',(event) => {
  console.log('fetch');
});
