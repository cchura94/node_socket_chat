const { join } = require('path')
const express = require("express")
const app = express()

const http = require('http').Server(app)

// socketio
const io = require("socket.io")(http)

// rutas
app.get('/', function(req, res){
    res.sendFile(join(__dirname, 'index.html'));
});

app.get('/blog', function(req, res){
    res.send("BLOG");
});

// conectando clientes con socket.io
io.on('connection', function(socket){
    console.log('Un cliente conectado')
    socket.on("disconnect", function(){
        console.log("cliente desconectado...")
    })
});

http.listen(3000, function(){
    console.log("Servidor levantado en: (http://127.0.0.1:3000)");
});