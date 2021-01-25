var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log("Perdimos conexión con el servidor");
});
// Enviar Información
socket.emit('enviarMensaje', {
    usuario: "Gustavo",
    mensaje: "Hola Mundo"
}, function(resp) {
    console.log("Respuesta server: ", resp);
});
// Escuchar Información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});