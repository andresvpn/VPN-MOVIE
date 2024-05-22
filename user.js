const usuarios = [
    { nombre: "1234", contraseña: "1234" },
    { nombre: "andresvpn", contraseña: "1088829889" },
    // Agrega más usuarios si es necesario
];

// Verificar si existen usuarios en el Local Storage y cargarlos
let usuariosGuardados = localStorage.getItem('usuarios');
usuariosGuardados = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const usuario = usuarios.find(user => user.nombre === username && user.contraseña === password);
    if (usuario) {
        errorMessage.textContent = ''; // Clear any previous error messages
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 1000);
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});