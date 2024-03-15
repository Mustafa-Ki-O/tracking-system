var zoom = 16;
var map = L.map('map').setView([34.7325, 36.7367], zoom);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 20, // Increased maximum zoom level to 20 
  }
).addTo(map);
map.zoomControl.remove();

// function that return latlng point and put it in dataRow and input texts 
let lat = document.querySelector(".lat");
let lng = document.querySelector(".lng");

let points = [];
let markers = [];
map.on("click", function (e) {
  var marker = L.marker(e.latlng).addTo(map);
  //array of latlng s
  var latlng = e.latlng;
  
  lat.setAttribute("value", `${latlng.lat}`);
  lng.setAttribute("value", `${latlng.lng}`);

  points.push(latlng);
  markers.push(marker);

  let dataContainer = document.querySelector("#dataContainer");
  let parentContainer = document.querySelector(".parentContainer");

  let divContainer = document.createElement("div");
  divContainer.className = "dataRow";
  
  parentContainer.appendChild(divContainer);

  let textDivLat = document.createElement("div");
  textDivLat.className = "inputLat";
  divContainer.appendChild(textDivLat);

  let textDivLng = document.createElement("div");
  textDivLng.className = "inputLng";
  divContainer.appendChild(textDivLng);
  divContainer.style.top = `${2.5 + points.length * 2.2}rem`;

  dataContainer.appendChild(parentContainer);
  document.body.appendChild(dataContainer);

  
  textDivLat.textContent = `${latlng.lat}`;
  textDivLng.textContent = `${latlng.lng}`;
  
// remove the last latlng input from the input texts & dataRow & marker

let back = document.getElementById("back");
back.onclick = function (event) {
   // prevent the click event from bubbling up to the map  
   event.stopPropagation();
  if (points.length > 0) {
  points.pop();
  let lastMarker = markers.pop();
  map.removeLayer(lastMarker);
  let lastDataRow = document.querySelector('.dataRow:last-child');

  if (lastDataRow) {
    lastDataRow.remove();
  }

  if (points.length > 0) {
    let lastPoint = points[points.length - 1];
    lat.value = lastPoint.lat;
    lng.value = lastPoint.lng;
  } else {
    lat.value = '';
    lng.value = '';
  }
}
};

document.getElementById("map").onclick = function () {
  lat.value = `${latlng.lat}`;
  lng.value = `${latlng.lng}`;
};




 // separate map from elements above it
document.querySelectorAll('.dataRow, .inputLat, .inputLng').forEach(function(element) {
  element.onclick = function (event) {
    event.stopPropagation(); // prevent the click event from bubbling up to the map
  };
});
});
// Add event listener to the submit button to show the info text

let submitButton = document.getElementById("submit");
let hoverTxt = document.getElementById("hover-text");

submitButton.addEventListener("mouseover", function() {
  setTimeout(function(){
  hoverTxt.style.visibility = "visible";
  },1000);
});

submitButton.addEventListener("mouseout", function() {
  hoverTxt.style.visibility = "hidden";
});
// Add event listener to the back button to show the info text

let backButton = document.getElementById("back");
let hoverBack = document.getElementById("hover-back");

backButton.addEventListener("mouseover", function() {
  setTimeout(function(){
    hoverBack.style.visibility = "visible";
  },1000);
});

backButton.addEventListener("mouseout", function() {
  hoverBack.style.visibility = "hidden";
});

// event onclick for up and down buttons
let down= document.querySelector("#down");
let up=document.querySelector("#up");
down.onclick = function(){
  dataContainer.classList.add('moving');
}
up.onclick = function(){
  dataContainer.classList.remove('moving');
}

