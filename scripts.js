// Lógica para manejar el login
function handleLogin(event) {
    event.preventDefault();  // Evita que el formulario se envíe
    window.location.href = 'home.html';  // Redirige al usuario a la página principal (home)
}

document.getElementById('loginForm').onsubmit = handleLogin;

