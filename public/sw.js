if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts("fallback-w7w9ZPaAcsXfXc2IbrlCh.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/215-e2c0e97dd79a7ecd4526.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/474-28d576c802864a217e2c.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/561.a678eaca9091748c71a9.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/653-e42e4f0d3873fe3fca53.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/framework-717d42ae9e172961f2a5.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/main-c6a794ee950a57084c51.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/%5Bslug%5D-bd4bc96c3c4911abe0af.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/_app-ad7da1bfe629bf876617.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/_offline-2ed3ff0f8b450474f804.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/author/%5Bslug%5D-ad9f0cd235aa24a2ba4d.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/category/%5Bslug%5D-5b10a3eeca660427bd7f.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/index-514b8a6567196b25c2be.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/search/%5Bslug%5D-233339cbe4e0ddf5ff63.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/pages/tag/%5Bslug%5D-b7d5ec677ede5900c421.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/chunks/webpack-fa8d9ec16b83487c7350.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/css/0936568f32093e205923.css",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/w7w9ZPaAcsXfXc2IbrlCh/_buildManifest.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_next/static/w7w9ZPaAcsXfXc2IbrlCh/_ssgManifest.js",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/_offline",revision:"w7w9ZPaAcsXfXc2IbrlCh"},{url:"/fonts/IRANSans_Bold.woff",revision:"d17838128d6912f66f5483096edbd0b2"},{url:"/fonts/IRANSans_Light.woff",revision:"d44d8d825b905cb308db05500548f266"},{url:"/fonts/IRANSans_Medi.woff",revision:"cb24c8d9f3a161ccc5a621e4452c2922"},{url:"/icons/logo-dark.png",revision:"288b8d2fc3cf86a1d3aeabb35d635470"},{url:"/icons/logo.png",revision:"fd4b4a19529d53d4f5e835b4c9edaa0b"},{url:"/manifest.json",revision:"900c0a92cb34d1a7409a70f04d8fdb5e"},{url:"/seoindex.png",revision:"41d3b02d4ca1203ee4cbaafd18e34181"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
