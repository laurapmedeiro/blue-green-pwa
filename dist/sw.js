if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const u=e=>i(e,l),o={module:{uri:l},exports:t,require:u};s[l]=Promise.all(n.map((e=>o[e]||u(e)))).then((e=>(r(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/focus-visible-9c13edeb.js",revision:null},{url:"assets/index-bf12d6bc.css",revision:null},{url:"assets/index-de8042f2.js",revision:null},{url:"assets/index2-3e8c2e70.js",revision:null},{url:"assets/index9-51f64f8e.js",revision:null},{url:"assets/input-shims-96e09920.js",revision:null},{url:"assets/ios.transition-7c94055b.js",revision:null},{url:"assets/keyboard2-63d7ee00.js",revision:null},{url:"assets/md.transition-c48e07c9.js",revision:null},{url:"assets/pwa-action-sheet.entry-4e9f4e5b.js",revision:null},{url:"assets/pwa-camera-modal-instance.entry-d0e92e31.js",revision:null},{url:"assets/pwa-camera-modal.entry-64cde317.js",revision:null},{url:"assets/pwa-camera.entry-ee3a531f.js",revision:null},{url:"assets/pwa-toast.entry-c4658c63.js",revision:null},{url:"assets/status-tap-42a428e6.js",revision:null},{url:"assets/swipe-back-de361d23.js",revision:null},{url:"index.html",revision:"45e8b7a738f4a0841901c656ec7be467"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"e507af8baf79c16fd768fda1eb88f4f3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
