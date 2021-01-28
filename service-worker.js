import { CacheableResponsePlugin } from 'workbox-cacheable-response/CacheableResponsePlugin';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration/ExpirationPlugin';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /^https:\/\/mylibrary\.io\/graphql\?.+cache%22:1/,
  new NetworkFirst({
    cacheName: 'short-cache',
    matchOptions: {
      ignoreVary: true
    },
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 300,
        purgeOnQuotaError: true
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

registerRoute(
  /^https:\/\/mylibrary\.io\/graphql\?.+cache%22:5/,
  new NetworkFirst({
    cacheName: 'medium-cache',
    matchOptions: {
      ignoreVary: true
    },
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: true
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

registerRoute(
  /^https:\/\/mylibrary\.io\/graphql\?.+cache%22:9/,
  new NetworkFirst({
    cacheName: 'max-cache',
    matchOptions: {
      ignoreVary: true
    },
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 63072e3,
        purgeOnQuotaError: true
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

registerRoute(
  /^https:\/\/s3.amazonaws.com\/my-library-cover-uploads/,
  new NetworkFirst({
    cacheName: 'local-images1',
    matchOptions: {
      ignoreVary: true
    },
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 63072e3,
        purgeOnQuotaError: true
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

registerRoute(
  /^https:\/\/my-library-cover-uploads.s3.amazonaws.com/,
  new NetworkFirst({
    cacheName: 'local-images2',
    matchOptions: {
      ignoreVary: true
    },
    plugins: [
      new ExpirationPlugin({
        maxEntries: 500,
        maxAgeSeconds: 63072e3,
        purgeOnQuotaError: true
      }),
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })
    ]
  })
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
