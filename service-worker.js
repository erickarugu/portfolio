/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","8c2eb3c882b67ca8f39031c3eb836992"],["android-chrome-192x192.png","4f689b5285ad9ab494a524cc93bc5cb3"],["android-chrome-512x512.png","b807aadfd204ebc1625b599fc250a534"],["app/js/script.js","ff3461ec7b618158b39f275b4d59b759"],["app/sass/_about.scss","8c4591cdc68e8b76d2e01f8e2e588a4b"],["app/sass/_connect.scss","1fc9ee5f025bf99d6cf415dd03f01972"],["app/sass/_experience.scss","ecaa9b2b3a1c6c62ec6eab6e3c9b80f0"],["app/sass/_fixed_parts.scss","cebc6d2044ee898c5b4d2dac02239565"],["app/sass/_fonts.scss","69c3b208488ea204f03066da3a3c8cf6"],["app/sass/_footer.scss","4fe9726f492c0c8ad1f0c55d764f48b9"],["app/sass/_globals.scss","1655e4aad401096defba90e223a7c1d9"],["app/sass/_hero.scss","b2a4c5a80d660604ae72547995b62db9"],["app/sass/_loader.scss","d41d8cd98f00b204e9800998ecf8427e"],["app/sass/_mixins.scss","a5675180e944ee3dbccf937a2a3cde74"],["app/sass/_navbar.scss","be0a8033deadcb51478bf6ec11d08dc8"],["app/sass/_projects.scss","9d126f591c7d6cfdd048ecefde21e63a"],["app/sass/_variables.scss","3053abf21f8d44889ed953a6fdddbf40"],["app/sass/styles.scss","4650cf6a8bade3cd0305d828fdaf891c"],["apple-touch-icon.png","58f92f2f7789737c7b789e194c88a748"],["assets/fonts/calibre/Calibre-Black.eot","f4f0b4910f47395d365c957aadb8e621"],["assets/fonts/calibre/Calibre-Black.ttf","ca8ddedf3c9a128222c897e56e94302a"],["assets/fonts/calibre/Calibre-Black.woff","e616d4a8d2cc42998a360532eb39f7c9"],["assets/fonts/calibre/Calibre-Black.woff2","36ffd75d821e3d35f0260e7ee71f2294"],["assets/fonts/calibre/Calibre-BlackItalic.eot","5b7e212bd33ad0de2a98ba71fed31a57"],["assets/fonts/calibre/Calibre-BlackItalic.ttf","22fccae97bd238dd9a924fae8cfa37cf"],["assets/fonts/calibre/Calibre-BlackItalic.woff","662853ef624fe6ae19ad9e2a2cf30c2f"],["assets/fonts/calibre/Calibre-BlackItalic.woff2","57442766c282f7f2243c7123d0fc0b33"],["assets/fonts/calibre/Calibre-Bold.eot","bf6feef0ce3c75dc274beaf46832140f"],["assets/fonts/calibre/Calibre-Bold.ttf","ccc8b8a8620ba7237768d1dfe141f269"],["assets/fonts/calibre/Calibre-Bold.woff","c76f2c3d9253f6447f84506452e61521"],["assets/fonts/calibre/Calibre-Bold.woff2","87cc6590c65275a830c12acc9817874c"],["assets/fonts/calibre/Calibre-BoldItalic.eot","567b6eb81ffd8d7c5d0a2310d43a46e6"],["assets/fonts/calibre/Calibre-BoldItalic.ttf","d878f8715c96c0705434cdb6220ebc62"],["assets/fonts/calibre/Calibre-BoldItalic.woff","73bcd5091b09208fdcde7805cef632ad"],["assets/fonts/calibre/Calibre-BoldItalic.woff2","2efc6f2bac2d3c720aab0a3dca82463a"],["assets/fonts/calibre/Calibre-Light.eot","314f80b4e8b7adc97f6ba6a025224ede"],["assets/fonts/calibre/Calibre-Light.ttf","73b7f4385ae2f8028e1b365a48038582"],["assets/fonts/calibre/Calibre-Light.woff","62b8f0fd78f4d842b3a75c1d2512e449"],["assets/fonts/calibre/Calibre-Light.woff2","183de736efe789394f26ed013b0b5cdd"],["assets/fonts/calibre/Calibre-LightItalic.eot","de60428b2d7fcdcbdc544aaba2b7ff13"],["assets/fonts/calibre/Calibre-LightItalic.ttf","3ede1be73648125ed40cfd07e1292bf1"],["assets/fonts/calibre/Calibre-LightItalic.woff","1222cf0d45062719e06c3d7d44937e8f"],["assets/fonts/calibre/Calibre-LightItalic.woff2","f34c1430353885b55d271d473235eb6a"],["assets/fonts/calibre/Calibre-Medium.eot","d28eba23ab8677de5167ca4c040ad773"],["assets/fonts/calibre/Calibre-Medium.ttf","88178c3f2a309ad11520ee62765072d0"],["assets/fonts/calibre/Calibre-Medium.woff","115d37180a9c07e2f480ca81b032babe"],["assets/fonts/calibre/Calibre-Medium.woff2","46b36969c7bb1d7ed4c8253e8f274788"],["assets/fonts/calibre/Calibre-MediumItalic.eot","39b118877668ac026d85b36333b9585f"],["assets/fonts/calibre/Calibre-MediumItalic.ttf","6eb2ac5a1d38f19c7085b131356b355e"],["assets/fonts/calibre/Calibre-MediumItalic.woff","4afe8032c647b57de924543c052e0ee4"],["assets/fonts/calibre/Calibre-MediumItalic.woff2","3df14639dd2cb07c83bd39707d70910f"],["assets/fonts/calibre/Calibre-Regular.eot","7b08540be1f4f01c63048c7eb5781247"],["assets/fonts/calibre/Calibre-Regular.ttf","96e0a7c47fdd7a8f05007837ead73b35"],["assets/fonts/calibre/Calibre-Regular.woff","e08232148510aade507c2af9bb66acd0"],["assets/fonts/calibre/Calibre-Regular.woff2","b63c62e591d0c8fbe2c8f009883346d5"],["assets/fonts/calibre/Calibre-RegularItalic.eot","04bff3dfe516468ca6ac1cc25635d6ca"],["assets/fonts/calibre/Calibre-RegularItalic.ttf","c408807a3001d1f7773f5f7fe513c165"],["assets/fonts/calibre/Calibre-RegularItalic.woff","3a445970c7bcd6b102ac6bd60178b0bc"],["assets/fonts/calibre/Calibre-RegularItalic.woff2","35657aa2d12ff78e3d8a8a5ba28c2c35"],["assets/fonts/calibre/Calibre-Semibold.eot","8f120a9ca508662dc3db6300da7789ed"],["assets/fonts/calibre/Calibre-Semibold.ttf","8325d174436d55e995c7214faafcd47b"],["assets/fonts/calibre/Calibre-Semibold.woff","347808401d7a6607ff9a86897aec0a39"],["assets/fonts/calibre/Calibre-Semibold.woff2","d8b856473a51d7eec2a9bccf2fbea54c"],["assets/fonts/calibre/Calibre-SemiboldItalic.eot","81dee617a03d15823a59b25d810bfc74"],["assets/fonts/calibre/Calibre-SemiboldItalic.ttf","71941c0c0420e703494d6e2a62bc12d4"],["assets/fonts/calibre/Calibre-SemiboldItalic.woff","6473be72d5216d0ec21d273af09b9fa3"],["assets/fonts/calibre/Calibre-SemiboldItalic.woff2","8f3e4b3eaed73e67bbc4fc81f308a35f"],["assets/fonts/calibre/Calibre-Thin.eot","9e75fcb8e5619910b600ec29e3f9a32a"],["assets/fonts/calibre/Calibre-Thin.ttf","2833ae60a8d07a304002dd43d86aeba2"],["assets/fonts/calibre/Calibre-Thin.woff","faf54c7365fef2cc8a09f8a88097f3b5"],["assets/fonts/calibre/Calibre-Thin.woff2","7d7d9bd8558b1df58d4682d2b1be7d9e"],["assets/fonts/calibre/Calibre-ThinItalic.eot","a87dee462308c7c7075a65d306b85154"],["assets/fonts/calibre/Calibre-ThinItalic.ttf","711921ba8f4e60586307eefdc220d9a4"],["assets/fonts/calibre/Calibre-ThinItalic.woff","4422e763dbbf1f8fdaf8c7a9ca949ea6"],["assets/fonts/calibre/Calibre-ThinItalic.woff2","dd10d58f7aa26b4de8c8ab98f984f030"],["assets/fonts/calibre/demo.html","584d007866306e5ab001dac88a6e2735"],["assets/fonts/calibre/stylesheet.css","58b93d06556071ffd62bec3651346837"],["assets/fonts/sf-mono/SFMonoBold.woff","612632f0e83fe2a6dd6e7e0d96591f36"],["assets/fonts/sf-mono/SFMonoBoldItalic.woff","df8113fdd73556ef5259a1f8b3ceab80"],["assets/fonts/sf-mono/SFMonoHeavy.woff","a3044247441121d8ace3f86571742af8"],["assets/fonts/sf-mono/SFMonoHeavyItalic.woff","40c9ffca73c2114b39f7b61e6e248e95"],["assets/fonts/sf-mono/SFMonoLight.woff","0cbc20d7a5c201ba741200b9284d3fc4"],["assets/fonts/sf-mono/SFMonoLightItalic.woff","eb4fa63d90faf62cc5d3b19f34431bbb"],["assets/fonts/sf-mono/SFMonoMedium.woff","06b461f823e809afc66e1eb829cbc5f5"],["assets/fonts/sf-mono/SFMonoMediumItalic.woff","3c7dba2924442d45647c5ce17c4c8db5"],["assets/fonts/sf-mono/SFMonoRegular.woff","ba965fb712418523718c0cd87ef6bf54"],["assets/fonts/sf-mono/SFMonoRegularItalic.woff","8c2f3313e1058b517de3c4232ce85e0c"],["assets/fonts/sf-mono/SFMonoSemibold.woff","59390f2f1102fa149c84e0587cda2bf5"],["assets/fonts/sf-mono/SFMonoSemiboldItalic.woff","c1ce08ffb2196a4b7ad0afc417dfb790"],["assets/fonts/sf-mono/example.html","42599784b19029536a069df1bce4c4cd"],["assets/fonts/sf-mono/style.css","3541462d451a8fefdb99d4d473c54eb8"],["assets/images/code.png","68d10c06eaa66d627ee5195ad5fd51d5"],["assets/images/eric.jpg","248155b544f48719a47f30f9700bf3db"],["assets/images/laptop_image.png","67d67d3f78df86ba9a545d5fd91377a8"],["assets/images/logo.png","b807aadfd204ebc1625b599fc250a534"],["dist/styles.css","2e08d2c4f2f5acdc24a5bd84f2cd07c2"],["dist/styles.css.map","78b9ca11264c22b575505b3b09981053"],["favicon-16x16.png","caebf3ed18368789c1ccaad31347c00e"],["favicon-32x32.png","fd811a0d805b6e487ca2da3e572337bd"],["favicon.ico","610b2a9570b2f13ef234f09e97113a10"],["index.html","e78fa963522522378d21ef3590cc89fa"],["og-image.png","8b6bb0c0849a0489b0545bb668ac753c"],["resume.pdf","24477c99ac6adcdbe42aaf80f57a8eb8"],["site.webmanifest","2f650735264e3da33e06ec7a45d02f2c"],["sitemap.xml","a8031b20ada4e9f864de58dbf5287cb9"],["twitter-image.png","3c2b4be56b7f1897b2b1e5b3b73625a8"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







