document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', validarFormulario);
});

function validarFormulario(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminosModal = document.getElementById("terminosModal").checked;

    if (nombre === "") {
        mostrarError("nombre", "Debe ingresar un nombre.");
    } else {
        ocultarError("nombre");
    }

    if (apellido === "") {
        mostrarError("apellido", "Debe ingresar un apellido.");
    } else {
        ocultarError("apellido");
    }

    if (email === "" || !email.includes('@')) {
        mostrarError("email", "Debe ingresar un email válido.");
    } else {
        ocultarError("email");
    }

    if (password1 === "") {
        mostrarError("password1", "Debe ingresar una contraseña.");
    } else {
        ocultarError("password1");
    }

    if (password2 === "" || password1 !== password2) {
        mostrarError("password2", "Las contraseñas deben coincidir.");
    } else {
        ocultarError("password2");
    }

    if (!terminosModal) {
        mostrarError("terminosModal", "Debe aceptar los términos y condiciones.");
    } else {
        ocultarError("terminosModal");
    }
}

function mostrarError(campo, mensaje) {
    let input = document.getElementById(campo);
    let errorDiv = document.getElementById(campo + "Error");

    input.classList.add("is-invalid");
    errorDiv.textContent = mensaje;
}

function ocultarError(campo) {
    let input = document.getElementById(campo);
    let errorDiv = document.getElementById(campo + "Error");

    input.classList.remove("is-invalid");
    errorDiv.textContent = "";
}
