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
    "revision": "38358d65c5ee047b40337c60d584351c"
  },
  {
    "url": "assets/css/0.styles.7a69bce6.css",
    "revision": "75a0d8641c156e3319c9fa52a75b7f51"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6314c23.js",
    "revision": "fdf2a002eefdf93982bd743ebdb7b3a1"
  },
  {
    "url": "assets/js/11.6662da0f.js",
    "revision": "8f24d7527e246c5b5347bfeada6ed4fe"
  },
  {
    "url": "assets/js/12.9cd2aeb0.js",
    "revision": "9ce00db58791d6f67162a79dd2d16c77"
  },
  {
    "url": "assets/js/13.15a67383.js",
    "revision": "63638b74741dfba34125a0979605f34e"
  },
  {
    "url": "assets/js/14.0b9ef775.js",
    "revision": "372014ab8c71def41cbedd8912b2d427"
  },
  {
    "url": "assets/js/15.09077271.js",
    "revision": "eedff2a7558dce044f1d5d60e37bc473"
  },
  {
    "url": "assets/js/16.3dcc3275.js",
    "revision": "f6e5a76deacc5c35b425278d78482eb6"
  },
  {
    "url": "assets/js/17.35858131.js",
    "revision": "35d21f87c305dd6a4fb32b0cf6f278e4"
  },
  {
    "url": "assets/js/18.923bac5a.js",
    "revision": "be8e692ed17325de79d452bc5143163e"
  },
  {
    "url": "assets/js/19.dec80b60.js",
    "revision": "7b8e719172586f6a1c376816ea47e911"
  },
  {
    "url": "assets/js/2.cc8b487e.js",
    "revision": "d48d00d23d4189cc0ca5206216665e01"
  },
  {
    "url": "assets/js/20.2d8451a2.js",
    "revision": "52c593289da9670b8a025d8d3ccffe15"
  },
  {
    "url": "assets/js/21.a594aef2.js",
    "revision": "3802e701db313e4850473764ee6554ad"
  },
  {
    "url": "assets/js/3.8cb5166d.js",
    "revision": "b00e36ccd585c03229c568440a92eb82"
  },
  {
    "url": "assets/js/4.de48a360.js",
    "revision": "bc87584c5833bc043e14e5d9bd7517ad"
  },
  {
    "url": "assets/js/5.0aa876b0.js",
    "revision": "6aa616cd49fb57c8c6e4255489015185"
  },
  {
    "url": "assets/js/6.da88af25.js",
    "revision": "ef10e9639d3cd379de21e2386568a0ca"
  },
  {
    "url": "assets/js/7.2b751c2b.js",
    "revision": "95c999897af482cc9bafd0769eb3c85f"
  },
  {
    "url": "assets/js/8.0d3a03f1.js",
    "revision": "d9b39aaba9757e8b2f10080c9994eb02"
  },
  {
    "url": "assets/js/9.7ff76115.js",
    "revision": "dc0907e00220e7cf7b8ff6ed0cd73d15"
  },
  {
    "url": "assets/js/app.73f57295.js",
    "revision": "163f349fe4563ade5c3ab28a1f000879"
  },
  {
    "url": "assets/logo.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "guide/index.html",
    "revision": "2675b9e836100a16c6886b70db6680c6"
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
    "revision": "4956f31d28d3012a228849a7307df809"
  },
  {
    "url": "web/chapter1.html",
    "revision": "b043d3c260ee09d25e1e3296e01164ea"
  },
  {
    "url": "web/chapter10.html",
    "revision": "16cfb798963a73d643789e316b51d891"
  },
  {
    "url": "web/chapter11.html",
    "revision": "7cc05a9bc466fd75474ddccbbe9ed9fc"
  },
  {
    "url": "web/chapter2.html",
    "revision": "37bb51fa97e8e40c11a64001794fd122"
  },
  {
    "url": "web/chapter3.html",
    "revision": "37b5549a25e164f343b5c2b727fa65c3"
  },
  {
    "url": "web/chapter4.html",
    "revision": "e60a5056fa2c7ff3de55b5776b799386"
  },
  {
    "url": "web/chapter5.html",
    "revision": "4eb42a157dbd1105ed0160547d1ff741"
  },
  {
    "url": "web/chapter6.html",
    "revision": "085b4370cbab64982280000432609faa"
  },
  {
    "url": "web/chapter7.html",
    "revision": "164e4cdd9ffa3de8faa0eb703256ee5f"
  },
  {
    "url": "web/chapter8.html",
    "revision": "78a172274d9ae436a6988ba79bd8b8a9"
  },
  {
    "url": "web/chapter9.html",
    "revision": "22d0ba71d342c10c14fe60f5447e60ce"
  },
  {
    "url": "web/index.html",
    "revision": "c93f339c3bec531df0dad27fe0e7b6e3"
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
