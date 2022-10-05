'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "74c6f425c9511c8a8e84150730037c22",
"index.html": "9d331b40af97bec15c925cc7de8af56a",
"/": "9d331b40af97bec15c925cc7de8af56a",
"main.dart.js": "7e3bcc3358cd91e7c8e9e7c9cc94d786",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ccc93b9abf247e179b6dcf549b0f0f1",
"assets/AssetManifest.json": "9b2bb32a29dc8450bdef84748cbd007a",
"assets/NOTICES": "6f81b000c087ba2f5b6b431885a500ac",
"assets/FontManifest.json": "dcdfc46904eb0fbc93ec479579ef1e16",
"assets/packages/uni_icons/lib/src/fonts/fa-solid-900.ttf": "e7f19ca67a615cf1b46937d0fb06f8df",
"assets/packages/uni_icons/lib/src/fonts/fa-regular-400.ttf": "6bf63c80836c0b844942bb35544e28c8",
"assets/packages/uni_icons/lib/src/fonts/fa-light-300.ttf": "bd2b394b0ece2133a059b46f87617b1b",
"assets/packages/uni_icons/lib/src/fonts/fa-brands-400.ttf": "70e65a0c310df9eafd22e37477b34fa8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/speakers/assets/default_config.json": "c12fc02a16b258f71aaf7ed05fbfd5c3",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBoldItalic.ttf": "3d69caac1feaa544d89721dffa4dae9b",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBold.ttf": "bb41f596e9c909d1279f79b06c11c3eb",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLightItalic.ttf": "18b10873671ef699a9c6b6a562c47c72",
"assets/packages/widgetbook/google_fonts/Nunito-Light.ttf": "038291099699a91e5486d90f6865865b",
"assets/packages/widgetbook/google_fonts/Nunito-Regular.ttf": "1c030dd4e715ec504fe4925864f023fe",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBold.ttf": "06578957e8dca70fbe9573fbce76c0a0",
"assets/packages/widgetbook/google_fonts/Nunito-Bold.ttf": "1387652ed98293a3e2b6639d21d2dd40",
"assets/packages/widgetbook/google_fonts/Nunito-BoldItalic.ttf": "13420730c456db9463829a7a9a8d0c3a",
"assets/packages/widgetbook/google_fonts/Nunito-Black.ttf": "85808a77c229143ee72bbb7784907da8",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLight.ttf": "9894a78faa3fc60eaa8177413c67fc9d",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBoldItalic.ttf": "8e1046cce01ec078ff8a0a03e5e061ed",
"assets/packages/widgetbook/google_fonts/Nunito-BlackItalic.ttf": "788f29842adade8caaf17be2a317e1da",
"assets/packages/widgetbook/google_fonts/OFL.txt": "ee247edc304c64bb2135b9b6ec9a203f",
"assets/packages/widgetbook/google_fonts/Nunito-Italic.ttf": "b8e5eda1dd4207b4f7488718bf1b13f9",
"assets/packages/widgetbook/google_fonts/Nunito-LightItalic.ttf": "2668f7df2cd1d2c95ca64435d9783284",
"assets/packages/meetri_security/assets/fltAuthorizationKey.pem": "08238230f6da6f3a609256a4d901f12d",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/meetri_setup/assets/mpav-banner.png": "e89fbd53ce0e91c2b710f94e93f284e0",
"assets/packages/meetri_setup/assets/login_bg.jpg": "898d9f24fe5d68e634d8485ab648e741",
"assets/packages/meetri_setup/assets/mp_logo.png": "4be7ea25e15071a7f86705deba5c0aea",
"assets/packages/meetri_setup/assets/ic_back_circle.png": "f3e2240d2b297cf0e2177fcf8f477ebd",
"assets/packages/meetri_setup/assets/mp+av.png": "8c766e9baab3e81289ea397b06b8843c",
"assets/packages/meetri_setup/assets/ic_home_circle.png": "7261269fb5a63da4ad8e14dbb835c39f",
"assets/packages/meetri_setup/assets/login_backdrop.png": "b4896cbb344e7ce5d02c41cfe7d5a952",
"assets/packages/meetri_setup/assets/default_app_icon.png": "cf49aabfdb79055d549dc504397047a1",
"assets/packages/meetri_setup/assets/bg.jpg": "55c3a31bb0a1065b612516cf69100f6b",
"assets/packages/meetri_user_service/assets/default_config.json": "bca51236adbcadda48c0b8f0f6a7dabb",
"assets/packages/dashboard/assets/default_config.json": "60f81ca38cd99596fb7bb0cd74818524",
"assets/packages/meetri_users/assets/default_config.json": "4eee646293ffed18998e9b12ec5726de",
"assets/packages/navigation_module/assets/default_config.json": "15785ee2ae426c96fc534d6be8c4e833",
"assets/packages/meetri_core/test_assets/default_config.json": "bca51236adbcadda48c0b8f0f6a7dabb",
"assets/packages/meetri_theme/assets/default_config.json": "1ddfa3f57aae8412b31a39dc04d31c65",
"assets/packages/meetri_login/assets/login_bg.jpg": "898d9f24fe5d68e634d8485ab648e741",
"assets/packages/meetri_login/assets/mp_logo.png": "4be7ea25e15071a7f86705deba5c0aea",
"assets/packages/meetri_login/assets/ic_back_circle.png": "f3e2240d2b297cf0e2177fcf8f477ebd",
"assets/packages/meetri_login/assets/mp+av.png": "c808a3a87ef8d7bd92c227ac22f70d6c",
"assets/packages/meetri_login/assets/default_config.json": "5b231b64fc41e6cdaa7fbebd88660806",
"assets/packages/meetri_login/assets/ic_home_circle.png": "7261269fb5a63da4ad8e14dbb835c39f",
"assets/packages/meetri_login/assets/login_backdrop.png": "b4896cbb344e7ce5d02c41cfe7d5a952",
"assets/packages/meetri_login/assets/default_app_icon.png": "cf49aabfdb79055d549dc504397047a1",
"assets/packages/meetri_login/assets/bg.jpg": "898d9f24fe5d68e634d8485ab648e741",
"assets/shaders/ink_sparkle.frag": "e205399e5d8e785fb5abcd7b6250b4c3",
"assets/lib/widgetbook/assets/default_config.json": "4eee646293ffed18998e9b12ec5726de",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
