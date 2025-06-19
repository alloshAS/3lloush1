const CACHE_NAME = '3lloush_Web_learn';
const urlsToCache = [
  '/',
  '/index2.html',
  '/manifest2.json',
					'/html_tags_full.json',
					'/css_properties_full.json',
					'/js_features_full.json'
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