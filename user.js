const usuarios = [
    { id: 1, nombre: "1234", contraseña: "1234", fechaVencimiento: "2024-07-01" },
    { id: 2, nombre: "andresvpn", contraseña: "1088829889", fechaVencimiento: "2024-04-24" },
    // Agrega más usuarios si es necesario
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const usuario = usuarios.find(user => user.nombre === username && user.contraseña === password);
    if (usuario) {
        const fechaVencimiento = new Date(usuario.fechaVencimiento);
        const fechaActual = new Date();

        if (fechaActual > fechaVencimiento) {
            errorMessage.textContent = 'Usuario y contraseña han vencido';
        } else {
            errorMessage.textContent = ` bienvenid@ ${usuario.nombre}`; // Clear any previous error messages
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000);
        }
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});