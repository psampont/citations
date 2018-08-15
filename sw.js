// Citations Service Worker

var cacheName = 'citations-v1';

var appShellFiles = [
  '/~philippes/lab/citations/',
  '/~philippes/lab/citations/index.html',
  '/~philippes/lab/citations/data.js',
  '/~philippes/lab/citations/app.js',
  '/~philippes/lab/citations/images/logo-64.png',
  '/~philippes/lab/citations/images/logo-128.png',
  '/~philippes/lab/citations/main.css'
];

self.importScripts('data.js');

self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching all: app shell and content');
    return cache.addAll(appShellFiles);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
