const CACHE_NAME = 'easy learn';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest2.json',
'/html.json',
'/css.json',
'/js.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
