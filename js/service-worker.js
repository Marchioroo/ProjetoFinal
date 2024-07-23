const CACHE_NAME = 'meu-cache-v1';
const urlsToCache = [
    '/',
    '/images/cod-home.png',
    '/images/allan-wake.avif',
    '/images/kof-home.jpg',
    '/images/logo.png',
    '/images/overcoked-home.avif',
    '/images/perfil.png',
    '/images/tekken-home.jpg',
    '/images/lancamentos/Black-Myth-Wukong.jpg',
    '/images/lancamentos/COD-6.png',
    '/images/lancamentos/dragon-ball.webp',
    '/images/lancamentos/dragon-quest-iii.webp',
    '/images/lancamentos/Final Fantasy-14-Dawntrail.jpg',
    '/images/lancamentos/flight-simulator.jpg',
    '/images/lancamentos/indiana-jones-and-the-great.jpg',
    '/images/lancamentos/mario-and-luigi.jpg',
    '/images/lancamentos/mickey-mouse.jpg',
    '/images/lancamentos/silent-hill.jpg',
    '/images/lancamentos/super-mario-jamboree.jpg',
    '/images/lancamentos/the-legend-of-zelda.jpg',
    '/main.js',
    '/jogos.js',
    '/main-loading.js',
    '/images/talvez-voce-goset/got-4k.png',
    '/images/promocoes/battlefield.jpeg',
    '/images/promocoes/Call of Duty.webp',
    '/images/promocoes/Dead by Daylight.jpeg',
    '/images/promocoes/fallout4.webp',
    '/images/promocoes/formula1.webp',
    '/images/promocoes/God of War Ragnarök.webp',
    '/images/promocoes/God of War.jpeg',
    '/images/promocoes/hades.avif',
    '/images/promocoes/Hogwarts Legacy.avif',
    '/images/promocoes/street.png',
    '/images/promocoes/tekken8.jpg',
    '/images/promocoes/thelastOfUs.webp',
      
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache and caching resources');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.error('Cache addAll failed:', error);
            })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('Fetch event for:', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    console.log('Serving from cache:', event.request.url);
                    return response;
                }

                console.log('Fetching from network:', event.request.url);
                return fetch(event.request)
                    .then((networkResponse) => {
                        return caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, networkResponse.clone());
                                return networkResponse;
                            });
                    })
                    .catch((error) => {
                        console.error('Fetch failed:', error);
                    });
            })
    );
});