document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir que se recargue la página

    // Obtener valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar credenciales (en este caso, usuario "admin" y contraseña "admin123")
    if (username === "admin" && password === "admin123") {
        // Guardar en sessionStorage que el usuario está logueado
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("role", "admin");  // Aquí guardamos el rol del usuario

        // Redirigir al dashboard dependiendo del rol
        window.location.href = "dashboard.html";  // Redirige al dashboard
    } else {
        alert("Credenciales incorrectas.");
    }
});
