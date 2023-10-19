document.addEventListener("DOMContentLoaded", function () {
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

    validacionTiempoReal();
}

function mostrarError(campo, mensaje) {
    let input = document.getElementById(campo);
    let errorDiv = document.getElementById(campo + "Error");

    input.classList.add("is-invalid");
    errorDiv.textContent = mensaje;
    errorDiv.style.display = "block";
}

function ocultarError(campo) {
    let input = document.getElementById(campo);
    let errorDiv = document.getElementById(campo + "Error");

    input.classList.remove("is-invalid");
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
}

function validacionTiempoReal() {

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let terminosModal = document.getElementById("terminosModal");

    nombre.addEventListener('input', (evento) => {
        const valorInput = evento.target.value;
        if (valorInput === "") {
            mostrarError("nombre", "Debe ingresar un nombre.");
        } else {
            ocultarError("nombre");
        }
    })

    apellido.addEventListener('input', (evento) => {
        const valorInput = evento.target.value;
        if (valorInput === "") {
            mostrarError("apellido", "Debe ingresar un apellido.");
        } else {
            ocultarError("apellido");
        }
    })

    email.addEventListener('input', (evento) => {
        const valorInput = evento.target.value;
        if (valorInput === "" || !valorInput.includes('@')) {
            mostrarError("email", "Debe ingresar un email válido.");
        } else {
            ocultarError("email");
        }
    })

    password1.addEventListener('input', (evento) => {
        const valorInput = evento.target.value;
        if (valorInput === "") {
            mostrarError("password1", "Debe ingresar una contraseña.");
        } else {
            ocultarError("password1");
        }
    })

    password2.addEventListener('input', (evento) => {
        const valorInput = evento.target.value;
        if (valorInput === "" || password1.value !== valorInput) {
            mostrarError("password2", "Las contraseñas deben coincidir.");
        } else {
            ocultarError("password2");
        }
    })

    terminosModal.addEventListener('change', (evento) => {
        const valorInput = evento.target.value;
        if (!valorInput) {
            mostrarError("terminosModal", "Debe aceptar los términos y condiciones.");
        } else {
            ocultarError("terminosModal");
        }
    })

}

