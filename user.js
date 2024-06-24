const usuarios = [
    { id: 1, nombre: "1234", contraseña: "1234", fechaVencimiento: "2024-07-01", limite: 1, conexiones: { login: 0, home: 0, live: 0, series: 0, buscador: 0, notificaciones: 0 } },
    { id: 2, nombre: "andresvpn", contraseña: "1088829889", fechaVencimiento: "2024-04-24", limite: 2, conexiones: { login: 0, home: 0, live: 0, series: 0, buscador: 0, notificaciones: 0 } },
    { id: 3, nombre: "alejandra", contraseña: "123", fechaVencimiento: "2024-012-24", limite: 2, conexiones: { login: 0, home: 0, live: 0, series: 0, buscador: 0, notificaciones: 0 } },
    { id: 4, nombre: "esteban", contraseña: "123", fechaVencimiento: "2024-012-24", limite: 2, conexiones: { login: 0, home: 0, live: 0, series: 0, buscador: 0, notificaciones: 0 } },
    { id: 5, nombre: "pipe", contraseña: "123", fechaVencimiento: "2024-012-24", limite: 2, conexiones: { login: 0, home: 0, live: 0, series: 0, buscador: 0, notificaciones: 0 } },
    { id: 6, nombre: "julian", contraseña: "1984", fechaVencimiento: "2024-07-23", limite: 2, conexiones: { login: 0, home: 0, live: 0, series: 0, buscador: 0, notificaciones: 0 } },
 
  
    // Agrega más usuarios si es necesario
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const expirationDate = document.getElementById('expirationDate');

    const usuario = usuarios.find(user => user.nombre === username && user.contraseña === password);
    if (usuario) {
        const fechaVencimiento = new Date(usuario.fechaVencimiento);
        const fechaActual = new Date();

        if (fechaActual > fechaVencimiento) {
            errorMessage.textContent = 'Usuario y contraseña han vencido';
        } else {
            let globalConexiones = 0;
            for (let user of usuarios) {
                for (let key in user.conexiones) {
                    globalConexiones += user.conexiones[key];
                }
            }

            if (globalConexiones >= usuarios.length * 5) {
                errorMessage.textContent = 'Límite global de usuarios activos alcanzado';
            } else {
                usuario.conexiones.login++;
                errorMessage.textContent = `¡Bienvenid@ ${usuario.nombre}!`;
                expirationDate.textContent = `Fecha de vencimiento: ${fechaVencimiento.toLocaleDateString()}`;

                setTimeout(() => {
                    window.location.href = `go:home`;
                }, 3000);
            }
        }
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});

