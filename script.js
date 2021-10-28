const MAPBOX_ACCES_TOKEN='pk.eyJ1Ijoic2FyZG9yYWJkdWxsYWV2IiwiYSI6ImNrdjJhaWtxYzN3OXQyb3M3aGtwZnQ3MTEifQ.rcA__4l6dfAmkNrn3mlQKw'


// var map = new mapboxgl.Map({
//     accessToken:MAPBOX_ACCES_TOKEN,
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true});

function setupMap(centerPosition) {
    var map = new mapboxgl.Map({
        accessToken:MAPBOX_ACCES_TOKEN,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center:centerPosition,
      zoom:13
    });
    
    const geo = new mapboxgl.GeolocateControl();
    map.addControl(geo);
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)

    const direction=new MapboxDirections({
        accessToken: MAPBOX_ACCES_TOKEN
        });
    map.addControl(direction,'top-left');
}

function successLocation(location){
    // const {latitude,longitude}=location.coords;
    setupMap([location.coords.longitude,location.coords.latitude]);
    // console.log(latitude,longitude);
}
function errorLocation(){
    console.log('error');
    setupMap([-2.24,53.48])
}
