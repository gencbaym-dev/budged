/* Orta Avrupa Bütçe — çevrimdışı önbellek
   Uygulamayı güncellersen aşağıdaki sürüm numarasını artır (v1 -> v2).
   Böylece telefon eski kopyayı bırakıp yenisini alır. */
var VERSION = "oab-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(VERSION).then(function(c){ return c.addAll(ASSETS); }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ return k === VERSION ? null : caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

/* Önce önbellek: internet olmasa da anında açılır.
   Arka planda tazeler, bir sonraki açılışta güncel sürüm gelir. */
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  if(new URL(e.request.url).origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then(function(hit){
      var net = fetch(e.request).then(function(res){
        if(res && res.status === 200){
          var copy = res.clone();
          caches.open(VERSION).then(function(c){ c.put(e.request, copy); });
        }
        return res;
      }).catch(function(){
        return hit || caches.match("./index.html");
      });
      return hit || net;
    })
  );
});
