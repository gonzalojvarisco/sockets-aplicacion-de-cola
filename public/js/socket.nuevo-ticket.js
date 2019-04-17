//comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

//escuchar
socket.on('connect', function(){
    console.log('conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('se perdio la coneccion con el servidor');
});

socket.on('estadoActual', function(resp){
    console.log(resp);
    label.text(resp.actual);
})

$('button').on('click', function(){
    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.text(siguienteTicket);
    });
});