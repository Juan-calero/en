"use strict";var precacheConfig=[["/en/index.html","c7691f915b7e0831ac9b5873cd8880e0"],["/en/static/css/main.e17c0853.css","d9659642e9fda4e1bae9eb656415f5cc"],["/en/static/js/main.c1ebb63a.js","d2860dd3a0c10b6bb4d2dc9450974a9f"],["/en/static/media/ENGLISH CV.bf575cd6.pdf","bf575cd6484032adfca1ac108d8fffe6"],["/en/static/media/JCLOGO.905b32f4.png","905b32f47f40c45a47a3f762505f7757"],["/en/static/media/JCLOGO.a526afab.webp","a526afab80d1b06add88e8166e9c6954"],["/en/static/media/TerArtesLogo.111b0abd.webp","111b0abd92f67399d457bcf3e5d98a24"],["/en/static/media/TerArtesPrint.5f4368f2.jpg","5f4368f201eefe386436fcf25fd565f2"],["/en/static/media/WeatherPrint.f1da1bb0.jpg","f1da1bb04971d481e70861d647e154b0"],["/en/static/media/brain_neon.8cd56bd6.webp","8cd56bd691b322057313e0a6afea0a6c"],["/en/static/media/design_icon.91c79e5e.webp","91c79e5e839b6833132dd5359e0b4fdd"],["/en/static/media/envolvimento_icon.754d2974.webp","754d2974291355c3c83fd181848a7028"],["/en/static/media/gears_icon.8b8f7b8a.webp","8b8f7b8ab350d1f04f9c3bbf83e8bc9b"],["/en/static/media/jcface.518700e4.jpg","518700e4ccccc53ab5c720aa0407a3fb"],["/en/static/media/musicaemsiprint.8e4a3c54.webp","8e4a3c546d5827c9ed431ad956aac3f4"],["/en/static/media/nebula.regular.41d748c1.otf","41d748c1ab9c858a1f990a94559814c5"],["/en/static/media/washome screenshot.7065617b.webp","7065617b89b4711400756a6186aa13df"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/en/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});