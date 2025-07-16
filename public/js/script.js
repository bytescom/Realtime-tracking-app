const socket = io();

// check if navigator of broswer contain geoloaction or not
if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });
    },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,        
            maximumAge: 0,         
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}


const map = L.map('map').setView([0, 0], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markers = {};

const playSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmQdBjiS2vHNeSsF');
    audio.play();
};

socket.on("receive-location", (data)=>{
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude]);
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    }
    else{
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }

    playSound(); 
 })

 socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});

console.log("JS is connected!");

// Add to script.js



socket.on("receive-location", (data) => {
    
});
