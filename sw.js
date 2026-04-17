const CACHE_NAME = 'rapidaid-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/manifest.json',
  '/data/hospitals.json'
  // Add any static images/icons here
];

// Install: Cache core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching RapidAid files');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate: Clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch: Serve cached or fetch + cache (stale-while-revalidate for maps/CDNs)
self.addEventListener('fetch', event => {
  // Ignore non-GET/non-same-origin
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // Cache successful responses (no 4xx/5xx)
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          // Offline fallback
          console.log('Offline: Serving from cache');
        });

        return cachedResponse || fetchPromise;
      });
    })
  );
});
