document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    let isSubmitted = false;  // Flag para saber si el formulario ha sido enviado

    form.addEventListener('submit', function(event) {
        isSubmitted = true;
        validarFormulario(event);
    });

    // Añadir eventos de input para validación en tiempo real después del primer submit
    let inputs = form.querySelectorAll('input');
    for (let input of inputs) {
        input.addEventListener('input', function() {
            if (isSubmitted) {
                validarFormulario();
            }
        });
    }
});

function validarFormulario(event) {
    if (event) event.preventDefault();

    let isValid = true;  // Para saber si todo el formulario es válido

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminosModal = document.getElementById("terminosModal").checked;

    if (nombre === "") {
        isValid = false;
        mostrarError("nombre", "Debe ingresar un nombre.");
    } else {
        ocultarError("nombre");
    }

    if (apellido === "") {
        isValid = false;
        mostrarError("apellido", "Debe ingresar un apellido.");
    } else {
        ocultarError("apellido");
    }

    if (email === "" || !email.includes('@')) {
        isValid = false;
        mostrarError("email", "Debe ingresar un email válido.");
    } else {
        ocultarError("email");
    }

    if (password1 === "" || password1.length < 6) {
        isValid = false;
        mostrarError("password1", "La contraseña debe tener al menos 6 caracteres.");
    } else {
        ocultarError("password1");
    }

    if (password2 !== password1 || password1.length < 6) {
        isValid = false;
        mostrarError("password2", "Las contraseñas deben coincidir y tener al menos 6 caracteres.");
    } else {
        ocultarError("password2");
    }

    if (!terminosModal) {
        isValid = false;
        mostrarError("terminosModal", "Debe aceptar los términos y condiciones.");
        // Puedes agregar validaciones adicionales para los otros puntos aquí
    } else {
        ocultarError("terminosModal");
    }

    return isValid;  // Devolvemos si el formulario es válido o no
}

function mostrarError(campo, mensaje) {
    const input = document.getElementById(campo);
    const errorDiv = document.getElementById(campo + "Error");

    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    errorDiv.textContent = mensaje;
}

function ocultarError(campo) {
    const input = document.getElementById(campo);
    const errorDiv = document.getElementById(campo + "Error");

    if (campo === "terminosModal") {
        input.classList.add("is-valid"); // Marcar el check como válido
        input.classList.remove("is-invalid");
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }

    errorDiv.textContent = "";
}

