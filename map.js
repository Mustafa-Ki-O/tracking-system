var zoom = 13;
var map = L.map('map').setView([34.7325, 36.7367], zoom);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 20, // Increased maximum zoom level to 20 
  }
).addTo(map);

const button = document.querySelector(".button1");
button.addEventListener('click', function() {
  window.open('addPathMap.html');
});
