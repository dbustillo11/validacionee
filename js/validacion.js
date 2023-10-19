document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    //let isSubmitted = false;  // Flag para saber si el formulario ha sido enviado

    form.addEventListener('submit', function(event) {
        //isSubmitted = true;
        validarFormulario(event);
    });

    /* Añadir eventos de input para validación en tiempo real después del primer submit
    let inputs = form.querySelectorAll('input');
    for (let input of inputs) {
        input.addEventListener('input', function() {
            if (isSubmitted) {
                validarFormulario();
            }
        });
    }*/
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
        //isValid = false;
        mostrarError("nombre", "Debe ingresar un nombre.");
    } else {
        ocultarError("nombre");
    }

    if (apellido === "") {
        //isValid = false;
        mostrarError("apellido", "Debe ingresar un apellido.");
    } else {
        ocultarError("apellido");
    }

    if (email === "" || !email.includes('@')) {
        //isValid = false;
        mostrarError("email", "Debe ingresar un email válido.");
    } else {
        ocultarError("email");
    }

    if (password1 === "" || password1.length < 6) {
        //isValid = false;
        mostrarError("password1", "La contraseña debe tener al menos 6 caracteres.");
    } else {
        ocultarError("password1");
    }

    if (password2 !== password1 || password1.length < 6) {
        //isValid = false;
        mostrarError("password2", "Las contraseñas deben coincidir y tener al menos 6 caracteres.");
    } else {
        ocultarError("password2");
    }

    if (!terminosModal) {
        //isValid = false;
        mostrarError("terminosModal", "Debe aceptar los términos y condiciones.");
        // Puedes agregar validaciones adicionales para los otros puntos aquí
    } else {
        ocultarError("terminosModal");
    }

    validacionTiempoReal();
}

function mostrarError(campo, mensaje) {
    const input = document.getElementById(campo);
    const errorDiv = document.getElementById(campo + "Error");

    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    errorDiv.textContent = mensaje;
    errorDiv.style.display = "block";
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

