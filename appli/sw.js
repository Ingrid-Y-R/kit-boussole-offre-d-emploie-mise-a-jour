/* Service worker du Kit Boussole installable (16/11/2026).
   Il garde sur CE PC une copie des FICHIERS DE L'APPLI (pages, images, icônes) pour qu'elle s'ouvre même sans internet.
   Il ne voit JAMAIS les données des personnes : elles sont dans le stockage local du navigateur (localStorage),
   que ce fichier ne lit pas, et rien n'est envoyé à un serveur.
   Il ne touche qu'aux fichiers de ce site : le fichier d'offres et les liens extérieurs passent sans copie. */
const VERSION = 'f362514f0aac';
const CACHE = 'kit-boussole-appli-' + VERSION;
const FICHIERS = [
"./",
"./Appli-Kit-Boussole.html",
"./Module-Code-route/Code-de-la-route.html",
"./Module-Code-route/images-code/A/C45.jpg",
"./Module-Code-route/images-code/A/D07.jpg",
"./Module-Code-route/images-code/A/D09.jpg",
"./Module-Code-route/images-code/A/E03.jpg",
"./Module-Code-route/images-code/A/N05.jpg",
"./Module-Code-route/images-code/A/P01.jpg",
"./Module-Code-route/images-code/A/P02.jpg",
"./Module-Code-route/images-code/A/P05.jpg",
"./Module-Code-route/images-code/A/P07.jpg",
"./Module-Code-route/images-code/A/Q01.jpg",
"./Module-Code-route/images-code/A/Q04.jpg",
"./Module-Code-route/images-code/A/R04.jpg",
"./Module-Code-route/images-code/A/S02.jpg",
"./Module-Code-route/images-code/A/S04.jpg",
"./Module-Code-route/images-code/A/S06.jpg",
"./Module-Code-route/images-code/A/c-feux-3.jpg",
"./Module-Code-route/images-code/A/c-priorites-6.jpg",
"./Module-Code-route/images-code/A/c-stationner-0.jpg",
"./Module-Code-route/images-code/A/c-vitesses-3.jpg",
"./Module-Code-route/images-code/A/c-vitesses-4.jpg",
"./Module-Code-route/images-code/A/d-alcool-0.jpg",
"./Module-Code-route/images-code/A/d-alcool-1.jpg",
"./Module-Code-route/images-code/A/d-alcool-2.jpg",
"./Module-Code-route/images-code/A/d-arret-1.jpg",
"./Module-Code-route/images-code/A/d-fatigue-0.jpg",
"./Module-Code-route/images-code/A/d-fatigue-1.jpg",
"./Module-Code-route/images-code/A/e-eco-0.jpg",
"./Module-Code-route/images-code/A/e-eco-1.jpg",
"./Module-Code-route/images-code/A/e-eco-3.jpg",
"./Module-Code-route/images-code/A/m-pneus-0.jpg",
"./Module-Code-route/images-code/A/m-pneus-1.jpg",
"./Module-Code-route/images-code/A/m-pneus-3.jpg",
"./Module-Code-route/images-code/A/n-papiers-0.jpg",
"./Module-Code-route/images-code/A/n-papiers-1.jpg",
"./Module-Code-route/images-code/A/n-papiers-2.jpg",
"./Module-Code-route/images-code/A/p-pas-0.jpg",
"./Module-Code-route/images-code/A/p-pas-2.jpg",
"./Module-Code-route/images-code/A/p-pas-3.jpg",
"./Module-Code-route/images-code/A/q-installer-0.jpg",
"./Module-Code-route/images-code/A/q-installer-2.jpg",
"./Module-Code-route/images-code/A/q-installer-3.jpg",
"./Module-Code-route/images-code/A/r-meteo-1.jpg",
"./Module-Code-route/images-code/A/r-pieges-2.jpg",
"./Module-Code-route/images-code/A/s-ceinture-0.jpg",
"./Module-Code-route/images-code/A/s-ceinture-1.jpg",
"./Module-Code-route/images-code/A/s-ceinture-2.jpg",
"./Module-Code-route/images-code/A/u-gros-2.jpg",
"./Module-Code-route/images-code/C/C45.jpg",
"./Module-Code-route/images-code/C/D07.jpg",
"./Module-Code-route/images-code/C/D09.jpg",
"./Module-Code-route/images-code/C/E03.jpg",
"./Module-Code-route/images-code/C/N05.jpg",
"./Module-Code-route/images-code/C/P01.jpg",
"./Module-Code-route/images-code/C/P02.jpg",
"./Module-Code-route/images-code/C/P05.jpg",
"./Module-Code-route/images-code/C/P07.jpg",
"./Module-Code-route/images-code/C/Q01.jpg",
"./Module-Code-route/images-code/C/Q04.jpg",
"./Module-Code-route/images-code/C/R04.jpg",
"./Module-Code-route/images-code/C/S02.jpg",
"./Module-Code-route/images-code/C/S04.jpg",
"./Module-Code-route/images-code/C/S06.jpg",
"./Module-Code-route/images-code/C/c-feux-3.jpg",
"./Module-Code-route/images-code/C/c-priorites-6.jpg",
"./Module-Code-route/images-code/C/c-stationner-0.jpg",
"./Module-Code-route/images-code/C/c-vitesses-3.jpg",
"./Module-Code-route/images-code/C/c-vitesses-4.jpg",
"./Module-Code-route/images-code/C/d-alcool-0.jpg",
"./Module-Code-route/images-code/C/d-alcool-1.jpg",
"./Module-Code-route/images-code/C/d-alcool-2.jpg",
"./Module-Code-route/images-code/C/d-arret-1.jpg",
"./Module-Code-route/images-code/C/d-fatigue-0.jpg",
"./Module-Code-route/images-code/C/d-fatigue-1.jpg",
"./Module-Code-route/images-code/C/e-eco-0.jpg",
"./Module-Code-route/images-code/C/e-eco-1.jpg",
"./Module-Code-route/images-code/C/e-eco-3.jpg",
"./Module-Code-route/images-code/C/m-pneus-0.jpg",
"./Module-Code-route/images-code/C/m-pneus-1.jpg",
"./Module-Code-route/images-code/C/m-pneus-3.jpg",
"./Module-Code-route/images-code/C/n-papiers-0.jpg",
"./Module-Code-route/images-code/C/n-papiers-1.jpg",
"./Module-Code-route/images-code/C/n-papiers-2.jpg",
"./Module-Code-route/images-code/C/p-pas-0.jpg",
"./Module-Code-route/images-code/C/p-pas-2.jpg",
"./Module-Code-route/images-code/C/p-pas-3.jpg",
"./Module-Code-route/images-code/C/q-installer-0.jpg",
"./Module-Code-route/images-code/C/q-installer-2.jpg",
"./Module-Code-route/images-code/C/q-installer-3.jpg",
"./Module-Code-route/images-code/C/r-meteo-1.jpg",
"./Module-Code-route/images-code/C/r-pieges-2.jpg",
"./Module-Code-route/images-code/C/s-ceinture-0.jpg",
"./Module-Code-route/images-code/C/s-ceinture-1.jpg",
"./Module-Code-route/images-code/C/s-ceinture-2.jpg",
"./Module-Code-route/images-code/C/u-gros-2.jpg",
"./Module-Code-route/images-code/P/C45.jpg",
"./Module-Code-route/images-code/P/D07.jpg",
"./Module-Code-route/images-code/P/D09.jpg",
"./Module-Code-route/images-code/P/E03.jpg",
"./Module-Code-route/images-code/P/N05.jpg",
"./Module-Code-route/images-code/P/P01.jpg",
"./Module-Code-route/images-code/P/P02.jpg",
"./Module-Code-route/images-code/P/P05.jpg",
"./Module-Code-route/images-code/P/P07.jpg",
"./Module-Code-route/images-code/P/Q01.jpg",
"./Module-Code-route/images-code/P/Q04.jpg",
"./Module-Code-route/images-code/P/R04.jpg",
"./Module-Code-route/images-code/P/S02.jpg",
"./Module-Code-route/images-code/P/S04.jpg",
"./Module-Code-route/images-code/P/S06.jpg",
"./Module-Code-route/images-code/P/c-feux-3.jpg",
"./Module-Code-route/images-code/P/c-priorites-6.jpg",
"./Module-Code-route/images-code/P/c-stationner-0.jpg",
"./Module-Code-route/images-code/P/c-vitesses-3.jpg",
"./Module-Code-route/images-code/P/c-vitesses-4.jpg",
"./Module-Code-route/images-code/P/d-alcool-0.jpg",
"./Module-Code-route/images-code/P/d-alcool-1.jpg",
"./Module-Code-route/images-code/P/d-alcool-2.jpg",
"./Module-Code-route/images-code/P/d-arret-1.jpg",
"./Module-Code-route/images-code/P/d-fatigue-0.jpg",
"./Module-Code-route/images-code/P/d-fatigue-1.jpg",
"./Module-Code-route/images-code/P/e-eco-0.jpg",
"./Module-Code-route/images-code/P/e-eco-1.jpg",
"./Module-Code-route/images-code/P/e-eco-3.jpg",
"./Module-Code-route/images-code/P/m-pneus-0.jpg",
"./Module-Code-route/images-code/P/m-pneus-1.jpg",
"./Module-Code-route/images-code/P/m-pneus-3.jpg",
"./Module-Code-route/images-code/P/n-papiers-0.jpg",
"./Module-Code-route/images-code/P/n-papiers-1.jpg",
"./Module-Code-route/images-code/P/n-papiers-2.jpg",
"./Module-Code-route/images-code/P/p-pas-0.jpg",
"./Module-Code-route/images-code/P/p-pas-2.jpg",
"./Module-Code-route/images-code/P/p-pas-3.jpg",
"./Module-Code-route/images-code/P/q-installer-0.jpg",
"./Module-Code-route/images-code/P/q-installer-2.jpg",
"./Module-Code-route/images-code/P/q-installer-3.jpg",
"./Module-Code-route/images-code/P/r-meteo-1.jpg",
"./Module-Code-route/images-code/P/r-pieges-2.jpg",
"./Module-Code-route/images-code/P/s-ceinture-0.jpg",
"./Module-Code-route/images-code/P/s-ceinture-1.jpg",
"./Module-Code-route/images-code/P/s-ceinture-2.jpg",
"./Module-Code-route/images-code/P/u-gros-2.jpg",
"./Module-Code-route/manifest.webmanifest",
"./icones/code-route-192.png",
"./icones/code-route-512.png",
"./icones/code-route-masquable-512.png",
"./icones/kit-192.png",
"./icones/kit-512.png",
"./icones/kit-masquable-512.png",
"./index.html",
"./manifest.webmanifest"
];
const PORTEE = new URL('./', self.location).href;

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // un fichier qui échoue n'empêche pas l'installation (il sera copié à la première ouverture)
    await Promise.all(FICHIERS.map(f => c.add(new Request(f, { cache: 'reload' })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('kit-boussole-appli-') && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || !r.url.startsWith(PORTEE)) return; // autre site (offres, liens) : pas de copie
  const url = new URL(r.url); url.search = ''; url.hash = '';
  const page = r.mode === 'navigate' || /\.(html|webmanifest)$/.test(url.pathname) || url.href === PORTEE;
  e.respondWith(page ? reseauDabord(r, url.href) : cacheDabord(r, url.href));
});

// Pages : la version en ligne si elle arrive vite (mises à jour), sinon la copie du PC.
async function reseauDabord(r, cle) {
  const c = await caches.open(CACHE);
  try {
    const rep = await Promise.race([fetch(r), new Promise((_, non) => setTimeout(() => non(new Error('lent')), 6000))]);
    if (rep && rep.ok) { c.put(cle, rep.clone()); return rep; }
    return (await c.match(cle)) || rep;
  } catch (x) {
    return (await c.match(cle)) || (await c.match(new URL('./Appli-Kit-Boussole.html', PORTEE).href)) || Response.error();
  }
}

// Images, icônes : la copie du PC, sinon on la télécharge et on la garde.
async function cacheDabord(r, cle) {
  const c = await caches.open(CACHE);
  const ok = await c.match(cle); if (ok) return ok;
  const rep = await fetch(r);
  if (rep && rep.ok) c.put(cle, rep.clone());
  return rep;
}
