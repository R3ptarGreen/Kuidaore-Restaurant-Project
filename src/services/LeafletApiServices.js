import L from 'leaflet';

const customMark = L.icon({
    iconUrl:'public/assets/svg/markLocation.svg',
    iconSize: [32, 32],  
    iconAnchor: [16, 32],  
    popupAnchor: [0, -32] 
})

const initMap = (mapId) => {
    const map = L.map(mapId).setView([35.834835994036155, 137.69545703398083], 6);
    L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}&hl=es', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(map);

    return map
}
const addMarker = (map, lat, lng) => {
    L.marker([lat, lng], {icon: customMark}).addTo(map);
}

export {initMap, addMarker};