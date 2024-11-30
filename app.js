const { log } = require('console');
const express = require('express');
const app = express();
const http = require("http");
const path = require("path");

const socketio = require("socket.io")
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));

// io.on("connection", (socket) => {
//     socket.on("send-location", (data)=>{
//         io.emit("receive-location", {id: socket.id, ...data})
//     })
//     console.log("connected");
// });

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("send-location", (data) => {
        console.log("Received location:", data);
        socket.broadcast.emit("receive-location", {
            id: socket.id,
            ...data,
        });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(3000, () => console.log('Example app listening on port 3000!'));