const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.on('disconnect', () => {
        console.log("Usuario desconectado");
    });
    //Enviar un mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: "Administrador",
        mensaje: "Bienvenido a la aplicación"
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // Reenviar el mensaje recibido a todos los clientes:
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: "TODO SALIO BIEN!"
        //     });
        // } else {
        //     callback({ resp: "TODO SALIO MAL" });
        // }
    });
});