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

// function that return latlng point 
let lat = document.querySelector(".lat");
let lng = document.querySelector(".lng");

let points = [];
map.on("click", function (e) {
  var latlng = e.latlng;

  lat.setAttribute("value", `${latlng.lat}`);
  lng.setAttribute("value", `${latlng.lng}`);

  points.push(latlng);
  console.log(points);

  let mapContainer = document.querySelector("#map");
  let dataContainer = document.querySelector("#dataContainer");
  console.log(mapContainer);
  console.log(dataContainer);

  let divContainer = document.createElement("div");
  divContainer.className = "dataRow";
  console.log(divContainer);

  let textDivLat = document.createElement("div");
  textDivLat.className = "inputLat";
  console.log(textDivLat);

  let textDivLng = document.createElement("div");
  textDivLng.className = "inputLng";
  console.log(textDivLng);
  
  divContainer.appendChild(textDivLat);
  divContainer.appendChild(textDivLng);

  dataContainer.appendChild(divContainer);
  divContainer.style.top = `${4.3 + points.length * 2}rem`;
 
  textDivLat.textContent = `${latlng.lat}`;
  textDivLng.textContent = `${latlng.lng}`;
  let l = document.getElementById("dataContainer");
  if (dataContainer.offsetHeight < dataContainer.scrollHeight){
    dataContainer.style.overflowY = "scroll";
  }
  mapContainer.appendChild(dataContainer);
  document.body.appendChild(mapContainer);
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
