const CACHE_NAME = 'rental-mobil-gilang-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/about.html',
    '/booking.html',
    '/car.html',
    '/contact.html',
    '/detail.html',
    '/service.html',
    '/style.html',
    '/team.html',
    '/testimonial.html',
    '/script.js',
    '/asset/aqyu.jpeg',
    '/css/bootstrap.min.css',
    '/css/style.css',
    '/img',
    '/js/main.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
});
