"use strict";const cacheName="90e12a7ca5",excludedPathsFromCache=/^(?:socket\.io|storage|uploads|cdn-cgi)\//;async function putInCache(e,t){const n=await caches.open(cacheName);await n.put(e,t)}async function cleanRedirect(e){const t="body"in e?Promise.resolve(e.body):e.blob(),n=await t;return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}async function networkOrCache(e){try{let t=await fetch(e.request,{cache:"no-cache",redirect:"follow"});if(t.redirected&&(t=await cleanRedirect(t.clone())),t.ok)return e.waitUntil(putInCache(e.request,t)),t.clone();throw new Error(`Request failed with HTTP ${t.status}`)}catch(t){if(console.error(t.message,e.request.url),e.clientId){const n=await clients.get(e.clientId);n&&n.postMessage({type:"fetch-error",message:t.message})}const n=await caches.open(cacheName);return await n.match(e.request)||Promise.reject("request-not-in-cache")}}function showNotification(e,t){"notification"===t.type&&e.waitUntil(self.registration.getNotifications({tag:`chan-${t.chanId}`}).then((e=>{for(const t of e)t.close();return self.registration.showNotification(t.title,{tag:`chan-${t.chanId}`,badge:"img/icon-alerted-black-transparent-bg-72x72px.png",icon:"img/icon-alerted-grey-bg-192x192px.png",body:t.body,timestamp:t.timestamp})})))}function findSuitableClient(e){for(let t=0;t<e.length;t++){const n=e[t];if(n.focused||"visible"===n.visibilityState)return n}return e[0]}self.addEventListener("install",(function(){self.skipWaiting()})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((e=>Promise.all(e.filter((e=>e!==cacheName)).map((e=>caches.delete(e))))))),e.waitUntil(self.clients.claim())})),self.addEventListener("fetch",(function(e){if("GET"!==e.request.method)return;const t=e.request.url,n=self.registration.scope;if(!t.startsWith(n))return;const i=t.substring(n.length);excludedPathsFromCache.test(i)||e.respondWith(networkOrCache(e))})),self.addEventListener("message",(function(e){showNotification(e,e.data)})),self.addEventListener("push",(function(e){e.data&&showNotification(e,e.data.json())})),self.addEventListener("notificationclick",(function(e){e.notification.close(),e.waitUntil(clients.matchAll({includeUncontrolled:!0,type:"window"}).then((t=>{if(0===t.length)return clients.openWindow?clients.openWindow(`.#/${e.notification.tag}`):void 0;const n=findSuitableClient(t);n.postMessage({type:"open",channel:e.notification.tag}),"focus"in n&&n.focus()})))}));