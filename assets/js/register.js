// assets/js/register.js
import { handleRegister } from "../../src/controllers/authController.js";


document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    handleRegister(username, password);
});
// Después de guardar el usuario
localStorage.setItem("users", JSON.stringify(storedUsers));
console.log("Usuarios guardados:", JSON.parse(localStorage.getItem("users")));
