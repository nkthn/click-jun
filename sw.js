// Click Jun service worker: only here so the home-screen app can show notifications (no offline caching, so updates are never stale)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type:'window'}).then(cs => cs.length ? cs[0].focus() : self.clients.openWindow('./')));
});
