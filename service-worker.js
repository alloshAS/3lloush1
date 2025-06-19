const CACHE_NAME = 'easy learn';
const urlsToCache = [
  '/3lloush1/',
  '/3lloush1/index.html',
  '/3lloush1/manifest2.json',
  '/3lloush1/html.json',
	'/3lloush1/css.json',
	'/3lloush1/js.json'
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
