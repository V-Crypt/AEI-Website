// self.addEventListener("fetch", function(event) {
//   if (event.request.url.includes("segato")) {
//     event.respondWith(
//       fetch("library.jpg")
//     );
//   }
// });

// self.addEventListener("fetch", function(event) {
//   if (event.request.url.includes("libros")) {
//     event.respondWith(
//       fetch("icon512.png")
//     );
//   }
// });

// self.addEventListener("fetch", function(event) {
//   if (event.request.url.includes("segato")) {
//     console.log("Fetch requested for: ",event.request.url);
//     event.respondWith(
//       new Response(
//         "body (backbround: black!important;)",
//         { headers: { "Content-Type": "text/css"}}
//       )
//     );
//   }
// });

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.add("brb.html");
    })
  );
});

// load the html page cached as brb.html
self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match("brb.html");
    })

  );
});