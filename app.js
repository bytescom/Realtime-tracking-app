const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const http = require("http");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the folder for static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", (socket)=>{
    socket.on("sen-location" , (data)=> {
        io.emit("receive-location", {id: socket.id, ...data})
    })
    console.log("connected");
    
})

// Define a route to render index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server

server.listen(PORT);