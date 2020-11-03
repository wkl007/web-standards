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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "248a365f70917bdd021769446720492c"
  },
  {
    "url": "assets/css/0.styles.da0625d4.css",
    "revision": "33bed6a14f886bced6e8442a9f4fc9ce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.112fed9f.js",
    "revision": "0adf28b5ae6df721a6e1ec5859d31e09"
  },
  {
    "url": "assets/js/11.1c5da31e.js",
    "revision": "ec18be6937443df8a346928503e571c4"
  },
  {
    "url": "assets/js/12.315332fa.js",
    "revision": "8aacf6d834f791ef48cc6223274b755c"
  },
  {
    "url": "assets/js/13.c0a658c7.js",
    "revision": "3148b1e2c283c93e49a78affcb5411fb"
  },
  {
    "url": "assets/js/14.5e28cbfa.js",
    "revision": "a95d5aee68e5b742329b404a57484caf"
  },
  {
    "url": "assets/js/15.8434755a.js",
    "revision": "07cbda89be591719cf0b94ef614e6470"
  },
  {
    "url": "assets/js/16.97ca1a26.js",
    "revision": "f85f86425185737e40d2ac34ff4e1b6b"
  },
  {
    "url": "assets/js/17.dc52ce47.js",
    "revision": "4f0a1a25e7f3729c977ee282e500fb3d"
  },
  {
    "url": "assets/js/18.28e1475c.js",
    "revision": "c7a5f69714d1757337ad6523146fd5e7"
  },
  {
    "url": "assets/js/19.b698eabc.js",
    "revision": "9fe0037b2e43d649efd5a156431a6e4e"
  },
  {
    "url": "assets/js/2.5b787774.js",
    "revision": "82b1e64b574f40b8eeaa409e5966842f"
  },
  {
    "url": "assets/js/20.826d7b44.js",
    "revision": "479f66827ecb94540aaac6e94f3b136c"
  },
  {
    "url": "assets/js/21.934f7439.js",
    "revision": "bd41b1eb44eeaddbcf7325f102a6de76"
  },
  {
    "url": "assets/js/3.4da9cae2.js",
    "revision": "de0d757af5b19267869986259525650a"
  },
  {
    "url": "assets/js/4.148b22f1.js",
    "revision": "029cebfa87bd91115a9d4d416a8e6c65"
  },
  {
    "url": "assets/js/5.22a9c4a3.js",
    "revision": "7fa736e81f365e5899eeab94c96d5086"
  },
  {
    "url": "assets/js/6.164f42b4.js",
    "revision": "0d308aeaf8dee4e645ef4ccf71a34ccc"
  },
  {
    "url": "assets/js/7.4da00aaa.js",
    "revision": "641930dac9cf55179f5575e41cf8e92a"
  },
  {
    "url": "assets/js/8.32014e01.js",
    "revision": "dd764fa016f2d93e2905c5a06ace0e8c"
  },
  {
    "url": "assets/js/9.97d7cf7a.js",
    "revision": "adbcc2de434dfdd26042f0bb0c98f2e6"
  },
  {
    "url": "assets/js/app.0b1c02e7.js",
    "revision": "e1d315a81eeb9679cd80f5e6b451200a"
  },
  {
    "url": "assets/logo.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "guide/index.html",
    "revision": "dce7701b55a925c4c0ff15792d7105ba"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "4e857233cbd3bb2d2db4f78bed62a52f"
  },
  {
    "url": "index.html",
    "revision": "829335413b4550e1b4e030246904d70b"
  },
  {
    "url": "web/chapter1.html",
    "revision": "1600d06e5b8000b74a729810ef4419ca"
  },
  {
    "url": "web/chapter10.html",
    "revision": "0b811ceaeb887ac6a71936cb639e64d1"
  },
  {
    "url": "web/chapter11.html",
    "revision": "e9338fa54e7a4d78390ea7699d08316a"
  },
  {
    "url": "web/chapter2.html",
    "revision": "635455b8a2e0bf403f4c642cb526ce49"
  },
  {
    "url": "web/chapter3.html",
    "revision": "433a127654590b3732690fab494efe69"
  },
  {
    "url": "web/chapter4.html",
    "revision": "ff66d2ae4e588a663d4b465bee4ad2c4"
  },
  {
    "url": "web/chapter5.html",
    "revision": "a92972d5fa03ad55cf690d5526272910"
  },
  {
    "url": "web/chapter6.html",
    "revision": "148caabc90abee1ec566ea76da060229"
  },
  {
    "url": "web/chapter7.html",
    "revision": "70a592ed53fc409b32cc52d091018b53"
  },
  {
    "url": "web/chapter8.html",
    "revision": "f8b432217aa2b88c1692a830904d57d7"
  },
  {
    "url": "web/chapter9.html",
    "revision": "5f94745157caa39b035d66a317b984dc"
  },
  {
    "url": "web/index.html",
    "revision": "d3f8f7651983cb6bd3496df4f6da0f99"
  }
].concat(self.__precacheManifest || []);
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
