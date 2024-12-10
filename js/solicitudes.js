
async function enviarCliente(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Capturar los valores del formulario
    const form = event.target; // El formulario que disparó el evento
    const Cliente = {
        nombre: form.NyA.value.split(' ')[0] || "", // Primer nombre
        apellido: form.NyA.value.split(' ')[1] || "", // Apellido
        telefono: form.Telefono.value,
        correo: form.Correo.value,
        descripcion: form.descripcion.value // Agregando descripción si es relevante
    };

    const url = "http://localhost:8080/cliente";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Cliente)
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        alert("Datos enviados con éxito");
    } catch (error) {
        console.error("Error al enviar el cliente:", error);
        alert("Ocurrió un error al enviar los datos");
    }
}

// Asocia el evento submit del formulario a la función
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", enviarCliente);
});