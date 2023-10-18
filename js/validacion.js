document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function(event) {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        const terminos = document.getElementById("terminos").checked;

        // Validar si el nombre o apellido está vacío
        if (!nombre || !apellido) {
            alert("El nombre y el apellido son obligatorios.");
            event.preventDefault();
            return;
        }

        // Validar formato de email
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexEmail.test(email)) {
            alert("Por favor, introduce un email válido.");
            event.preventDefault();
            return;
        }

        // Validar si las contraseñas coinciden
        if (password1 !== password2) {
            alert("Las contraseñas no coinciden.");
            event.preventDefault();
            return;
        }

        // Validar si se han aceptado los términos y condiciones
        if (!terminos) {
            alert("Debes aceptar los términos y condiciones del servicio.");
            event.preventDefault();
        }
    });
});
