var CACHE="v20220628135654",AUTO="dico.css dico.ico dico.js dico.text index.html lcng.js lz-string.js normalize.css".split(" ");function sqp(a){a=new URL(a.url);a.search="";a.fragment="";return new Request(a)}self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE).then(function(b){b.addAll(AUTO)}).then(self.skipWaiting()))});self.addEventListener("activate",function(a){a.waitUntil(caches.keys().then(function(b){return Promise.all(b.filter(function(c){return c!==CACHE}).map(function(c){return caches.delete(c)}))}))});
self.addEventListener("fetch",function(a){if("GET"===a.request.method&&a.request.url.startsWith(self.location.origin)){var b=sqp(a.request);a.respondWith(caches.match(b).then(function(c){return void 0!==c?c:fetch(a.request).then(function(d){if(d.ok&&!d.headers["Cache-Control"]){var e=d.clone();caches.open(CACHE).then(function(f){f.put(b,e)})}return d}).catch(function(){return new Response("404 - NOT FOUND",{status:404,statusText:"NOT FOUND"})})}))}});
