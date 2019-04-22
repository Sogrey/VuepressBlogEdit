/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bf260fb5c4e6268438b404217580309a"
  },
  {
    "url": "accumulate/index.html",
    "revision": "e00b37e97b2a0c2d882a796d3b000c60"
  },
  {
    "url": "algorithm/index.html",
    "revision": "83b3dcfa0051f3d61c09bdcb4e40eb44"
  },
  {
    "url": "assets/css/0.styles.59ece56b.css",
    "revision": "f6bc39f7f816eba1df1b06c6dfb9a1b1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.74491085.js",
    "revision": "1de15e332f1d0485131780f586650fc2"
  },
  {
    "url": "assets/js/4.73f99804.js",
    "revision": "7ee4038e6038c38a1359ba18e1ced010"
  },
  {
    "url": "assets/js/5.d5bff2d7.js",
    "revision": "f6ef483e6e54b2c836e70f45c9f91cb1"
  },
  {
    "url": "assets/js/6.59f37e19.js",
    "revision": "ee85fd798cdb935fcf11a4f4d8658a76"
  },
  {
    "url": "assets/js/7.e655a393.js",
    "revision": "da063ee854a6b2358cc80deb2b05af36"
  },
  {
    "url": "assets/js/8.7eb586c9.js",
    "revision": "96e584c7b994a13aa55791c93c33f368"
  },
  {
    "url": "assets/js/app.4ead1656.js",
    "revision": "1a99dd261258b3a459bb644f8c2cb591"
  },
  {
    "url": "guide.html",
    "revision": "dd2ec41651eb5f364308eaa4cd5ce405"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "e5428f7b27b82d4a51aaa5e0868a92f0"
  },
  {
    "url": "others/index.html",
    "revision": "69a0edb3e0412cf44d155159d5f43bd9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
