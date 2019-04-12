//comando para establecer la conexion
var socket = io();

//escuchar
socket.on('connect', function(){
    console.log('conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('se perdio la coneccion con el servidor');
});

$('button').on('click', function(){
    socket.emit('siguienteTicket');
});