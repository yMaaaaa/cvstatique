let map;

async function initMap() {
  const  { Map } = await google.maps.imporLibrary("maps")

  map = new Map(document.getElementById("map"), {
    center: { lat: 43.30872, lng : -0.36067},
    zoom: 8,
  });
}

initMap();